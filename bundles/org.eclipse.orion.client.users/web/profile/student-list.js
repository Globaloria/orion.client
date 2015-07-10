/*******************************************************************************
 * @license
 * Copyright (c) 2009, 2013 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials are made 
 * available under the terms of the Eclipse Public License v1.0 
 * (http://www.eclipse.org/legal/epl-v10.html), and the Eclipse Distribution 
 * License v1.0 (http://www.eclipse.org/org/documents/edl-v10.html). 
 * 
 * Contributors: IBM Corporation - initial API and implementation
 ******************************************************************************/
 
/*eslint-env browser, amd*/

/*globals confirm */
define(['i18n!profile/nls/messages', 'require', 'orion/i18nUtil', 'orion/bootstrap', 'orion/status', 'orion/progress', 'orion/operationsClient', 
            'orion/commandRegistry', 'orion/commands', 'orion/selection',
            'orion/searchClient', 'orion/fileClient', 'orion/globalCommands', 'orion/profile/StudentsList',
            'orion/profile/dialogs/NewUserDialog', 'orion/profile/dialogs/ResetPasswordDialog'], 
            function(messages, require, i18nUtil, mBootstrap, mStatus, mProgress, mOperationsClient, mCommandRegistry, mCommands, mSelection, mSearchClient, mFileClient, mGlobalCommands, mStudentsList, NewUserDialog, ResetPasswordDialog) {

    mBootstrap.startup().then(function(core) {
        var serviceRegistry = core.serviceRegistry;
        var preferences = core.preferences;
    
        var fileClient = new mFileClient.FileClient(serviceRegistry);
        var selection = new mSelection.Selection(serviceRegistry);
        var commandRegistry = new mCommandRegistry.CommandRegistry({selection: selection });
        var searcher = new mSearchClient.Searcher({serviceRegistry: serviceRegistry, commandService: commandRegistry, fileService: fileClient});
        
        var operationsClient = new mOperationsClient.OperationsClient(serviceRegistry);
        new mStatus.StatusReportingService(serviceRegistry, operationsClient, "statusPane", "notifications", "notificationArea"); //$NON-NLS-2$ //$NON-NLS-1$ //$NON-NLS-0$
        new mProgress.ProgressService(serviceRegistry, operationsClient, commandRegistry);

        var studentsList = new mStudentsList.StudentsList(serviceRegistry, commandRegistry, selection, searcher, "studentsList", "pageActions", "pageNavigationActions", "selectionTools", "userCommands"); //$NON-NLS-4$ //$NON-NLS-3$ //$NON-NLS-2$ //$NON-NLS-1$ //$NON-NLS-0$

        mGlobalCommands.generateBanner("orion-studentList", serviceRegistry, commandRegistry, preferences, searcher, studentsList); //$NON-NLS-0$ 
        
        var previousPage = new mCommands.Command({
            name : messages["< Previous Page"],
            tooltip: messages["Show previous page of Users names"],
            id : "orion.userlist.prevPage", //$NON-NLS-0$
            hrefCallback : function() {
                var start = studentsList.queryObject.start - studentsList.queryObject.rows;
                if (start < 0) {
                    start = 0;
                }
                return window.location.pathname + "#?start=" + start + "&rows=" + studentsList.queryObject.rows; //$NON-NLS-1$ //$NON-NLS-0$
            },
            visibleWhen : function(item) {
                return studentsList.queryObject.start > 0;
            }
        });
        commandRegistry.addCommand(previousPage);

        var nextPage = new mCommands.Command({
            name : messages["Next Page >"],
            tooltip: messages["Show next page of User names"],
            id : "orion.userlist.nextPage", //$NON-NLS-0$
            hrefCallback : function() {
                return window.location.pathname + "#?start=" + (studentsList.queryObject.start + studentsList.queryObject.rows) + "&rows=" + studentsList.queryObject.rows; //$NON-NLS-1$ //$NON-NLS-0$
            },
            visibleWhen : function(item) {
                return studentsList.queryObject.length === 0 ? true : (studentsList.queryObject.start + studentsList.queryObject.rows) < studentsList.queryObject.length;
            }
        });
        commandRegistry.addCommand(nextPage);

        // define the command contributions - where things appear, first the groups
        commandRegistry.addCommandGroup("pageActions", "eclipse.usersGroup", 100); //$NON-NLS-1$ //$NON-NLS-0$
        commandRegistry.addCommandGroup("selectionTools", "eclipse.selectionGroup", 500, messages["More"]); //$NON-NLS-1$ //$NON-NLS-0$
        
        commandRegistry.registerCommandContribution("pageNavigationActions", "orion.userlist.prevPage", 1);  //$NON-NLS-1$ //$NON-NLS-0$
        commandRegistry.registerCommandContribution("pageNavigationActions", "orion.userlist.nextPage", 2);  //$NON-NLS-1$ //$NON-NLS-0$
        
        commandRegistry.registerCommandContribution("selectionTools", "eclipse.deleteUser", 1, "eclipse.selectionGroup"); //$NON-NLS-2$ //$NON-NLS-1$ //$NON-NLS-0$

        //every time the user manually changes the hash, we need to load the user list again
        window.addEventListener("hashchange", function() { //$NON-NLS-0$
            studentsList.loadUsers();
        }, false);
        studentsList.loadUsers();
    });
});