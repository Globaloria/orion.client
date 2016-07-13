/*******************************************************************************
 * Copyright (c) 2013 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License v1.0
 * (http://www.eclipse.org/legal/epl-v10.html), and the Eclipse Distribution
 * License v1.0 (http://www.eclipse.org/org/documents/edl-v10.html).
 *
 * Contributors: IBM Corporation - initial API and implementation
 ******************************************************************************/

/*eslint-env browser, amd*/
/*global URL*/
define([
    'mixloginstatic/javascript/jquery',
], function(jquery) {

    'use strict';

    /**
     * This object contains all the courses we offer on the GIDE
     * as well as the mapping for its files
     */
    var namespacingMapping = {
        "ActionGame" : {
            "02_drawShape"               : "JS1:Build_Basic_Game_-_Draw_Shape",
            "03_moveShape"               : "JS1:Build_Basic_Game_-_Move_Shape",
            "04_controlShape"            : "JS1:Build_Basic_Game_-_Control_Shape",
            "05_displayScore"            : "JS1:Build_Basic_Game_-_Display_Score",
            "06_increaseScore"           : "JS1:Build_Basic_Game_-_Increase_Score",
            "07_multipleCollectables"    : "JS1:Build_Basic_Game_-_Multiple_Collectables",
            "08_multipleEnemies"         : "JS1:Build_Basic_Game_-_Multiple_Enemies",
            "09_addArtwork"              : "JS1:Customize_Action_Game_-_Add_Artwork",
            "10_addSound"                : "JS1:Customize_Action_Game_-_Add_Sounds",
            "11_addGameOver"             : "JS1:Customize_Action_Game_-_Add_Game_Over_Screen",
            "12_extendScene"             : "JS1:Customize_Action_Game_-_Extend_Scene",
            "13_addGoal"                 : "JS1:Customize_Action_Game_-_Add_Goal_and_Victory_Screen",
            "14a_addIngredientMusic"     : "Help:JS_Ingredient_-_Background_Music",
            "14b_addIngredientMusic"     : "Help:JS_Ingredient_-_Background_Music",
            "14c_addIngredientMusic"     : "Help:JS_Ingredient_-_Background_Music",
            "14d_addIngredientMusic"     : "Help:JS_Ingredient_-_Background_Music",
            "14e_addIngredientMusic"     : "Help:JS_Ingredient_-_Background_Music",

            "14a_addIngredientHealth"    : "Help:JS_Ingredient_-_Health_Bar",
            "14b_addIngredientHealth"    : "Help:JS_Ingredient_-_Health_Bar",
            "14c_addIngredientHealth"    : "Help:JS_Ingredient_-_Health_Bar",
            "14d_addIngredientHealth"    : "Help:JS_Ingredient_-_Health_Bar",
            "14e_addIngredientHealth"    : "Help:JS_Ingredient_-_Health_Bar",

            "14a_addIngredientKeyboard"  : "Help:JS_Ingredient_-_Keyboard_Control",
            "14b_addIngredientKeyboard"  : "Help:JS_Ingredient_-_Keyboard_Control",
            "14c_addIngredientKeyboard"  : "Help:JS_Ingredient_-_Keyboard_Control",
            "14d_addIngredientKeyboard"  : "Help:JS_Ingredient_-_Keyboard_Control",
            "14e_addIngredientKeyboard"  : "Help:JS_Ingredient_-_Keyboard_Control",

            "14a_addIngredientAnimation" : "Help:JS_Ingredient_-_Animation",
            "14b_addIngredientAnimation" : "Help:JS_Ingredient_-_Animation",
            "14c_addIngredientAnimation" : "Help:JS_Ingredient_-_Animation",
            "14d_addIngredientAnimation" : "Help:JS_Ingredient_-_Animation",
            "14e_addIngredientAnimation" : "Help:JS_Ingredient_-_Animation",

            "14a_addIngredientJumping"   : "Help:JS_Ingredient_-_Jumping",
            "14b_addIngredientJumping"   : "Help:JS_Ingredient_-_Jumping",
            "14c_addIngredientJumping"   : "Help:JS_Ingredient_-_Jumping",
            "14d_addIngredientJumping"   : "Help:JS_Ingredient_-_Jumping",
            "14e_addIngredientJumping"   : "Help:JS_Ingredient_-_Jumping",

            "15_playtest"                : "JS1:Customize_Action_Game_-_Playtest",
            "16_tuneGamePlay"            : "JS1:Customize_Action_Game_-_Tune_Game_Play",
            "17_presentGame"             : "JS1:Customize_Action_Game_-_Present_Game"
        },
        "GameDesign" : {
            "01_csw_homepage"         : "CSW:Setup_Your_Website",
            "02_csw_homepage"         : "CSW:Design_Game_Scene",
            "03_csw_homepage"         : "CSW:Make_Paper_Prototype",
            "04_csw_homepage"         : "CSW:Create_Game_Art",
            "05_csw_homepage"         : "CSW:Style_Website_with_CSS",
            "06_csw_homepage"         : "CSW:Add_More_HTML_Pages",
            "07_csw_homepage"         : "CSW:Present_Game_Concept",
            "08_csw_homepage"         : "CSW:Get_Globey_Ready",
            "09_createCanvas"         : "JS1:Build_Basic_Game_-_Create_Canvas",
            "10_drawShape"            : "JS1:Build_Basic_Game_-_Draw_Shape",
            "11_moveShape"            : "JS1:Build_Basic_Game_-_Move_Shape",
            "12_controlShape"         : "JS1:Build_Basic_Game_-_Control_Shape",
            "13_displayScore"         : "JS1:Build_Basic_Game_-_Display_Score",
            "14_increaseScore"        : "JS1:Build_Basic_Game_-_Increase_Score",
            "15_multipleCollectables" : "JS1:Build_Basic_Game_-_Multiple_Collectables",
            "16_multipleEnemies"      : "JS1:Build_Basic_Game_-_Multiple_Enemies",
            "17_addArtwork"           : "JS1:Customize_Action_Game_-_Add_Artwork",
            "18_addSound"             : "JS1:Customize_Action_Game_-_Add_Sounds",
            "19_addGameOver"          : "JS1:Customize_Action_Game_-_Add_Game_Over_Screen",
            "20_extendScene"          : "JS1:Customize_Action_Game_-_Extend_Scene",
            "21_addGoal"              : "JS1:Customize_Action_Game_-_Add_Goal_and_Victory_Screen",
            "22_playtest"             : "JS1:Customize_Action_Game_-_Playtest",
            "23_tuneGamePlay"         : "JS1:Customize_Action_Game_-_Tune_Game_Play",
            "24_presentGame"          : "JS1:Customize_Action_Game_-_Present_Game"
        }
    };

    /**
     * This object contains the mapping to be able to create
     * next lessons for different courses
     */
    var nextLessonMapping = {
        "ActionGame" : [
            "01_createCanvas",
            "02_drawShape",
            "03_moveShape",
            "04_controlShape",
            "05_displayScore",
            "06_increaseScore",
            "07_multipleCollectables",
            "08_multipleEnemies",
            "09_addArtwork",
            "10_addSound",
            "11_addGameOver",
            "12_extendScene",
            "13_addGoal",
            "playtest",
            "tuneGamePlay",
            "presentGame"
        ],
        "GameDesign" : [
            "01_csw_homepage",
            "02_csw_homepage",
            "03_csw_homepage",
            "04_csw_homepage",
            "05_csw_homepage",
            "06_csw_homepage",
            "07_csw_homepage",
            "08_csw_homepage",
            "09_createCanvas",
            "10_drawShape",
            "11_moveShape",
            "12_controlShape",
            "13_displayScore",
            "14_increaseScore",
            "15_multipleCollectables",
            "16_multipleEnemies",
            "17_addArtwork",
            "18_addSound",
            "19_addGameOver",
            "20_extendScene",
            "21_addGoal",
            "22_playtest",
            "23_tuneGamePlay",
            "24_presentGame"
        ]
    };

    // Constructor
    function Gide(options) {
        options = options || {};

        this.namespacingMapping = namespacingMapping;
        this.nextLessonMapping  = nextLessonMapping;
    };

    Gide.prototype = {

        getCurrentLessonFromURL: function(hash) {
            var hashArr = hash.split(',');

            // The first element in this array contains the url with out
            // the editor portion
            var hash = hashArr[0];
            hash = hash.split('/');

            var filename = hash[hash.length - 1];

            return this.removeFileExtension(filename);
        },

        buildIframeHTMLWindow: function(url) {
            var iframe                 = document.createElement("iframe");
            iframe.id                  = 'previewHTMLFrame';
            iframe.name                = 'HTML Previewer';
            iframe.type                = "text/html";
            iframe.sandbox             = "allow-scripts allow-same-origin allow-forms";
            iframe.style.width         = "100%";
            iframe.style.height        = "100%";
            iframe.src                 = url;

            return iframe;
        },

        destroyPreviewInstructionDiv: function() {
            $('#previewInstructionDiv').remove();
        },

        destroyIframeNavigationWindow: function() {
            $("#previewNavWindow").remove();
        },

        destroyIframeHTMLWindow: function() {
            $("#previewHTMLFrame").remove();
        },

        createIframeWindow: function(targetNode) {
            var frameDiv         = this.createFrameDiv();
            var iframeContentUrl = this.getIframeContentUrl();
            var iframe           = this.buildIframeHTMLWindow(iframeContentUrl);
            var navigationDiv    = this.buildIframeNavigationWindow(iframeContentUrl);

            // navigationDiv.appendChild(iframe);
            frameDiv.appendChild(navigationDiv);
            frameDiv.appendChild(iframe);

            var previewEl = document.getElementById("previewHtml");
            if (previewEl === null)
                targetNode.appendChild(frameDiv);
        },

        buildIframeNavigationWindow: function(iframeContentUrl) {
            var navigationDiv = document.createElement("div");
            navigationDiv.id  = 'previewNavWindow';

            // Add a refresh button to reload the game
            var reloadButton         = document.createElement('button');
            reloadButton.textContent = 'Refresh Preview';
            reloadButton.className   = 'btn glife glife-green';
            reloadButton.setAttribute('onClick', 'document.getElementById("previewHTMLFrame").contentWindow.location.reload()');

            // Add a refresh button to reload the game
            var newWindowButton         = document.createElement('a');
            newWindowButton.textContent = 'Open in New Page';
            newWindowButton.className   = 'btn glife glife-navy';
            newWindowButton.setAttribute('href', iframeContentUrl);
            newWindowButton.setAttribute('target', '_blank');

            // Add a toggle screen button
            var toggleWindowButton         = document.createElement('button');
            toggleWindowButton.textContent = 'Toggle Window';
            toggleWindowButton.className   = 'btn glife glife-navy--outline';
            toggleWindowButton.setAttribute('onClick', 'toggleWindow();');
            toggleWindowButton.setAttribute('target', '_blank');

            navigationDiv.appendChild(reloadButton);
            navigationDiv.appendChild(newWindowButton);

            if (this.displayToggleBtn())
                navigationDiv.appendChild(toggleWindowButton);

            return navigationDiv;
        },

        getIframeContentUrl: function() {
            var currentFile = window.location.hash.slice(1, window.location.hash.length);
            //TODO not sure why the edit view adds an extra 25 to the %20 space character, but this adjusts for that
            currentFile  = currentFile.replace(new RegExp('\%2025', 'g'),'\%20');
            currentFile  = currentFile.replace(',editor=orion.editor.html','');
            var port     = ":"+window.location.port;
            var protocol = window.location.protocol+"//";
            var url;

            if(window.location.port!=='')
                url = protocol+window.location.hostname+port+currentFile;
            else
                url = protocol+window.location.hostname+currentFile;

            return url;
        },

        createFrameDiv: function() {
            // Find previewHtml element to check if it exists
            var previewEl = document.getElementById("previewHtml");

            // Only create frameDiv if it does not exists
            if (previewEl == null) {
                var frameDiv               = document.createElement("div");
                frameDiv.id                = 'previewHtml';
                frameDiv.style.frameborder = 0;
                frameDiv.style.borderWidth = 0;
                frameDiv.style.width       = "100%";
                frameDiv.style.height      = "100%";

                return frameDiv;
            }

            return previewEl;
        },

        getCourseName: function(hash) {
            hash = hash.split('/');

            // Check if the current element contains OrionContent
            // if it does, the next element will be the course folder.
            // Return that element
            var re = /-OrionContent/;
            for (var i = 0; i < hash.length; i++) {
                if (hash[i].match(re)) {
                    return hash[i+1];
                }
            }
        },

        displayToggleBtn: function() {
            var windowHash = window.location.hash;
            var lessonName = this.getCurrentLessonFromURL(windowHash)
            var courseName = this.getCourseName(windowHash);

            return namespacingMapping[courseName].hasOwnProperty(lessonName) ? true: false;
        },

        createHelpDiv: function(topicFullURL) {
            // Create new 'sticky' div for help and view topic buttons
            var helpDiv       = document.createElement('div');
            helpDiv.id        = 'helpDiv';
            helpDiv.className = 'help-div';

            // Add a refresh button to reload the game
            var getHelpButton         = document.createElement("a");
            getHelpButton.textContent = 'Get Help?';
            getHelpButton.className   = 'btn glife-navy';

            getHelpButton.setAttribute('href', 'https://globaloriahelp.zendesk.com/hc/en-us/categories/200406169-GIDE-Help');
            getHelpButton.setAttribute('target', '_blank');

            // Add a refresh button to reload the game
            var viewTopicButton         = document.createElement("a");
            viewTopicButton.textContent = 'View Full Topic';
            viewTopicButton.className   = 'btn glife-navy';

            viewTopicButton.setAttribute('href', topicFullURL);
            viewTopicButton.setAttribute('target', '_blank');

            helpDiv.appendChild(getHelpButton);
            helpDiv.appendChild(viewTopicButton);

            return helpDiv;
        },

        buildIframeInstructionWindow: function() {
            var windowHash = window.location.hash;
            var lessonName = this.getCurrentLessonFromURL(windowHash);
            var courseName = this.getCourseName(windowHash);
            // Get preview html div to attatch instructional div
            var targetNode = document.getElementById('previewHtml');

            // Add the current page iframe to the current page
            var instructionDiv          = document.createElement("div");
            instructionDiv.id           = 'previewInstructionDiv';
            instructionDiv.style.border = "none";
            instructionDiv.style.width  = "100%";
            instructionDiv.style.height = "100%";

            var lessonTopicMapping = namespacingMapping[courseName];

            // Only create help and topic links if this file contains a link to map to
            if(lessonTopicMapping.hasOwnProperty(lessonName)) {
                var topicBaseURL      = "https://myglife.org/mwiki/index.php/"
                var topicFullURL      = topicBaseURL + lessonTopicMapping[lessonName];

                // Grab reference of this because this will change context inside the ajax call
                var _self = this;

                // Make ajax call to get current lesson contents
                $.ajax({
                    method: 'GET',
                    url: topicFullURL,
                }).then(function(results) {
                    // Replace all instance of an absolute path with a full url
                    var re            = /"\/mwiki/gi;
                    var updatedString = results.replace(re, '"https://myglife.org/mwiki');

                    // Create temp div child to create a searchable DOM element from
                    // the html string we got back from ajax
                    var tempDiv       = document.createElement('div');
                    tempDiv.innerHTML = updatedString;
                    var childNodes    = tempDiv.childNodes;
                    var content       = $(childNodes).find('#exportContentToGIDE');
                    
                    // Link css styles to the content
                    var link  = document.createElement('link');
                    link.rel  = 'stylesheet';
                    link.type = 'text/css';
                    link.href = 'https://myglife.org/mwiki/skins/globaloria/globaloria.css';

                    // Create new 'sticky' div for help and view topic buttons
                    var helpDiv = _self.createHelpDiv(topicFullURL);

                    instructionDiv.appendChild(link);
                    instructionDiv.appendChild(content[0]);
                    instructionDiv.appendChild(helpDiv);

                    targetNode.appendChild(instructionDiv);
                },
                function(results) {
                    console.log('Error Loading AJAX Request Content');
                    console.log(results);
                });

            } else {
                var notFoundH1             = document.createElement('h1');
                notFoundH1.style.color     = '#ffffff';
                notFoundH1.style.textAlign = 'center';
                notFoundH1.innerHTML       = 'There was an error with the file you are trying to preview';

                var notFoundGif   = document.createElement('img');
                notFoundGif.src   = '../www404noHeader2.gif';
                notFoundGif.style.display = 'block';
                notFoundGif.style.marginLeft = 'auto';
                notFoundGif.style.marginRight = 'auto';
                notFoundGif.alt   = 'Sorry! Lesson not found';
                document.querySelector('.orionHTML').style.backgroundColor = '#004A80';

                var notFoundDiv = document.createElement('div');
                notFoundDiv.className = 'not-found-div';

                notFoundDiv.appendChild(notFoundH1);
                notFoundDiv.appendChild(notFoundGif);
                instructionDiv.appendChild(notFoundDiv);
            }

            targetNode.appendChild(instructionDiv);
        },

        removeFileExtension: function(filename) {
            return filename.split('.')[0];
        },

        addFileExtension: function(nextFilename, fileExt) {
            return nextFilename + '.' + fileExt;
        }
    }

    Gide.prototype.constructor = Gide;

    return {
        Gide: Gide
    };
});
