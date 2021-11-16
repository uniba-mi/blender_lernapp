(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about-elearning/about-elearning.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about-elearning/about-elearning.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"start_content\">\n    <h3 id=\"ae1\">Important notes up front</h3>\n    <p>Blender has a steep learning curve. While you can expect to achieve first results relatively quickly it will take a lot of practice\n        to achieve visually appealing results. You will do lots of errors during your first steps and often see yourself restarting a model from\n        scratch. This should however not discourage you. Every start is difficult especiall when dealing with a complex programm like Blender.\n    </p>\n    <h3>What will you achieve by following this E-Learning?</h3>\n    <p>By following this E-Learning you will get a solid understanding of the overall task of modelling and animating simple 3D models.\n        Maybe you already took a look at the outline to see what's coming up. The E-Learning consists of 3 main chapters to guide you\n        through most parts of a modern 3D production pipeline. With the example of Blender you will learn about the layout of scenes, \n        the modelling task itself, rigging and animation.\n    </p>\n    <p>\n        In the modelling part of this E-Learning you will create a firetruck with all kinds of different details which will teach you the \n        foundation you need to create small and large scale 3D models on your own. The animation part of this E-Learning will give you guidance\n        on how to bring a small robot to live by animating it.\n    </p>\n    <h3>What this E-Learning will not cover</h3>\n    <p>This E-Learning serves as an introduction into the topic. This also means that there are several aspects that can not be covered\n        within the demonstrated lectures. To answer a question many of you will have: No, you will not be able to create high class\n        3D models that can (or maybe rather should) be used in video game engines. To get production ready assets for video games a lot of\n        advanced topics need to be covered that are not in the scope of this E-Learning. This includes:\n    </p>\n    <ul>\n        <li>UV Unwrapping</li>\n        <li>Detailed texturing</li>\n        <li>Game ready rigs</li>\n        <li>Conversion of high poly models into low poly ones</li>\n    </ul>\n    <p>\n        However I will give you guidance in appropriate places on where to follow up if you are interested in these topics. If you have no experience\n        in 3D modelling and you don't even understand what all this stuff above is about, no problem! This E-Learning will teach you all the foundations\n        you need.\n    </p>\n    <h3>How can I get the most out of this E-Learning?</h3>\n    <p>During this E-Learning I will be demonstrating different techniques you can use to get into using Blender. This is however not the only\n        way to do certains things. Often you will find yourself wondering if your way of doing it is also fine, you may even find a way that you find\n        a lot easier compared to what I am doing and this is absolutely fine! There are always alternative solutions and where I am able to I will\n        also guide you to them or even demonstrate them.\n    </p>\n    <p>\n        There are also a couple of theory lessons. You should give them a chance even if they are not as appealing to you and you just want to continue\n        working on your model. The theory lessons will give you background knowledge you will need to understand why certain things work and others don't.\n        They are also not related to Blender in specific which means you can also apply them when working with other 3D programms.\n    </p>\n    <p>\n        Using the following visual clue I will guide you to additional resources which  are mentioned during the videos or provide additional information you\n        might find useful in order to learn more:\n    </p>\n    <p class=\"ui info message\">This will guide you to additional resources:<br>\n        <a href=\"https://www.blender.org/about/\" target=\"_blank\">\n          <strong>Find out more about Blender!</strong>\n        </a><br>\n    </p>\n    <p>\n        I will also give some visual clue about crucial things I need to stress. This will look like this:\n    </p>\n    <p class=\"ui red message\">You must not quit this E-Learning before you finished it!</p>\n    <h3>Key components of this E-Learning</h3>\n    <p>An important part of this E-Learning are videos. To make it easier to follow along the provided videos I will always display the shortcuts used in two places:</p>\n    <ul>\n        <li>Within the videos in the bottom left corner</li>\n        <li>In an additional table below the video which will be updated along the video</li>\n    </ul>\n    <p>\n        Additionally there sometimes are small control questions after chapters. These are ment to test yourself if you understand the key parts I found to be important.\n        You are recommend to answer each question to make sure you remember everything important.\n    </p>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ui list\" *ngIf=\"!about\" style=\"text-align:center; margin-top: 100px; margin-bottom: 50px;\" >\n  <a class=\"item\" (click)=\"aboutFunc()\">About</a>\n</div>\n\n<div *ngIf=\"about\" style=\"margin: 30px; text-align: center;\" class=\"ui message\">\n  <i class=\"close icon\" (click)=\"hideAbout()\"></i>\n  <h4>This project was created by Kevin Sabanagic</h4>\n  <p>Master-Thesis at Otto-Friedrich University Bamberg.\n    <br>April 2021\n  </p>\n  <h4>Since then, updated and maintained by the team of the chair of media informatics.</h4>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adding-black-parts/adding-black-parts.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adding-black-parts/adding-black-parts.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"start_content\">\n    <h3 id=\"toc_blender\">Adding some detail to connect individual model parts</h3>\n    <div class=\"ui info message\">\n      <h5>In this section you will learn:</h5>\n      <ul>\n        <li>What extruding faces means</li>\n        <li>How to extrude faces</li>\n      </ul>\n    </div>\n    <div class=\"vdiv\">\n      <app-xml-video-component videoname=\"adding_black_parts.mp4\"></app-xml-video-component>\n    </div>\n    <div class=\"quiz\">\n      <app-quiz-component question=\"What is the shortcut for extruding?\" \n        correctAnswer=\"E\" [answers]=\"['Depends on what you have selected','E',\n        'Strg+E']\" qId=\"ID1\"></app-quiz-component>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adding-details/adding-details.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adding-details/adding-details.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"start_content\">\n    <h3 id=\"toc_blender\">Adding ladders</h3>\n    <div class=\"ui info message\">\n      <h5>In this section you will learn:</h5>\n      <ul>\n        <li>How to start adding some details to your object</li>\n        <li>How to use Edge Slide</li>\n        <li>What the effect of adding objects in edit mode is</li>\n        <li>What the subdivision surface modifier is and does</li>\n      </ul>\n    </div>\n    <div class=\"vdiv\">\n      <app-xml-video-component videoname=\"adding_details_01.mp4\"></app-xml-video-component>\n    </div>\n    <div class=\"quiz\">\n      <app-quiz-component question=\"What is the main reason you want to add objects in edit mode\" \n        correctAnswer=\"There is no need to join later\" [answers]=\"['There is no need to join later','To save time',\n        'To optimize the mesh']\" qId=\"ID1\"></app-quiz-component>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adding-extinguisher/adding-extinguisher.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adding-extinguisher/adding-extinguisher.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"start_content\">\n    <h3 id=\"toc_blender\">Adding some fire extinguishers to our model</h3>\n    <div class=\"ui info message\">\n      <h5>In this section you will learn:</h5>\n      <ul>\n        <li>How to model smaller objects using extrusion</li>\n      </ul>\n    </div>\n    <div class=\"vdiv\">\n      <app-xml-video-component videoname=\"adding_extinguisher.mp4\"></app-xml-video-component>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adding-ladders/adding-ladders.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adding-ladders/adding-ladders.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"start_content\">\n    <h3 id=\"toc_blender\">Adding ladders</h3>\n    <div class=\"ui info message\">\n      <h5>In this section you will learn:</h5>\n      <ul>\n        <li>What array modifier is and how it can be applied</li>\n        <li>How modifiers can be combined to achieve desired effects</li>\n      </ul>\n    </div>\n    <div class=\"vdiv\">\n      <app-xml-video-component videoname=\"adding_ladders.mp4\"></app-xml-video-component>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adding-lights/adding-lights.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adding-lights/adding-lights.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"start_content\">\n    <h3 id=\"toc_blender\">Adding light to our fire truck</h3>\n    <div class=\"ui info message\">\n      <h5>In this section you will:</h5>\n      <ul>\n        <li>Add some more details to make the truck look more realistic</li>\n        <li>Once again apply the subdivision surface modifier</li>\n      </ul>\n    </div>\n    <div class=\"vdiv\">\n      <app-xml-video-component videoname=\"adding_lights.mp4\"></app-xml-video-component>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adding-materials/adding-materials.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adding-materials/adding-materials.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"start_content\">\n    <h3 id=\"toc_blender\">Adding materials</h3>\n    <div class=\"ui info message\">\n      <h5>In this section you will learn:</h5>\n      <ul>\n        <li>How to add and remove materials</li>\n        <li>How to do basic modifications to a material</li>\n        <li>How to see a preview of your materials</li>\n      </ul>\n    </div>\n    <div class=\"vdiv\">\n      <app-basic-video-component videoname=\"adding_materials.mp4\"></app-basic-video-component>\n    </div>\n    <div class=\"quiz\">\n      <app-quiz-component question=\"Can an object have multiple materials applied to it?\" \n        correctAnswer=\"Yes\" [answers]=\"['No','Depends on the object',\n        'Yes']\" qId=\"ID1\"></app-quiz-component>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adding-reference-material/adding-reference-material.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adding-reference-material/adding-reference-material.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"start_content\">\n    <h3 id=\"toc_blender\">Adding reference material</h3>\n    <div class=\"ui info message\">\n      <h5>In this section you will learn:</h5>\n      <ul>\n        <li>How to import reference material into your scene</li>\n        <li>How to switch the view to different sides</li>\n        <li>What orthographic view means</li>\n      </ul>\n    </div>\n    <div class=\"ui info message download\">\n      <h5>Please grab the material needed for this section <a href=\"../../assets/files/reference_material.zip\" target=\"_blank\" download=\"reference_materials.zip\">here</a></h5>\n      <p class=\"source\">Source of the images: https://images.app.goo.gl/68KsuVptpeRXEzcB6</p>\n    </div>\n    <div class=\"vdiv\">\n      <app-xml-video-component videoname=\"ft_adding_reference_material.mp4\"></app-xml-video-component>\n    </div>\n    <div class=\"quiz\">\n      <app-quiz-component question=\"For some reason you cannot see your reference material when you rotate around your object. What can be the cause?\" \n        correctAnswer=\"The image was added as background\" [answers]=\"['The image was not added as background','The image was added as background',\n        'The files is missing on your computer']\" qId=\"ID1\"></app-quiz-component>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adding-stairs-front/adding-stairs-front.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adding-stairs-front/adding-stairs-front.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"start_content\">\n    <h3 id=\"toc_blender\">Adding the stairs for our cabin</h3>\n    <div class=\"ui info message\">\n      <h5>In this section you will learn:</h5>\n      <ul>\n        <li>How repair a broken mesh</li>\n        <li>How to fill in holes</li>\n      </ul>\n    </div>\n    <div class=\"vdiv\">\n      <app-xml-video-component videoname=\"adding_stairs_front.mp4\"></app-xml-video-component>\n    </div>\n    <div class=\"quiz\">\n      <app-quiz-component question=\"What is the shortcut for filling a face between selected edges or vertices?\" \n        correctAnswer=\"F\" [answers]=\"['F','Shift+F',\n        'Alt+F']\" qId=\"ID1\"></app-quiz-component>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adding-textures/adding-textures.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adding-textures/adding-textures.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"start_content\">\n    <h3 id=\"toc_blender\">Adding textures</h3>\n    <div class=\"ui info message\">\n      <h5>In this section you will learn:</h5>\n      <ul>\n        <li>What the shading workspace looks like</li>\n        <li>How to insert textures and use them</li>\n      </ul>\n  </div>\n  <div class=\"ui info message download\">\n    <h5>Please grab the material needed for this section <a href=\"../../assets/images/metal_texture.png\" target=\"_blank\" download=\"metal.png\">here</a></h5>\n  </div>\n    <div class=\"vdiv\">\n      <app-xml-video-component videoname=\"adding_textures.mp4\"></app-xml-video-component>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adding-top-light/adding-top-light.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adding-top-light/adding-top-light.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"start_content\">\n    <h3 id=\"toc_blender\">Adding the top light</h3>\n    <div class=\"ui info message\">\n      <h5>In this section you will learn:</h5>\n      <ul>\n        <li>How to use the F3 menu of blender</li>\n        <li>How to make holes in your object using \"Bridge Edge Loops\"</li>\n      </ul>\n    </div>\n    <div class=\"vdiv\">\n      <app-xml-video-component videoname=\"adding_top_light.mp4\"></app-xml-video-component>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adding-wheels/adding-wheels.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adding-wheels/adding-wheels.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"start_content\">\n    <h3 id=\"toc_blender\">Adding wheels</h3>\n    <div class=\"ui info message\">\n      <h5>In this section you will learn:</h5>\n      <ul>\n        <li>What the mirror modifier is and how to use it</li>\n        <li>How to inset faces</li>\n      </ul>\n    </div>\n    <div class=\"vdiv\">\n      <app-xml-video-component videoname=\"adding_wheels.mp4\"></app-xml-video-component>\n    </div>\n    <div class=\"quiz\">\n      <app-quiz-component question=\"You add in a mirror modifier but nothing seems to happen. What is a possible root cause?\" \n        correctAnswer=\"The object is mirrored along a symmetry axis\" [answers]=\"['The object is mirrored along a symmetry axis','Modifiers must be applied before we can see them',\n        'Modifiers are only visible in rendered images']\" qId=\"ID1\"></app-quiz-component>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adding-windows/adding-windows.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adding-windows/adding-windows.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"start_content\">\n    <h3 id=\"toc_blender\">Adding windows</h3>\n    <div class=\"ui info message\">\n      <h5>In this section you will:</h5>\n      <ul>\n        <li>Add in some windows by combining methods previously applied</li>\n      </ul>\n    </div>\n    <div class=\"vdiv\">\n      <app-xml-video-component videoname=\"adding_windows.mp4\"></app-xml-video-component>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/animate-robot/animate-robot.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/animate-robot/animate-robot.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"start_content\">\n    <h3 id=\"toc_blender\">Animating our robot</h3>\n    <div class=\"ui info message\">\n      <h5>In this section you will learn:</h5>\n      <ul>\n        <li>How to work with animation workspace</li>\n        <li>How to control the properties of an animation</li>\n        <li>How to insert keyframes</li>\n      </ul>\n    </div>\n    <div class=\"vdiv\">\n      <app-xml-video-component videoname=\"animating_robot.mp4\"></app-xml-video-component>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/animate-rocket/animate-rocket.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/animate-rocket/animate-rocket.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"start_content\">\n    <h3 id=\"toc_blender\">Animating rocket and camera</h3>\n    <div class=\"ui info message\">\n      <h5>In this section you will:</h5>\n      <ul>\n        <li>Animate rocket and camera</li>\n      </ul>\n    </div>\n    <div class=\"vdiv\">\n      <app-xml-video-component videoname=\"anim_rocket_cam.mp4\"></app-xml-video-component>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/animate-rotator/animate-rotator.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/animate-rotator/animate-rotator.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"start_content\">\n    <h3 id=\"toc_blender\">Animate the rotator</h3>\n    <div class=\"ui info message\">\n      <h5>In this section you will learn:</h5>\n      <ul>\n        <li>How to animate the rotator on top of our robot</li>\n        <li>How to inspect values in the \"Graph Editor\"</li>\n      </ul>\n    </div>\n    <div class=\"vdiv\">\n      <app-xml-video-component videoname=\"anim_rotator.mp4\"></app-xml-video-component>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/animation-chapter-overview/animation-chapter-overview.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/animation-chapter-overview/animation-chapter-overview.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"start_content\">\n    <h3 id=\"toc_blender\">What is the animation chapter about?</h3>\n    <p>\n        Now that you have a basic understanding on how to model more complex objects, there is one thing left to bring your objects to \n        life. Often you will want to add in some animation to create less static scenes. In this chapter we will focus on exactly that. \n        I will introduce you to a basic workflow that can not only be applied to characters like humans or animals called rigging. We \n        will create a little animation for a small rocket to avoid getting hit by a rocket. In this process you will learn more about \n        how different parts in the animation play together and how to set up a smooth animation.\n    </p>\n    <figure class=\"center\">\n        <img src=\"../../assets/images/robo.PNG\" alt=\"Picture of Robot and rocket\">\n        <figcaption id=\"uncentered_cap\">\n            The robo and rocket that will be animated\n        </figcaption>\n    </figure>\n    <p>\n        The approach of this chapter is a little bit different to the one from the modelling chapter. Since it will anyway be almost \n        impossible to follow along and repeat the exact same steps I did, I encourage you to explore this chapter a little bit on your \n        own. The first few lections are optional. I am creating the robot and rocket you see in the picture from scratch. Feel free to skip\n        those and download the resources attached to the chapter \"Import objects into Blender\" or go ahead and practice your modelling \n        skills by creating your own. After that create your own little animation following the process I did. Maybe in your animation the \n        robot will get hit by the rocket, just be creative.\n    </p>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <button type=\"button\" id=\"menu_button\" (click)=\"myFunc()\">\n    <img src=\"../assets/images/menu_icon.png\" alt=\"menu\" id=\"menu_icon\">\n  </button> \n  <h1 class=\"ui header\" style=\"text-align:center; margin-top: 30px; margin-bottom: 50px; \">\n    {{ title }}\n  </h1>\n  <div class=\"ui grid container\" style=\"min-width:85%;\">\n    <div class=\"one wide column\">\n      <div class=\"ui left fixed vertical menu\" id=\"menu\" style=\"max-width:25%; overflow: auto;\">\n        <a class=\"item\" id=\"menu_item\">\n          <button type=\"button\" id=\"menu_button\" (click)=\"myFunc()\">\n              <img src=\"../assets/images/menu_icon.png\" alt=\"menu\" id=\"menu_icon\">\n          </button>\n        </a>\n        <a class=\"item\" routerLink=\"/home\" routerLinkActive=\"active\">\n          Home\n        </a>\n        <div class=\"item\">\n          <h4>Setup</h4>\n          <a class=\"item\" routerLink=\"/required-tools\" routerLinkActive=\"active\">\n            Required Tools\n          </a>\n          <a class=\"item\" routerLink=\"/about-elearning\" routerLinkActive=\"active\">\n            About this E-Learning\n          </a>\n        </div>\n        <div class=\"item\">\n          <h4>Part 1: Introduction to Blender</h4>\n          <a class=\"item\" routerLink=\"/first-startup\" routerLinkActive=\"active\">\n            Your first startup of Blender\n          </a>\n          <a class=\"item\" routerLink=\"/blender-ui\" routerLinkActive=\"active\">\n            Blenders UI\n          </a>\n          <a class=\"item\" routerLink=\"/viewport\" routerLinkActive=\"active\">\n            First steps in the 3D Viewport\n          </a>\n          <a class=\"item\" routerLink=\"/t-coordinate-system\" routerLinkActive=\"active\">\n            Theory: Coordinate systems\n          </a>\n          <a class=\"item\" routerLink=\"/edit-mode\" routerLinkActive=\"active\">\n            Introduction to Edit Mode\n          </a>\n          <a class=\"item\" routerLink=\"/first-scene\" routerLinkActive=\"active\">\n            Building your first scene\n          </a>\n        </div>\n        <div class=\"item\">\n          <h4>Part 2: Modelling</h4>\n          <a class=\"item\" routerLink=\"/modelling-chapter-overview\" routerLinkActive=\"active\">\n            Modelling chapter overview\n          </a>\n          <a class=\"item\" routerLink=\"/adding-reference-material\" routerLinkActive=\"active\">\n            Adding reference material\n          </a>\n          <a class=\"item\" routerLink=\"/blocking-out\" routerLinkActive=\"active\">\n            Blocking out our model\n          </a>\n          <a class=\"item\" routerLink=\"/shaping-up-one\" routerLinkActive=\"active\">\n            Adding some shape: part 1\n          </a>\n          <a class=\"item\" routerLink=\"/shaping-up-two\" routerLinkActive=\"active\">\n            Adding some shape: part 2\n          </a>\n          <a class=\"item\" routerLink=\"/t-modifiers\" routerLinkActive=\"active\">\n            Theory: Modifiers\n          </a>\n          <a class=\"item\" routerLink=\"/adding-wheels\" routerLinkActive=\"active\">\n            Adding the wheels\n          </a>\n          <a class=\"item\" routerLink=\"/t-mat-tex\" routerLinkActive=\"active\">\n            Theory: Materials and Textures\n          </a>\n          <a class=\"item\" routerLink=\"/adding-materials\" routerLinkActive=\"active\">\n            Working with materials\n          </a>\n          <a class=\"item\" routerLink=\"/adding-black-parts\" routerLinkActive=\"active\">\n            Filling gaps in our model\n          </a>\n          <a class=\"item\" routerLink=\"/cutting-doors\" routerLinkActive=\"active\">\n            Using the Boolean modifier to create doors\n          </a>\n          <a class=\"item\" routerLink=\"/adding-details\" routerLinkActive=\"active\">\n            Adding some details\n          </a>\n          <a class=\"item\" routerLink=\"/adding-ladders\" routerLinkActive=\"active\">\n            Add ladders using the Array modifier\n          </a>\n          <a class=\"item\" routerLink=\"/t-curves\" routerLinkActive=\"active\">\n            Theory: Curves\n          </a>\n          <a class=\"item\" routerLink=\"/using-curves\" routerLinkActive=\"active\">\n            Using curves for modelling\n          </a>\n          <a class=\"item\" routerLink=\"/adding-textures\" routerLinkActive=\"active\">\n            Working with textures: The basics\n          </a>\n          <a class=\"item\" routerLink=\"/adding-extinguisher\" routerLinkActive=\"active\">\n            Adding fire extiguishers to our model\n          </a>\n          <a class=\"item\" routerLink=\"/adding-windows\" routerLinkActive=\"active\">\n            Windows for our doors\n          </a>\n          <a class=\"item\" routerLink=\"/adding-stairs-front\" routerLinkActive=\"active\">\n            Stairs for our cabin\n          </a>\n          <a class=\"item\" routerLink=\"/adding-lights\" routerLinkActive=\"active\">\n            Modelling the lights\n          </a>\n          <a class=\"item\" routerLink=\"/adding-top-light\" routerLinkActive=\"active\">\n            Modelling the top light\n          </a>\n          <a class=\"item\" routerLink=\"/finishing-model\" routerLinkActive=\"active\">\n            Finish up your model\n          </a>\n          <a class=\"item\" routerLink=\"/rendering\" routerLinkActive=\"active\">\n            Rendering in Blender\n          </a>\n        </div>\n        <div class=\"item\">\n          <h4>Part 3: Animation</h4>\n          <a class=\"item\" routerLink=\"/animation-chapter-overview\" routerLinkActive=\"active\">\n            Animation chapter overview\n          </a>\n          <a class=\"item\" routerLink=\"/creating-robot-part-one\" routerLinkActive=\"active\">\n            (Optional) Creating the robot: part 1\n          </a>\n          <a class=\"item\" routerLink=\"/creating-robot-part-two\" routerLinkActive=\"active\">\n            (Optional) Creating the robot: part 2\n          </a>\n          <a class=\"item\" routerLink=\"/creating-rocket\" routerLinkActive=\"active\">\n            (Optional) Creating the rocket\n          </a>\n          <a class=\"item\" routerLink=\"/finish-robot\" routerLinkActive=\"active\">\n            (Optional) Finishing our robot\n          </a>\n          <a class=\"item\" routerLink=\"/importing-objects\" routerLinkActive=\"active\">\n            Import objects into Blender\n          </a>\n          <a class=\"item\" routerLink=\"/t-rigging\" routerLinkActive=\"active\">\n            Theory: Rigging\n          </a>\n          <a class=\"item\" routerLink=\"/creating-rig\" routerLinkActive=\"active\">\n            Rigging our character\n          </a>\n          <a class=\"item\" routerLink=\"/parenting-rig\" routerLinkActive=\"active\">\n            Parenting our character\n          </a>\n          <a class=\"item\" routerLink=\"/restricting-bones\" routerLinkActive=\"active\">\n            Restricting out bones movement\n          </a>\n          <a class=\"item\" routerLink=\"/setup-scene\" routerLinkActive=\"active\">\n            Setting our scene\n          </a>\n          <a class=\"item\" routerLink=\"/animate-robot\" routerLinkActive=\"active\">\n            Animating our robot\n          </a>\n          <a class=\"item\" routerLink=\"/animate-rocket\" routerLinkActive=\"active\">\n            Animating our rocket\n          </a>\n          <a class=\"item\" routerLink=\"/animate-rotator\" routerLinkActive=\"active\">\n            Finishing our animation\n          </a>\n        </div>\n        <div class=\"item\">\n          <h4>Conclusion</h4>\n          <a class=\"item\" routerLink=\"/conclusion\" routerLinkActive=\"active\">\n            Where to go from here?\n          </a>\n        </div>\n      </div>\n    </div>\n    <div class=\"fifteen wide column\">\n      <router-outlet (activate)=\"onActivate()\"></router-outlet>\n      <div style=\"text-align:center; margin: 50px;\">\n        <button class=\"ui button primary\" [routerLink]=\"getLast()\" *ngIf=\"!getHideBackButton()\">Back</button>\n        <button class=\"ui button primary\" [routerLink]=\"getNext()\" *ngIf=\"!getHideNextButton()\">Next</button>\n      </div>\n      <app-about></app-about>\n    </div>\n  </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/basic-video-component/basic-video-component.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/basic-video-component/basic-video-component.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <video autoplay controls>\n        <source src=\"{{videopath}}\" type=\"video/mp4\">\n        Your browser does not support the video tag.\n    </video>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/blender-ui/blender-ui.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blender-ui/blender-ui.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"start_content\">\n    <h3 id=\"toc_blender\">Blender UI overview</h3>\n    <div class=\"ui info message\">\n      <h5>In this section you will learn:</h5>\n      <ul>\n        <li>What the key parts of Blenders UI are</li>\n        <li>What is displayed in the different sections of the UI</li>\n        <li>How to adjust the windows to your needs</li>\n      </ul>\n    </div>\n    <div class=\"vdiv\">\n      <app-basic-video-component videoname=\"UI_overview.mp4\"></app-basic-video-component>\n    </div>\n    <div class=\"quiz\">\n      <app-quiz-component question=\"In this section I mentioned a first shortcut. Can you remember how to toggle fullscreen on a specific area?\" \n        correctAnswer=\"Ctrl + Spacebar\" [answers]=\"['Ctrl + Spacebar','Spacebar','Alt + Spacebar']\" qId=\"ID1\"></app-quiz-component>\n    </div>\n    <h3 id=\"toc_further_references\">Further references</h3>\n    <div class=\"ui warning message\">\n        <ul>\n          <li><a href=\"https://docs.blender.org/manual/en/2.83/interface/index.html\" target=\"_blank\">Official Manual for User Interface</a></li>\n        </ul>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/blocking-out/blocking-out.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blocking-out/blocking-out.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"start_content\">\n    <h3 id=\"toc_blender\">Blocking out our model</h3>\n    <div class=\"ui info message\">\n      <h5>In this section you will learn:</h5>\n      <ul>\n        <li>How to start modelling on a more complex model</li>\n        <li>How to hide objects</li>\n        <li>How to work on your object from different angles</li>\n      </ul>\n    </div>\n    <div class=\"vdiv\">\n      <app-xml-video-component videoname=\"blocking_out.mp4\"></app-xml-video-component>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/conclusion/conclusion.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/conclusion/conclusion.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"start_content\">\n    <h3 id=\"toc_blender\">Conclusion</h3>\n    <p>You have now completed a few different sections learning about the basics you need to get started in Blender. You can now make \n        first scenes and create some complex models. But this little tutorial was only meant as an introduction. There is a lot more\n        you can explore to really push your Blender skills. What you should do next really depends on what your goals are. Let me give\n        you some suggestions on what you could follow up.\n    </p>\n    <h3>Increase your modelling repertoire</h3>\n    <p>What we did is we touched the surface on what is possible with Blender. We learned a simple way to create bigger models by \n        box modelling our objects. But there is other techniques you could use as an alternative or even together to achieve more stunning\n        results. In the following I will introduce a few techniques you could follow up on.\n    </p>\n    <h4>Metaballs</h4>\n    <figure class=\"center\">\n        <img src=\"../../assets/images/metaballs.PNG\" alt=\"Image of Metaballs\">\n        <figcaption>\n            Some basic Metaballs\n        </figcaption>\n    </figure>\n    <p>\n        Metaballs are a different approach to creating an object. Instead of adding objects and then modifying their mesh like we did \n        with the fire truck, here you insert primitives like cubes or spheres, like you can see above. Those so called Metaballs then \n        depending on their distance to each other build a connection. Metaballs incluence each other and are especially usefull for \n        modelling more organic models. The image above I created using a sphere, a cube and four different capsules. This can be seen \n        as a rough outline for a human body for example. As you can see, when placed correctly they build up nice connections. You can \n        also use negative Metaballs, e.g. to cut in holes for eyes.\n    </p>\n    <h4>Sculpting</h4>\n    <figure class=\"center\">\n        <img src=\"../../assets/images/sculpting.PNG\" alt=\"Image of Sculpting\">\n        <figcaption>\n            Sculpting workspace in Blender\n        </figcaption>\n    </figure>\n    <p>\n        In the image above you can see the sculting workspace of Blender. Sculting is an alternative way to model your object. There is \n        a set of different tools available you can think of as similar to pencils. You can then simply draw on your object to modify the \n        underlying mesh data. For the image above I started with a simple sphere but then added some details by drawing onto the mesh. \n        The technique of sculpting is especially usefull when dealing with high poly models where you want to add in some extra details, \n        for example when modelling a human face or in general human bodies or animals. This can also be combined with Metaballs pretty \n        effectively. You could first lay out the basic structure using Metaballs, then convert them to a mesh and start shaping them with \n        the sculpt tools.\n    </p>\n    <h4>Scripting</h4>\n    <p>\n        Another advanced topic to look into would be scirpting. Blender comes with built in support for Python scripts. This is also \n        the way how addons can be implemented that extend Blender, e.g. the one I used in my videos to display the keystrokes in the \n        bottom left corner. With scripting you can basically achieve everything you can do with the UI as well. You can edit any part \n        of the model in an automated manner, modify your Blender setting or create completely new tools that may help you or others \n        to do their tasks more effectively.\n    </p>\n    <h4>Videogame assets</h4>\n    <p>\n        If you want to create assets for your own video game you have to take a look at some advanced techniques that help you optimize \n        your object, e.g. by reducing the poly count. The workflow is also slightly different when creating such objects. You might \n        want to take a more detailed look into the topic of unwrapping to learn how to unwrap more effectively by marking correct seems \n        to make it easier to place parts of your model in a texture.\n    </p>\n    <p>\n        Another thing you could take a look into is the process of retopology. Retopology is needed to reduce the poly count when going \n        from a very high poly model to one that could potentially be used in a video game engine. While there are some automatic tools \n        built into Blender to assist you, e.g. a modifier to reduce the count for a vertex group (a part of your model), you can also \n        have a look at manual retopology that can for example be used when designing a character.\n    </p>\n    <p>\n        The last thing I suggest you to take a look at is whats called baking. Baking is a process mainly used for textures. When baking \n        textures you can for example reduce the details from a high poly model, i.e. the details that were previously modelled as polygons \n        for example a scar added by sculting, are now baked onto a texture that could be applied to a low poly model to achieve a very \n        similar effect by drastically reducing poly count. baking requires you to be familiar with UV maps.\n    </p>\n    <h3>Go the artistic way</h3>\n    <p>\n        You could also go more into a artistic direction by teaching yourself some skills in refining your model. This could not be part \n        of this E-Learning for time reasons, but if you are really looking for nice assets probably nothing is more important than \n        beautiful textures.\n    </p>\n    <h4>Create stunning Materials</h4>\n    <p>\n        Find some tutorials online to learn how the differnt nodes on materials really work together and how you can use them to create \n        stunning materials that can be used in visually appealing scenes. You can also learn how to create procedural materials in Blender. \n        Think about what you want to display and step by step learn how to do specific textures, e.g. for creating fabric materials. You \n        can also have a look at Substance Painter which is often used in combination with Blender and can be easily integrated into the \n        workflow.\n    </p>\n    <h4>Animate humans</h4>\n    <p>\n        If you want to step up your game and create some smooth animations try it with a human. There are several standard animation that \n        are typically used in movies or video games. Model yourself a human like character or grab one from MakeHuman, a program that lets \n        you easily create humans and import them into Blender ready for animation. There is even a plugin for direct integration into Blender. You could for \n        example start by creating a smooth walk cycle. I would recommend you to start of simple and slowly aim for more complex animations.\n    </p>\n    <h3>Do what you want</h3>\n    <p>\n        Try new things. Anything new you do will bring you some progress in using Blender. Thank you for completing this E-Learning. \n        I really hope you learned something by completing this E-Learning. Check out the references below to follow up on the topics \n        I just mentioned.\n    </p>\n    <h3 id=\"toc_further_references\">Further references</h3>\n    <div class=\"ui warning message\">\n        <ul>\n          <li><a href=\"https://docs.blender.org/manual/en/2.83/modeling/metas/index.html\" target=\"_blank\">More on Metaballs</a></li>\n          <li><a href=\"https://docs.blender.org/manual/en/2.83/sculpt_paint/sculpting/index.html\" target=\"_blank\">More on Sculpting</a></li>\n          <li><a href=\"https://docs.blender.org/manual/en/latest/advanced/scripting/introduction.html\" target=\"_blank\">More on Scripting</a></li>\n          <li><a href=\"https://docs.blender.org/api/current/info_quickstart.html\" target=\"_blank\">Scripting Quick Start</a></li>\n          <li><a href=\"https://docs.blender.org/manual/en/2.79/editors/uv_image/uv/editing/unwrapping/index.html\" target=\"_blank\">More on Unwrapping</a></li>\n          <li><a href=\"https://docs.blender.org/manual/en/latest/modeling/meshes/retopology.html\" target=\"_blank\">More on Retopology</a></li>\n          <li><a href=\"https://docs.blender.org/manual/en/2.83/render/cycles/baking.html\" target=\"_blank\">More on Baking</a></li>\n          <li><a href=\"https://oldetinkererstudio.com/materials-and-textures-blender-2-8-tutorial-cycles/\" target=\"_blank\">More on Materials</a></li>\n          <li><a href=\"https://www.substance3d.com/substance/\" target=\"_blank\">More on Substance Painter</a></li>\n          <li><a href=\"http://www.makehumancommunity.org/\" target=\"_blank\">More on MakeHuman</a></li>\n        </ul>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/creating-rig/creating-rig.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/creating-rig/creating-rig.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"start_content\">\n    <h3 id=\"toc_blender\">Rigging our robot</h3>\n    <div class=\"ui info message\">\n      <h5>In this section you will learn:</h5>\n      <ul>\n        <li>The different properties of an armature</li>\n        <li>How to add bones to your object to create a rig</li>\n        <li>How to connect distinct bones</li>\n      </ul>\n    </div>\n    <div class=\"vdiv\">\n      <app-xml-video-component videoname=\"creating_rig.mp4\"></app-xml-video-component>\n    </div>\n    <div class=\"quiz\">\n      <app-quiz-component question=\"For some reason one leg is left behind when moving the main bone. What can be wrong here?\" \n        correctAnswer=\"The bones were not parented correctly\" [answers]=\"['The bones were not parented correctly','Scale is not applied',\n        'I have to move each bone individually']\" qId=\"ID1\"></app-quiz-component>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/creating-robot-part-one/creating-robot-part-one.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/creating-robot-part-one/creating-robot-part-one.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"start_content\">\n    <h3 id=\"toc_blender\">Creating the robot: part 1</h3>\n    <div class=\"vdiv\">\n      <app-xml-video-component videoname=\"creating_robo_part1.mp4\"></app-xml-video-component>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/creating-robot-part-two/creating-robot-part-two.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/creating-robot-part-two/creating-robot-part-two.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"start_content\">\n    <h3 id=\"toc_blender\">Creating the robot: part 2</h3>\n    <div class=\"vdiv\">\n      <app-xml-video-component videoname=\"creating_robo_part2.mp4\"></app-xml-video-component>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/creating-rocket/creating-rocket.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/creating-rocket/creating-rocket.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"start_content\">\n    <h3 id=\"toc_blender\">Creating the rocket</h3>\n    <div class=\"vdiv\">\n      <app-xml-video-component videoname=\"rocket.mp4\"></app-xml-video-component>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cutting-doors/cutting-doors.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cutting-doors/cutting-doors.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"start_content\">\n    <h3 id=\"toc_blender\">Making our doors</h3>\n    <div class=\"ui info message\">\n      <h5>In this section you will learn:</h5>\n      <ul>\n        <li>How to join objects</li>\n        <li>What the Boolean modifier is and how to apply it</li>\n      </ul>\n    </div>\n    <div class=\"comment\">\n      <p class=\"ui red message\">Small spoiler: In the end of the video we discover a small hole in the mesh which was caused by joining. As already said in the video\n        this will be fixed in a later video. You can also try to fix it right away if you like a little challenge. At the time I recorded this\n        video I did not recognize that the mesh was broken.\n      </p>\n    </div>\n    <div class=\"vdiv\">\n      <app-xml-video-component videoname=\"cutting_doors.mp4\"></app-xml-video-component>\n    </div>\n    <div class=\"quiz\">\n      <app-quiz-component question=\"Why should you always join objects as late as possible\" \n        correctAnswer=\"It is easier to make modifications to smaller parts\" [answers]=\"['It is easier to make modifications to smaller parts','Joining takes a long time',\n        'Once you join you cannot separate parts again']\" qId=\"ID1\"></app-quiz-component>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-mode/edit-mode.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-mode/edit-mode.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"start_content\">\n    <h3 id=\"toc_blender\">The Edit Mode</h3>\n    <div class=\"ui info message\">\n        <h5>In this section you will learn:</h5>\n        <ul>\n          <li>What the edit mode is</li>\n          <li>How edit mode can be used</li>\n          <li>The difference between operations in object and edit mode</li>\n        </ul>\n      </div>\n    <div class=\"vdiv\">\n        <app-xml-video-component videoname=\"edit_mode.mp4\"></app-xml-video-component>\n    </div>\n    <div class=\"quiz\">\n        <app-quiz-component question=\"What is the main purpose of the edit mode?\" \n          correctAnswer=\"To modify an objects mesh data\" [answers]=\"['To edit the color of objects','To modify an objects mesh data',\n          'To animate an object']\" qId=\"ID1\"></app-quiz-component>\n    </div>\n    <h3 id=\"toc_further_references\">Further references</h3>\n    <div class=\"ui warning message\">\n        <ul>\n          <li><a href=\"https://docs.blender.org/manual/en/latest/editors/3dview/modes.html\" target=\"_blank\">Additional documentation on object modes</a></li>\n        </ul>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/finish-robot/finish-robot.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/finish-robot/finish-robot.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"start_content\">\n    <h3 id=\"toc_blender\">Finishing the assets</h3>\n    <div class=\"vdiv\">\n      <app-xml-video-component videoname=\"finishing_robot.mp4\"></app-xml-video-component>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/finishing-model/finishing-model.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/finishing-model/finishing-model.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"start_content\">\n    <h3 id=\"toc_blender\">Finishing the model</h3>\n    <div class=\"ui info message\">\n      <h5>In this section you will:</h5>\n      <ul>\n        <li>Finish your model by adding some final details</li>\n      </ul>\n    </div>\n    <div class=\"vdiv\">\n      <app-xml-video-component videoname=\"finishing_our_model.mp4\"></app-xml-video-component>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/first-scene/first-scene.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/first-scene/first-scene.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"start_content\">\n    <h3 id=\"toc_blender\">Let's build our first scene</h3>\n    <div class=\"ui info message\">\n        <h5>In this section you will learn:</h5>\n        <ul>\n          <li>How to compose a little scene with what we learned so far</li>\n          <li>How to merge vertices</li>\n        </ul>\n    </div>\n    <div class=\"vdiv\">\n        <app-xml-video-component videoname=\"first_scene.mp4\"></app-xml-video-component>\n    </div>\n    <div class=\"quiz\">\n        <app-quiz-component question=\"In the video I merged four vertices to create a roof. Can you remember the shortcut?\" \n          correctAnswer=\"M or Shift+M depending on the Blender version\" [answers]=\"['There is no shortcut to do this','Strg+M',\n          'M or Shift+M depending on the Blender version']\" qId=\"ID1\"></app-quiz-component>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/first-startup/first-startup.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/first-startup/first-startup.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"start_content\">\n    <h3 id=\"toc_blender\">You first startup!</h3>\n    <div class=\"ui info message\">\n      <h5>In this section you will learn:</h5>\n      <ul>\n        <li>What the settings on your first startup mean</li>\n      </ul>\n    </div>\n    <div class=\"vdiv\">\n      <app-basic-video-component videoname=\"first_startup.mp4\"></app-basic-video-component>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"start_content\">\n    <p id=\"welcome_msg\">\n        Welcome to this E-Learning on Blender! This E-Learning is designed to guide you through your first steps with Blender and teach \n        you anything you need to know to get started. This includes the basic of Blender itself, a chapter about how to model objects \n        and of course how to animate them. Simply follow the lectures in the navigation \n        bar to the left. Without wasting any time get started and have fun! \n    </p>\n    <figure class=\"center\">\n        <img src=\"../../assets/images/blender_logo.png\" alt=\"blender Logo\">\n        <figcaption>\n            Blender Logo\n            <a href=\"https://www.blender.org/about/logo/\" target=\"_blank\">\n                (source)\n            </a>\n        </figcaption>\n    </figure>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/importing-objects/importing-objects.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/importing-objects/importing-objects.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"start_content\">\n    <h3 id=\"toc_blender\">Importing into Blender</h3>\n    <div class=\"ui info message\">\n      <h5>In this section you will learn:</h5>\n      <ul>\n        <li>How to import an object into Blender</li>\n        <li>What different import options mean</li>\n      </ul>\n    </div>\n    <div class=\"ui info message download\">\n      <h5>Check this link for download of the resources: <a href=\"../../assets/files/animationAssets_import.zip\" target=\"_blank\" download=\"animationAssets.zip\">here</a></h5>\n    </div>\n    <div class=\"vdiv\">\n      <app-basic-video-component videoname=\"importing_objects.mp4\"></app-basic-video-component>\n    </div>\n    <div class=\"quiz\">\n      <app-quiz-component question=\"You are working in a team with multiple members. One of them is working on an object you need in your scene and does regular updates. How would you import it?\" \n        correctAnswer=\"I import it using link. This way it is easily updated.\" [answers]=\"['I cannot. I have to model it myself.','I import it using link. This way it is easily updated.',\n        'I import it using append. This way I receive all the updates.']\" qId=\"ID1\"></app-quiz-component>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modelling-chapter-overview/modelling-chapter-overview.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modelling-chapter-overview/modelling-chapter-overview.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"start_content\">\n    <h3 id=\"toc_blender\">What is the modelling chapter about?</h3>\n    <p>\n        While the first chapter was all about exploring Blender and playing around with it, in this chapter we will focus on one \n        complex model to add a set of new skills and techniques to work on bigger models. For this purpose I picked a firetruck \n        that will be modelled over several lections. Using some reference material I will show you all the steps to go from a simple \n        blocked out model to a more detailed one. We will be learning about what modifiers are and how they can help us to achieve \n        complex tasks relatively easy. As the chapter progresses you will also learn more about the inner structure of models and how \n        they are build up. Furthermore we will also talk about the basics of adding in materials and textures and how they can help us \n        to make our model more realistic. Below you can see a image of the firetruck we are building during this chapter.\n    </p>\n    <figure class=\"center\">\n        <img src=\"../../assets/images/firetruck.png\" alt=\"Picture of Firetruck\">\n        <figcaption>\n            The firetruck we will be modelling\n        </figcaption>\n    </figure>\n    <p>\n        This chapter is meant to be more of a follow along session. In the different chapters I will show you the different steps I took \n        starting from scratch to build the model you see in this image. At the top of each chapter you will find a brief description \n        of what you can expect to see in the video. At any time during this section feel free to spend some more time on the model. Reflect \n        what I just showed and think about other ways of achieving what was done in the video. Add in some more details or shape. In \n        general the model is kept as simple as possible to reduce the video time.\n    </p>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/parenting-rig/parenting-rig.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/parenting-rig/parenting-rig.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"start_content\">\n    <h3 id=\"toc_blender\">Parenting our robot</h3>\n    <div class=\"ui info message\">\n      <h5>In this section you will learn:</h5>\n      <ul>\n        <li>How to make a bone a parent for individual parts of your object</li>\n      </ul>\n    </div>\n    <div class=\"vdiv\">\n      <app-xml-video-component videoname=\"parenting_to_bone.mp4\"></app-xml-video-component>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/poc/poc.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/poc/poc.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 id=\"headline\">Proof of Concept for Blender stuff</h2>\n<div class=\"ui compact menu\" id=\"header_content\">\n  <div class=\"ui simple dropdown item\">\n    Content\n    <i class=\"dropdown icon\"></i>\n    <div class=\"menu\">\n      <div class=\"item\"><a href=\"#toc_blender\">Blender stuff</a></div>\n    </div>\n  </div>\n</div>\n\n<div id=\"start_content\">\n  <h3 id=\"toc_blender\">Blender stuff</h3>\n  <p class=\"blender_style\">Here ist some custom text using custom style</p>\n  <div class=\"vdiv\">\n    <app-basic-video-component videoname=\"demo.mp4\"></app-basic-video-component>\n  </div>\n\n  <div class=\"vdiv\">\n    <app-xml-video-component videoname=\"demo.mp4\"></app-xml-video-component>\n  </div>\n\n  <div class=\"quiz\">\n    <app-quiz-component question=\"This is a question? (correct answer 1)\" correctAnswer=\"1\" [answers]=\"['1','antwort nummero dos','3']\" qId=\"ID1\"></app-quiz-component>\n  </div>\n\n  <div class=\"quiz\">\n    <app-quiz-component question=\"Another question? (correctAnswer yes)\" correctAnswer=\"yes\" [answers]=\"['1','antwort nummero dos','yes']\" qId=\"ID2\"></app-quiz-component>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/quiz-component/quiz-component.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/quiz-component/quiz-component.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"quiz\" id=\"quiz\"></div>\n<button id=\"submit\" (click)=checkAnswers()>Check answer</button>\n<div class=\"result\" id=\"result\"></div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/rendering/rendering.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rendering/rendering.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"start_content\">\n    <h3 id=\"toc_blender\">Rendering in Blender</h3>\n    <div class=\"vdiv\">\n        <app-basic-video-component videoname=\"rendering.mp4\"></app-basic-video-component>\n      </div>\n    <h3 id=\"toc_further_references\">Further references</h3>\n    <div class=\"ui warning message\">\n        <ul>\n          <li><a href=\"https://cgcookie.com/articles/blender-cycles-vs-eevee-15-limitations-of-real-time-rendering\" target=\"_blank\">Limitations of real-time rendering</a></li>\n        </ul>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/required-tools/required-tools.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/required-tools/required-tools.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 id=\"headline\">Set up all you need:</h2>\n<div id=\"start_content\">\n    <h3 id=\"rt1\">Blender</h3>\n    <p>Before we start our journey to learn the foundations of modelling you will need exactly one thing: Blender</p>\n    <p>You can simply grab you version of Blender on the <a href=\"https://www.blender.org/download/lts/\" target=\"_blank\">official Blender website</a>.\n        For all of the content created during this E-Learning Blender Version 2.8.3 was used. Version 2.8.3 is a long-term support version which ensures\n        that the version is stable and only critical fixes are getting integrated. You may also be able to follow along with a newer version of Blender, e.g. 2.9,\n        but be prepared for:\n    </p>\n        <ul>\n            <li>Differences in the UI</li>\n            <li>Different functionality (added features, moved to other menus, etc.)</li>\n            <li>Bugs, Crashes, ...</li>\n        </ul>\n    <p>\n        Furthermore you have the choice between a installer for your operating system and a portable .zip file containing everthing needed to run Blender without installation.\n        Feel free to pick whatever you prefer, there is not difference between them.\n    </p>\n    <h3 id=\"rt2\">Why do we use Blender</h3>\n    <p>Blender is a powerful and complex tool we decided to use here because it's main advantage over competitors: It's free!</p>\n    <p>However Blender is not limited in any way because of it's price tag. Blender can perform all the steps needed during the entire 3D pipeline.\n        Also since it is open-source there are a lot of free (and of course also paid) addons you can integrate to speed up your process or interact with other\n        tools that could possibly make use of Blender like EpicGames famous UnrealEngine 4. \n    </p>\n    <h3 id=\"rt3\">Grab your cheat sheet!</h3>\n    <p>If you have little to no experience using Blender the beginning can be quite overwhelming. There are loads of different functions\n        and a fluid workflow requires to use shortcuts to call those. While there are different options to download a cheat sheet containing\n        the most important shortcuts online, I created a reduced version with the most important ones that will be used during this introduction to\n        modelling with Blender. Feel free to download it <a href=\"../../assets/files/Blender-Cheat-Sheet.pdf\" target=\"_blank\" download=\"cheat_sheet.pdf\">here</a>!\n    </p>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/restricting-bones/restricting-bones.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/restricting-bones/restricting-bones.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"start_content\">\n    <h3 id=\"toc_blender\">Restricting some bones</h3>\n    <div class=\"ui info message\">\n      <h5>In this section you will learn:</h5>\n      <ul>\n        <li>How to restrict the movement of individual bones</li>\n        <li>How to display local bone coordinate axis</li>\n      </ul>\n    </div>\n    <div class=\"vdiv\">\n      <app-xml-video-component videoname=\"restricting_bones.mp4\"></app-xml-video-component>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/setup-scene/setup-scene.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/setup-scene/setup-scene.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"start_content\">\n    <h3 id=\"toc_blender\">Setting a scene for our animation</h3>\n    <div class=\"ui info message\">\n      <h5>In this section you will learn:</h5>\n      <ul>\n        <li>How to setup a scene by using a camera</li>\n        <li>How to play with lights</li>\n      </ul>\n    </div>\n    <div class=\"vdiv\">\n      <app-xml-video-component videoname=\"setup_scene.mp4\"></app-xml-video-component>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shaping-up-one/shaping-up-one.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shaping-up-one/shaping-up-one.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"start_content\">\n    <h3 id=\"toc_blender\">Shaping our model: part 1</h3>\n    <div class=\"ui info message\">\n      <h5>In this section you will learn:</h5>\n      <ul>\n        <li>Some tricks to play with the reference images</li>\n        <li>How to work with the edit mode to shape objects using loop cuts</li>\n        <li>What X-Ray is</li>\n      </ul>\n    </div>\n    <div class=\"vdiv\">\n      <app-xml-video-component videoname=\"shaping_up_01.mp4\"></app-xml-video-component>\n    </div>\n    <div class=\"quiz\">\n      <app-quiz-component question=\"You will often need loop cuts to add more edges to your object. What is the shortcut?\" \n        correctAnswer=\"Strg+R\" [answers]=\"['R','Alt+Z',\n        'Strg+R']\" qId=\"ID1\"></app-quiz-component>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shaping-up-two/shaping-up-two.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shaping-up-two/shaping-up-two.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"start_content\">\n    <h3 id=\"toc_blender\">Shaping our model: part 2</h3>\n    <div class=\"ui info message\">\n      <h5>In this section you will learn:</h5>\n      <ul>\n        <li>What beveling edges means</li>\n        <li>How to apply bevel to edges</li>\n        <li>The affect of beveling</li>\n      </ul>\n    </div>\n    <div class=\"vdiv\">\n      <app-xml-video-component videoname=\"shaping_up_02.mp4\"></app-xml-video-component>\n    </div>\n    <div class=\"quiz\">\n      <app-quiz-component question=\"What can be a downside of using beveling?\" \n        correctAnswer=\"It can be difficult to loop cut afterwards\" [answers]=\"['You add too much geometry','You can destroy your mesh',\n        'It can be difficult to loop cut afterwards']\" qId=\"ID1\"></app-quiz-component>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/t-coordinate-system/t-coordinate-system.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/t-coordinate-system/t-coordinate-system.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"start_content\">\n    <p>This is our first theory chapter in which I will explain the key difference between global and local coordinates and why they matter \n        when working with Blender.\n    </p>\n    <h3 id=\"ae1\">The Theory</h3>\n    <p>Take a look at the following image:</p>\n    <figure class=\"center\">\n        <img src=\"../../assets/images/global_and_local_coords.gif\" alt=\"Global and local coordinates\">\n        <figcaption>\n            Global vs. local coordinates\n            <a href=\"https://docs.bentley.com/LiveContent/web/STAAD.Pro%20Help-v7/en/GUID-939CA8EE-F497-491D-93D9-DE0D750503B7.html\" target=\"_blank\">\n                (source)\n            </a>\n        </figcaption>\n    </figure>\n    <p>\n        What you can see on the image above are several coordinate systems. There is one big central coordinate system with the y-axis facing\n        the upwards direction. This from now on will be refered to as our <strong>global</strong> coordinate system. No matter what happens, \n        the different axes will always stay in this exact same spot.\n    </p>\n    <p>\n        Now think of all those other smaller coordinate systems you see here as all the objects you add to your scene in Blender. All those\n        objects are placed in Blender's global coordinate system, just at different positions. No matter how you scale or rotate a object, its\n        position will always stay the same. In addition each of these objects also has a <strong>local</strong> coordinate system. As you can \n        see in the image, all those small coordinate systems are somehow rotated versions of the big coordinate system. No matter how you rotate\n        those, their position in the global coordinate system will always stay the same.\n    </p>\n    <h3>A Blender example</h3>\n    <p>\n        The following Blender example will clarify what this means in our 3D viewport. Look at the first picture that displays a cylinder\n        that was just added without any rotation:\n    </p>\n    <figure class=\"center\">\n        <img src=\"../../assets/images/local-coords-unrotated.PNG\" alt=\"unrotated cylinder\">\n        <figcaption>\n            Unrotated cylinder\n        </figcaption>\n    </figure>\n    <p>\n        As you can see the global coordinate system of Blender (the red, green and blue line running out of the image) and the local\n        coordinate system displayed by those small colored arrows face in the exact same direction. If we now rotate the cylinder by\n        90 degree we get the following result:\n    </p>\n    <figure class=\"center\">\n        <img src=\"../../assets/images/local-coords-rotated.PNG\" alt=\"rotated cylinder\">\n        <figcaption>\n            Rotated cylinder\n        </figcaption>\n    </figure>\n    <p>\n        As you can see the local z-axis is now facing where the global y-axis of Blender is facing. The local z-axis of the cylinder\n        is still facing along the \"top\" of the object. Now just to make sure you understood the basics answer this small question:\n    </p>\n    <div class=\"quiz\">\n        <app-quiz-component question=\"If we rotate an object, what coordinate system changes?\" correctAnswer=\"Only the local coordinate system\" [answers]=\"['Only the global coordinate system','Only the local coordinate system','Both the global and the local coordinate system']\" qId=\"ID1\"></app-quiz-component>\n    </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/t-curves/t-curves.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/t-curves/t-curves.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"start_content\">\n    <h3 id=\"ae1\">The Basics</h3>\n    <p>In this theory chapter we will briefly talk about the theory of curves to get a basic understanding on what they are, how they \n        could be created in Blender in specific and what they can be used for. There are two types of Curves available in Blender that \n        can also be found in any other 3D modelling tool, namely Bezier curves and Nurbs which are both heavily used for CGI and CAD \n        applications.\n    </p>\n    <h3 id=ae1>Bezier Curves</h3>\n    <figure class=\"center\">\n        <img src=\"../../assets/images/bezier_curve.png\" alt=\"Bezier curve\">\n        <figcaption>\n            Image of a Bezier curve\n            <a href=\"https://www.pythoninformer.com/python-libraries/pycairo/bezier-curves/\" target=\"_blank\">\n                (source)\n            </a>\n        </figcaption>\n    </figure>\n    <p>The image above displays a very simple Bezier Curve. As you can see the curve consists of 2 endpoints. In addition there \n        can be multiple control points between them which are used to determine the overall shape of the curve. For each of those points \n        there are handles that are used for editing the curve. I will not go into the mathematical details here. In case you are \n        interested please take a look <a href=\" https://mathworld.wolfram.com/BezierCurve.html\" target=\"_blank\">\n        here</a>.\n    </p>\n    <h3>NURBS(Non-Uniform Rational B-Splines)</h3>\n    <figure class=\"center\">\n        <img src=\"../../assets/images/NURBS.png\" alt=\"NURBS\">\n        <figcaption>\n            NURBS\n            <a href=\"https://en.wikipedia.org/wiki/Non-uniform_rational_B-spline\" target=\"_blank\">\n                (source)\n            </a>\n        </figcaption>\n    </figure>\n    <p>\n        On the first sight they look pretty similar. In fact NURBS curves can be seen as a generalisation of Bezier curves. \n        They are especially good for the creation of organic models since they can be used for surfaces. The shape of these curves \n        is determined by multiple control vertices to which the curve is pulled. By for example extruding one curve along another, \n        surfaces can be created which then at render time will be converted into polygons. Their points are therefore determined by \n        the weighted sum of control points.\n    </p>\n    <h3>Blender specific</h3>\n    <div class=\"vdiv\">\n        <app-basic-video-component videoname=\"blender_curves.mp4\"></app-basic-video-component>\n    </div>\n    <h3 id=\"toc_further_references\">Further references</h3>\n    <div class=\"ui warning message\">\n        <ul>\n          <li><a href=\"https://docs.blender.org/manual/en/latest/modeling/curves/index.html\" target=\"_blank\">Documentation</a></li>\n          <li><a href=\"https://www.3dbiology.com/nurbs-vs-bezier-whats-the-difference/\" target=\"_blank\">Difference NURBS and Bezier</a></li>\n          <li><a href=\"https://mathworld.wolfram.com/BezierCurve.html\" target=\"_blank\">Bezier mathematical</a></li>\n          <li><a href=\"https://www.rgb-labs.com/blender-218-curves-in-blender-1-2/\" target=\"_blank\">Curves (german)</a></li>\n          <li><a href=\"https://www.rgb-labs.com/blender-162-bezier-nurbs-curves-pfade/\" target=\"_blank\">Handle types (german)</a></li>\n        </ul>\n    </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/t-materials-and-textures/t-materials-and-textures.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/t-materials-and-textures/t-materials-and-textures.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"start_content\">\n    <p>\n        In this section I will give you a little bit of a background to working with materials and textures before we start using them\n        in the upcoming lectures. I will only be able to scratch the surface here since setting up complex materials is a topic worth \n        a complete own section probably the length of this complete tutorial. \n    </p>\n    <h3 id=\"ae1\">The Basics</h3>\n    <figure class=\"center\">\n        <img src=\"../../assets/images/node_editor.PNG\" alt=\"Node editor in Blender\">\n        <figcaption>\n            Node editor as part of Blenders Shading Workspace\n        </figcaption>\n    </figure>\n    <p>\n        The standard way to set up materials in 3D modelling tools or also game engines is to use nodes as a way to create materials. \n        You can access them easily in Blender by using the default shading workspace. The basic functionality here is that a node \n        processes an image or texture and then passes the result on to the next node. \n        While the following description is based on Blender, most of the stuff described can also be found in every other node editor.\n    </p>\n    <div>\n        <p>There are different node types that are typically used:</p>\n        <ul>\n            <li>Input Nodes like RGB nodes offering color or image nodes for texture import</li>\n            <li>Processing Nodes that change value of import nodes, e.g. RGB curves like a color ramp</li>\n            <li>Output Nodes like the material output to show final results</li>\n        </ul>\n    </div>\n    <p>\n        In general a material has multiple properties depending on the shader used. A shader determines the color of the material when \n        light shines. There are multiple different ones available ranging from realistic ones to toon style shaders. To achieve specific\n        materials like mirrors a specific shader might be needed. The standard Principled BSDF Shader has multiple properties like a\n        base color, metallic, specular or roughness\n    </p>\n    <p>\n        You can also set up Texture nodes as Input which then again have properties on their own, e.g. the offset or color. \n        Typically you want to use textures and have different types like normal maps or roughness maps as well that make the illusion \n        that there is geometry even though there isn’t. This is especially useful if you think about optimization. If you can achieve \n        a reduction of the poly count by using a texture instead this can be useful, e.g. when modelling for video games.\n    </p>\n    <h3>UV Unwrapping</h3>\n    <figure class=\"center\">\n        <img src=\"../../assets/images/unwrap_example.PNG\" alt=\"Unwrap of a cube\">\n        <figcaption id=\"uncentered_cap\">\n            The standard cube UV unwrapped\n        </figcaption>\n    </figure>\n    <p>\n        To improve how your material is mapped to your object you often will need what's called UV unwrapping. Basically what this \n        process does is the following: Like the name suggests it takes an object (or multiple objects at once) and unwraps its surface. \n        What you then get is a 2D representation of the surface of an object. From this you can now exactly determine, which parts of \n        your surface sit on which part of an image texture. As already mentioned in the beginning this is a quite complex topic that \n        could very well deserve it’s own chapter. I hope you got a basic understanding of how things play together. Please check the \n        additional resources linked below if you need a deeper look.\n    </p>\n    <h3 id=\"toc_further_references\">Further references</h3>\n    <div class=\"ui warning message\">\n        <ul>\n          <li><a href=\"https://docs.blender.org/manual/en/2.79/render/blender_render/materials/introduction.html\" target=\"_blank\">Doc Entry</a></li>\n          <li><a href=\"https://blender-handbuch.de/handbuch/Kap._4_Oberflaechen_2019.pdf\" target=\"_blank\">More info on materials</a></li>\n        </ul>\n    </div>\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/t-modifiers/t-modifiers.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/t-modifiers/t-modifiers.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"start_content\">\n    <h3 id=\"ae1\">The Basics</h3>\n    <p>Modifiers make up an important part of modelling. We will be using some of them in future sections, in fact we start in the next \n        one. I will not be able to explain all of them at this point in time because some of them are pretty specific and will only be \n        applied on rare occasions. Furthermore each modifier also comes along with some properties that can be changed. \n        In general modifiers are part of one of four categories:</p>\n    <div>\n        <ul>\n            <li>Modify (they modify the vertex groups of objects)</li>\n            <li>Generate (they affect the topology by adding or removing geometry)</li>\n            <li>Deform (change the shape of an object without changing the topology)</li>\n            <li>Simulate (physical simulations)</li>\n        </ul>\n    </div>\n    <p>\n        You will often have to apply multiple modifiers together to achieve the desired result. The most important thing to remember \n        here is that the order of the modifiers matters. They should always be applied from top to bottom.\n    </p>\n    <div>\n        <p>\n            In the following lectures we will take a look at the following modifiers that already cover most of the use cases you will need:\n        </p>\n        <ul>\n            <li>Array modifier: Generate additional geometry based on adjustable properties by repeating an object, e.g. along an axis</li>\n            <li>Boolean modifier: Alter the shape of an object, e.g. by cutting holes into objects</li>\n            <li>Mirror modifier: Used to add geometry by mirroring an object across a specific point like the origin</li>\n            <li>Solidify modifier: Used to add thickness to a plane surface or curve</li>\n            <li>Subdivision surface: Add topology to smooth out an object. Details can be found <a href=\"https://en.wikipedia.org/wiki/Catmull%E2%80%93Clark_subdivision_surface\" target=\"_blank\">\n                here</a></li>\n            <li>Curve modifier: Most often applied together with array modifier to repeat an object along a curve</li>\n        </ul>\n    </div>\n    <h3 id=\"toc_further_references\">Further references</h3>\n    <div class=\"ui warning message\">\n        <ul>\n          <li><a href=\"https://docs.blender.org/manual/en/2.83/modeling/modifiers/introduction.html\" target=\"_blank\">Documentation</a></li>\n          <li><a href=\"https://artisticrender.com/top-10-blender-modifiers-and-how-they-work/\" target=\"_blank\">Top 10 modifiers</a></li>\n        </ul>\n    </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/t-rigging/t-rigging.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/t-rigging/t-rigging.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"start_content\">\n    <h3 id=\"ae1\">The Basics</h3>\n    <p>Rigging is a type of 3D animation technique that will be used in order to animate our character in the following sections. \n        It stands next to other animation techniques like Physically based animations or Morph target animation. \n        Rigging means that a skeleton is created that controls how an object moves. \n        The most obvious application is to build up a skeleton used for human animations but it can also be used in other cases, \n        e.g. to animate the movement of trees that are moved in the wind. The skeleton itself is not visible in the final render. \n        Probably the most important part of rigging is the difference between forward and inverse kinematics that can both be used \n        in Blender. See the description below to get a basic understanding of the differences. The workflow is basically transferable \n        to other 3D programs like Maya.</p>\n    <h3>Forward kinematics vs. Inverse Kinematics</h3>\n    <figure class=\"center\">\n        <img src=\"../../assets/images/kinematics.png\" alt=\"FK vs. IK\">\n        <figcaption>\n            FK vs. IK\n            <a href=\"https://www.creativebloq.com/features/3d-rigging-all-you-need-to-know-to-get-started\" target=\"_blank\">\n                (source)\n            </a>\n        </figcaption>\n    </figure>\n    <p>\n        To explain the difference between the two approaches take a look at the image above. Image the bone chain displayed as an arm\n         you want to animate. The first bone can be your upper arm, the second the lower arm and the final bone the hand. \n         Now imagine you want to animate from a straight arm to a bent arm, so basically from the first chain in the image to the \n         second one.\n    </p>\n    <p>\n        Using forward kinematics what you would now have to do is to start with the upper arm and rotate it clockwise. After that \n        you would need to rotate the lower arm counter clockwise to bring it up again before you can finally rotate the hand counter\n         clockwise to reach the final state. When using inverse kinematics instead all you would have to do is you move the hand bone\n          to the desired position and rotation. The rest of its bone chain would then automatically rotate to the correct position \n          since the bones are connected.\n    </p>\n    <p>\n        You now might wonder why you should use the obviously more work intense way of forward kinematics. The answer is that inverse\n         kinematics can become unpredictable pretty fast. Imagine a big bone chain where multiple bones influence each other. If you need\n          a very explicit way to set up a precise animation you might have difficulty achieving such with inverse kinematics.\n    </p>\n    <h3 id=\"toc_further_references\">Further references</h3>\n    <div class=\"ui warning message\">\n        <ul>\n          <li><a href=\"https://en.wikipedia.org/wiki/Skeletal_animation\" target=\"_blank\">Skeletal Animation</a></li>\n          <li><a href=\"https://www.creativebloq.com/features/3d-rigging-all-you-need-to-know-to-get-started\" target=\"_blank\">Rigging basics</a></li>\n          <li><a href=\"https://blenderartists.org/t/whats-the-difference-between-inverse-kinematics-forward-kinematics/585349\" target=\"_blank\">FK vs. IK</a></li>\n        </ul>\n    </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/using-curves/using-curves.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/using-curves/using-curves.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"start_content\">\n    <h3 id=\"toc_blender\">Using curves</h3>\n    <div class=\"ui info message\">\n      <h5>In this section you will learn:</h5>\n      <ul>\n        <li>How to model using bezier curves</li>\n        <li>How to shape a curve</li>\n        <li>How to use objects, modifiers and curves together</li>\n        <li>What effects can be caused by not applying the scale or rotation</li>\n      </ul>\n    </div>\n    <div class=\"vdiv\">\n      <app-xml-video-component videoname=\"using_curves.mp4\"></app-xml-video-component>\n    </div>\n    <div class=\"quiz\">\n      <app-quiz-component question=\"My object does not fit my curve. What should I do?\" \n        correctAnswer=\"Check my objects properties. I might have missed to apply rotation or scale.\" [answers]=\"['Restart Blender. Restart always helps.','Update to a newer version of Blender. This must be a bug.',\n        'Check my objects properties. I might have missed to apply rotation or scale.']\" qId=\"ID1\"></app-quiz-component>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/viewport/viewport.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/viewport/viewport.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"start_content\">\n    <h3 id=\"toc_blender\">Taking first steps in the viewport</h3>\n    <div class=\"ui info message\">\n      <h5>In this section you will learn:</h5>\n      <ul>\n        <li>What the startup Blender scene consists of</li>\n        <li>How to navigate around the viewport</li>\n        <li>How to delete and insert objects into the scene</li>\n      </ul>\n    </div>\n    <div class=\"vdiv\">\n      <app-basic-video-component videoname=\"first_steps.mp4\"></app-basic-video-component>\n    </div>\n    <div class=\"quiz\">\n      <app-quiz-component question=\"At what position will objects you add in be created?\" \n        correctAnswer=\"At the 3D cursor\" [answers]=\"['At the current mouse cursor position','At the 3D cursor',\n        'At a random position within space and time']\" qId=\"ID1\"></app-quiz-component>\n    </div>\n\n    <!-- \n      delete with x? 2:38\n    where will objects spawn?\n    shift a? 3:59\n     -->\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/xml-video-component/xml-video-component.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/xml-video-component/xml-video-component.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <video autoplay controls class=\"video\" #video>\n        <source src=\"{{videopath}}\" type=\"video/mp4\">\n        Your browser does not support the video tag.\n    </video>\n</div>\n<div>\n    <div id=\"tableContainer\" class=\"tableContainer\">\n        <table class=\"keystrokeTable\" width=\"100%\" class=\"scrollTable\">\n            <colgroup>\n                <col span=\"1\" style=\"width: 8%\"/>\n                <col span=\"1\" style=\"width: 10%\"/>\n                <col span=\"1\" style=\"width: 82%\"/>\n            </colgroup>\n            <thead class=\"fixedHeader\">\n                <tr>\n                    <th>Video time</th>\n                    <th>Key pressed</th>\n                    <th>Additional information</th>\n                </tr>\n            </thead>\n            <tbody class=\"keystrokeAnchor scrollContent\" #keystrokeAnchor></tbody>\n        </table>\n    </div>\n    <label class=\"switch\">\n        <input type=\"checkbox\" (change)=\"toggleChanged()\">\n        <span class=\"slider round\"></span>\n    </label>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about-elearning/about-elearning.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/about-elearning/about-elearning.component.ts ***!
  \**************************************************************/
/*! exports provided: AboutElearningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutElearningComponent", function() { return AboutElearningComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutElearningComponent = /** @class */ (function () {
    function AboutElearningComponent() {
    }
    AboutElearningComponent.prototype.ngOnInit = function () {
    };
    AboutElearningComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-elearning',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about-elearning.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about-elearning/about-elearning.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutElearningComponent);
    return AboutElearningComponent;
}());



/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.about = false;
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent.prototype.aboutFunc = function () {
        this.about = true;
        return this.about;
    };
    AboutComponent.prototype.hideAbout = function () {
        this.about = false;
        return this.about;
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/adding-black-parts/adding-black-parts.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/adding-black-parts/adding-black-parts.component.ts ***!
  \********************************************************************/
/*! exports provided: AddingBlackPartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddingBlackPartsComponent", function() { return AddingBlackPartsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddingBlackPartsComponent = /** @class */ (function () {
    function AddingBlackPartsComponent() {
    }
    AddingBlackPartsComponent.prototype.ngOnInit = function () {
    };
    AddingBlackPartsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adding-black-parts',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./adding-black-parts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adding-black-parts/adding-black-parts.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddingBlackPartsComponent);
    return AddingBlackPartsComponent;
}());



/***/ }),

/***/ "./src/app/adding-details/adding-details.component.ts":
/*!************************************************************!*\
  !*** ./src/app/adding-details/adding-details.component.ts ***!
  \************************************************************/
/*! exports provided: AddingDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddingDetailsComponent", function() { return AddingDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddingDetailsComponent = /** @class */ (function () {
    function AddingDetailsComponent() {
    }
    AddingDetailsComponent.prototype.ngOnInit = function () {
    };
    AddingDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adding-details',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./adding-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adding-details/adding-details.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddingDetailsComponent);
    return AddingDetailsComponent;
}());



/***/ }),

/***/ "./src/app/adding-extinguisher/adding-extinguisher.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/adding-extinguisher/adding-extinguisher.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddingExtinguisherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddingExtinguisherComponent", function() { return AddingExtinguisherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddingExtinguisherComponent = /** @class */ (function () {
    function AddingExtinguisherComponent() {
    }
    AddingExtinguisherComponent.prototype.ngOnInit = function () {
    };
    AddingExtinguisherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adding-extinguisher',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./adding-extinguisher.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adding-extinguisher/adding-extinguisher.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddingExtinguisherComponent);
    return AddingExtinguisherComponent;
}());



/***/ }),

/***/ "./src/app/adding-ladders/adding-ladders.component.ts":
/*!************************************************************!*\
  !*** ./src/app/adding-ladders/adding-ladders.component.ts ***!
  \************************************************************/
/*! exports provided: AddingLaddersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddingLaddersComponent", function() { return AddingLaddersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddingLaddersComponent = /** @class */ (function () {
    function AddingLaddersComponent() {
    }
    AddingLaddersComponent.prototype.ngOnInit = function () {
    };
    AddingLaddersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adding-ladders',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./adding-ladders.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adding-ladders/adding-ladders.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddingLaddersComponent);
    return AddingLaddersComponent;
}());



/***/ }),

/***/ "./src/app/adding-lights/adding-lights.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/adding-lights/adding-lights.component.ts ***!
  \**********************************************************/
/*! exports provided: AddingLightsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddingLightsComponent", function() { return AddingLightsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddingLightsComponent = /** @class */ (function () {
    function AddingLightsComponent() {
    }
    AddingLightsComponent.prototype.ngOnInit = function () {
    };
    AddingLightsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adding-lights',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./adding-lights.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adding-lights/adding-lights.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddingLightsComponent);
    return AddingLightsComponent;
}());



/***/ }),

/***/ "./src/app/adding-materials/adding-materials.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/adding-materials/adding-materials.component.ts ***!
  \****************************************************************/
/*! exports provided: AddingMaterialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddingMaterialsComponent", function() { return AddingMaterialsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddingMaterialsComponent = /** @class */ (function () {
    function AddingMaterialsComponent() {
    }
    AddingMaterialsComponent.prototype.ngOnInit = function () {
    };
    AddingMaterialsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adding-materials',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./adding-materials.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adding-materials/adding-materials.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddingMaterialsComponent);
    return AddingMaterialsComponent;
}());



/***/ }),

/***/ "./src/app/adding-reference-material/adding-reference-material.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/adding-reference-material/adding-reference-material.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AddingReferenceMaterialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddingReferenceMaterialComponent", function() { return AddingReferenceMaterialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddingReferenceMaterialComponent = /** @class */ (function () {
    function AddingReferenceMaterialComponent() {
    }
    AddingReferenceMaterialComponent.prototype.ngOnInit = function () {
    };
    AddingReferenceMaterialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adding-reference-material',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./adding-reference-material.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adding-reference-material/adding-reference-material.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddingReferenceMaterialComponent);
    return AddingReferenceMaterialComponent;
}());



/***/ }),

/***/ "./src/app/adding-stairs-front/adding-stairs-front.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/adding-stairs-front/adding-stairs-front.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddingStairsFrontComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddingStairsFrontComponent", function() { return AddingStairsFrontComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddingStairsFrontComponent = /** @class */ (function () {
    function AddingStairsFrontComponent() {
    }
    AddingStairsFrontComponent.prototype.ngOnInit = function () {
    };
    AddingStairsFrontComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adding-stairs-front',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./adding-stairs-front.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adding-stairs-front/adding-stairs-front.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddingStairsFrontComponent);
    return AddingStairsFrontComponent;
}());



/***/ }),

/***/ "./src/app/adding-textures/adding-textures.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/adding-textures/adding-textures.component.ts ***!
  \**************************************************************/
/*! exports provided: AddingTexturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddingTexturesComponent", function() { return AddingTexturesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddingTexturesComponent = /** @class */ (function () {
    function AddingTexturesComponent() {
    }
    AddingTexturesComponent.prototype.ngOnInit = function () {
    };
    AddingTexturesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adding-textures',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./adding-textures.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adding-textures/adding-textures.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddingTexturesComponent);
    return AddingTexturesComponent;
}());



/***/ }),

/***/ "./src/app/adding-top-light/adding-top-light.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/adding-top-light/adding-top-light.component.ts ***!
  \****************************************************************/
/*! exports provided: AddingTopLightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddingTopLightComponent", function() { return AddingTopLightComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddingTopLightComponent = /** @class */ (function () {
    function AddingTopLightComponent() {
    }
    AddingTopLightComponent.prototype.ngOnInit = function () {
    };
    AddingTopLightComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adding-top-light',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./adding-top-light.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adding-top-light/adding-top-light.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddingTopLightComponent);
    return AddingTopLightComponent;
}());



/***/ }),

/***/ "./src/app/adding-wheels/adding-wheels.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/adding-wheels/adding-wheels.component.ts ***!
  \**********************************************************/
/*! exports provided: AddingWheelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddingWheelsComponent", function() { return AddingWheelsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddingWheelsComponent = /** @class */ (function () {
    function AddingWheelsComponent() {
    }
    AddingWheelsComponent.prototype.ngOnInit = function () {
    };
    AddingWheelsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adding-wheels',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./adding-wheels.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adding-wheels/adding-wheels.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddingWheelsComponent);
    return AddingWheelsComponent;
}());



/***/ }),

/***/ "./src/app/adding-windows/adding-windows.component.ts":
/*!************************************************************!*\
  !*** ./src/app/adding-windows/adding-windows.component.ts ***!
  \************************************************************/
/*! exports provided: AddingWindowsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddingWindowsComponent", function() { return AddingWindowsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddingWindowsComponent = /** @class */ (function () {
    function AddingWindowsComponent() {
    }
    AddingWindowsComponent.prototype.ngOnInit = function () {
    };
    AddingWindowsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adding-windows',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./adding-windows.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adding-windows/adding-windows.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddingWindowsComponent);
    return AddingWindowsComponent;
}());



/***/ }),

/***/ "./src/app/animate-robot/animate-robot.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/animate-robot/animate-robot.component.ts ***!
  \**********************************************************/
/*! exports provided: AnimateRobotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimateRobotComponent", function() { return AnimateRobotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AnimateRobotComponent = /** @class */ (function () {
    function AnimateRobotComponent() {
    }
    AnimateRobotComponent.prototype.ngOnInit = function () {
    };
    AnimateRobotComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-animate-robot',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./animate-robot.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/animate-robot/animate-robot.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AnimateRobotComponent);
    return AnimateRobotComponent;
}());



/***/ }),

/***/ "./src/app/animate-rocket/animate-rocket.component.ts":
/*!************************************************************!*\
  !*** ./src/app/animate-rocket/animate-rocket.component.ts ***!
  \************************************************************/
/*! exports provided: AnimateRocketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimateRocketComponent", function() { return AnimateRocketComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AnimateRocketComponent = /** @class */ (function () {
    function AnimateRocketComponent() {
    }
    AnimateRocketComponent.prototype.ngOnInit = function () {
    };
    AnimateRocketComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-animate-rocket',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./animate-rocket.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/animate-rocket/animate-rocket.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AnimateRocketComponent);
    return AnimateRocketComponent;
}());



/***/ }),

/***/ "./src/app/animate-rotator/animate-rotator.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/animate-rotator/animate-rotator.component.ts ***!
  \**************************************************************/
/*! exports provided: AnimateRotatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimateRotatorComponent", function() { return AnimateRotatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AnimateRotatorComponent = /** @class */ (function () {
    function AnimateRotatorComponent() {
    }
    AnimateRotatorComponent.prototype.ngOnInit = function () {
    };
    AnimateRotatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-animate-rotator',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./animate-rotator.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/animate-rotator/animate-rotator.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AnimateRotatorComponent);
    return AnimateRotatorComponent;
}());



/***/ }),

/***/ "./src/app/animation-chapter-overview/animation-chapter-overview.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/animation-chapter-overview/animation-chapter-overview.component.ts ***!
  \************************************************************************************/
/*! exports provided: AnimationChapterOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationChapterOverviewComponent", function() { return AnimationChapterOverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AnimationChapterOverviewComponent = /** @class */ (function () {
    function AnimationChapterOverviewComponent() {
    }
    AnimationChapterOverviewComponent.prototype.ngOnInit = function () {
    };
    AnimationChapterOverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-animation-chapter-overview',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./animation-chapter-overview.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/animation-chapter-overview/animation-chapter-overview.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AnimationChapterOverviewComponent);
    return AnimationChapterOverviewComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _poc_poc_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./poc/poc.component */ "./src/app/poc/poc.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _required_tools_required_tools_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./required-tools/required-tools.component */ "./src/app/required-tools/required-tools.component.ts");
/* harmony import */ var _about_elearning_about_elearning_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about-elearning/about-elearning.component */ "./src/app/about-elearning/about-elearning.component.ts");
/* harmony import */ var _first_startup_first_startup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./first-startup/first-startup.component */ "./src/app/first-startup/first-startup.component.ts");
/* harmony import */ var _blender_ui_blender_ui_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blender-ui/blender-ui.component */ "./src/app/blender-ui/blender-ui.component.ts");
/* harmony import */ var _viewport_viewport_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./viewport/viewport.component */ "./src/app/viewport/viewport.component.ts");
/* harmony import */ var _t_coordinate_system_t_coordinate_system_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./t-coordinate-system/t-coordinate-system.component */ "./src/app/t-coordinate-system/t-coordinate-system.component.ts");
/* harmony import */ var _edit_mode_edit_mode_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./edit-mode/edit-mode.component */ "./src/app/edit-mode/edit-mode.component.ts");
/* harmony import */ var _first_scene_first_scene_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./first-scene/first-scene.component */ "./src/app/first-scene/first-scene.component.ts");
/* harmony import */ var _modelling_chapter_overview_modelling_chapter_overview_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modelling-chapter-overview/modelling-chapter-overview.component */ "./src/app/modelling-chapter-overview/modelling-chapter-overview.component.ts");
/* harmony import */ var _adding_reference_material_adding_reference_material_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./adding-reference-material/adding-reference-material.component */ "./src/app/adding-reference-material/adding-reference-material.component.ts");
/* harmony import */ var _blocking_out_blocking_out_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./blocking-out/blocking-out.component */ "./src/app/blocking-out/blocking-out.component.ts");
/* harmony import */ var _shaping_up_one_shaping_up_one_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shaping-up-one/shaping-up-one.component */ "./src/app/shaping-up-one/shaping-up-one.component.ts");
/* harmony import */ var _shaping_up_two_shaping_up_two_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shaping-up-two/shaping-up-two.component */ "./src/app/shaping-up-two/shaping-up-two.component.ts");
/* harmony import */ var _adding_wheels_adding_wheels_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./adding-wheels/adding-wheels.component */ "./src/app/adding-wheels/adding-wheels.component.ts");
/* harmony import */ var _adding_black_parts_adding_black_parts_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./adding-black-parts/adding-black-parts.component */ "./src/app/adding-black-parts/adding-black-parts.component.ts");
/* harmony import */ var _cutting_doors_cutting_doors_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./cutting-doors/cutting-doors.component */ "./src/app/cutting-doors/cutting-doors.component.ts");
/* harmony import */ var _adding_details_adding_details_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./adding-details/adding-details.component */ "./src/app/adding-details/adding-details.component.ts");
/* harmony import */ var _adding_ladders_adding_ladders_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./adding-ladders/adding-ladders.component */ "./src/app/adding-ladders/adding-ladders.component.ts");
/* harmony import */ var _using_curves_using_curves_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./using-curves/using-curves.component */ "./src/app/using-curves/using-curves.component.ts");
/* harmony import */ var _adding_textures_adding_textures_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./adding-textures/adding-textures.component */ "./src/app/adding-textures/adding-textures.component.ts");
/* harmony import */ var _adding_extinguisher_adding_extinguisher_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./adding-extinguisher/adding-extinguisher.component */ "./src/app/adding-extinguisher/adding-extinguisher.component.ts");
/* harmony import */ var _adding_windows_adding_windows_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./adding-windows/adding-windows.component */ "./src/app/adding-windows/adding-windows.component.ts");
/* harmony import */ var _adding_stairs_front_adding_stairs_front_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./adding-stairs-front/adding-stairs-front.component */ "./src/app/adding-stairs-front/adding-stairs-front.component.ts");
/* harmony import */ var _adding_lights_adding_lights_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./adding-lights/adding-lights.component */ "./src/app/adding-lights/adding-lights.component.ts");
/* harmony import */ var _adding_top_light_adding_top_light_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./adding-top-light/adding-top-light.component */ "./src/app/adding-top-light/adding-top-light.component.ts");
/* harmony import */ var _finishing_model_finishing_model_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./finishing-model/finishing-model.component */ "./src/app/finishing-model/finishing-model.component.ts");
/* harmony import */ var _animation_chapter_overview_animation_chapter_overview_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./animation-chapter-overview/animation-chapter-overview.component */ "./src/app/animation-chapter-overview/animation-chapter-overview.component.ts");
/* harmony import */ var _creating_robot_part_one_creating_robot_part_one_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./creating-robot-part-one/creating-robot-part-one.component */ "./src/app/creating-robot-part-one/creating-robot-part-one.component.ts");
/* harmony import */ var _creating_robot_part_two_creating_robot_part_two_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./creating-robot-part-two/creating-robot-part-two.component */ "./src/app/creating-robot-part-two/creating-robot-part-two.component.ts");
/* harmony import */ var _creating_rocket_creating_rocket_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./creating-rocket/creating-rocket.component */ "./src/app/creating-rocket/creating-rocket.component.ts");
/* harmony import */ var _finish_robot_finish_robot_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./finish-robot/finish-robot.component */ "./src/app/finish-robot/finish-robot.component.ts");
/* harmony import */ var _importing_objects_importing_objects_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./importing-objects/importing-objects.component */ "./src/app/importing-objects/importing-objects.component.ts");
/* harmony import */ var _creating_rig_creating_rig_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./creating-rig/creating-rig.component */ "./src/app/creating-rig/creating-rig.component.ts");
/* harmony import */ var _parenting_rig_parenting_rig_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./parenting-rig/parenting-rig.component */ "./src/app/parenting-rig/parenting-rig.component.ts");
/* harmony import */ var _restricting_bones_restricting_bones_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./restricting-bones/restricting-bones.component */ "./src/app/restricting-bones/restricting-bones.component.ts");
/* harmony import */ var _setup_scene_setup_scene_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./setup-scene/setup-scene.component */ "./src/app/setup-scene/setup-scene.component.ts");
/* harmony import */ var _animate_robot_animate_robot_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./animate-robot/animate-robot.component */ "./src/app/animate-robot/animate-robot.component.ts");
/* harmony import */ var _animate_rocket_animate_rocket_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./animate-rocket/animate-rocket.component */ "./src/app/animate-rocket/animate-rocket.component.ts");
/* harmony import */ var _animate_rotator_animate_rotator_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./animate-rotator/animate-rotator.component */ "./src/app/animate-rotator/animate-rotator.component.ts");
/* harmony import */ var _adding_materials_adding_materials_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./adding-materials/adding-materials.component */ "./src/app/adding-materials/adding-materials.component.ts");
/* harmony import */ var _rendering_rendering_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./rendering/rendering.component */ "./src/app/rendering/rendering.component.ts");
/* harmony import */ var _t_curves_t_curves_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./t-curves/t-curves.component */ "./src/app/t-curves/t-curves.component.ts");
/* harmony import */ var _t_modifiers_t_modifiers_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./t-modifiers/t-modifiers.component */ "./src/app/t-modifiers/t-modifiers.component.ts");
/* harmony import */ var _t_materials_and_textures_t_materials_and_textures_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./t-materials-and-textures/t-materials-and-textures.component */ "./src/app/t-materials-and-textures/t-materials-and-textures.component.ts");
/* harmony import */ var _t_rigging_t_rigging_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./t-rigging/t-rigging.component */ "./src/app/t-rigging/t-rigging.component.ts");
/* harmony import */ var _conclusion_conclusion_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./conclusion/conclusion.component */ "./src/app/conclusion/conclusion.component.ts");




















































var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'poc', component: _poc_poc_component__WEBPACK_IMPORTED_MODULE_4__["PocComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"] },
    { path: 'required-tools', component: _required_tools_required_tools_component__WEBPACK_IMPORTED_MODULE_6__["RequiredToolsComponent"] },
    { path: 'about-elearning', component: _about_elearning_about_elearning_component__WEBPACK_IMPORTED_MODULE_7__["AboutElearningComponent"] },
    { path: 'first-startup', component: _first_startup_first_startup_component__WEBPACK_IMPORTED_MODULE_8__["FirstStartupComponent"] },
    { path: 'blender-ui', component: _blender_ui_blender_ui_component__WEBPACK_IMPORTED_MODULE_9__["BlenderUiComponent"] },
    { path: 'viewport', component: _viewport_viewport_component__WEBPACK_IMPORTED_MODULE_10__["ViewportComponent"] },
    { path: 't-coordinate-system', component: _t_coordinate_system_t_coordinate_system_component__WEBPACK_IMPORTED_MODULE_11__["TCoordinateSystemComponent"] },
    { path: 'edit-mode', component: _edit_mode_edit_mode_component__WEBPACK_IMPORTED_MODULE_12__["EditModeComponent"] },
    { path: 'first-scene', component: _first_scene_first_scene_component__WEBPACK_IMPORTED_MODULE_13__["FirstSceneComponent"] },
    { path: 'modelling-chapter-overview', component: _modelling_chapter_overview_modelling_chapter_overview_component__WEBPACK_IMPORTED_MODULE_14__["ModellingChapterOverviewComponent"] },
    { path: 'adding-reference-material', component: _adding_reference_material_adding_reference_material_component__WEBPACK_IMPORTED_MODULE_15__["AddingReferenceMaterialComponent"] },
    { path: 'blocking-out', component: _blocking_out_blocking_out_component__WEBPACK_IMPORTED_MODULE_16__["BlockingOutComponent"] },
    { path: 'shaping-up-one', component: _shaping_up_one_shaping_up_one_component__WEBPACK_IMPORTED_MODULE_17__["ShapingUpOneComponent"] },
    { path: 'shaping-up-two', component: _shaping_up_two_shaping_up_two_component__WEBPACK_IMPORTED_MODULE_18__["ShapingUpTwoComponent"] },
    { path: 'adding-wheels', component: _adding_wheels_adding_wheels_component__WEBPACK_IMPORTED_MODULE_19__["AddingWheelsComponent"] },
    { path: 'adding-materials', component: _adding_materials_adding_materials_component__WEBPACK_IMPORTED_MODULE_45__["AddingMaterialsComponent"] },
    { path: 'adding-black-parts', component: _adding_black_parts_adding_black_parts_component__WEBPACK_IMPORTED_MODULE_20__["AddingBlackPartsComponent"] },
    { path: 'cutting-doors', component: _cutting_doors_cutting_doors_component__WEBPACK_IMPORTED_MODULE_21__["CuttingDoorsComponent"] },
    { path: 'adding-details', component: _adding_details_adding_details_component__WEBPACK_IMPORTED_MODULE_22__["AddingDetailsComponent"] },
    { path: 'adding-ladders', component: _adding_ladders_adding_ladders_component__WEBPACK_IMPORTED_MODULE_23__["AddingLaddersComponent"] },
    { path: 'using-curves', component: _using_curves_using_curves_component__WEBPACK_IMPORTED_MODULE_24__["UsingCurvesComponent"] },
    { path: 'adding-textures', component: _adding_textures_adding_textures_component__WEBPACK_IMPORTED_MODULE_25__["AddingTexturesComponent"] },
    { path: 'adding-extinguisher', component: _adding_extinguisher_adding_extinguisher_component__WEBPACK_IMPORTED_MODULE_26__["AddingExtinguisherComponent"] },
    { path: 'adding-windows', component: _adding_windows_adding_windows_component__WEBPACK_IMPORTED_MODULE_27__["AddingWindowsComponent"] },
    { path: 'adding-stairs-front', component: _adding_stairs_front_adding_stairs_front_component__WEBPACK_IMPORTED_MODULE_28__["AddingStairsFrontComponent"] },
    { path: 'adding-lights', component: _adding_lights_adding_lights_component__WEBPACK_IMPORTED_MODULE_29__["AddingLightsComponent"] },
    { path: 'adding-top-light', component: _adding_top_light_adding_top_light_component__WEBPACK_IMPORTED_MODULE_30__["AddingTopLightComponent"] },
    { path: 'finishing-model', component: _finishing_model_finishing_model_component__WEBPACK_IMPORTED_MODULE_31__["FinishingModelComponent"] },
    { path: 'animation-chapter-overview', component: _animation_chapter_overview_animation_chapter_overview_component__WEBPACK_IMPORTED_MODULE_32__["AnimationChapterOverviewComponent"] },
    { path: 'creating-robot-part-one', component: _creating_robot_part_one_creating_robot_part_one_component__WEBPACK_IMPORTED_MODULE_33__["CreatingRobotPartOneComponent"] },
    { path: 'creating-robot-part-two', component: _creating_robot_part_two_creating_robot_part_two_component__WEBPACK_IMPORTED_MODULE_34__["CreatingRobotPartTwoComponent"] },
    { path: 'creating-rocket', component: _creating_rocket_creating_rocket_component__WEBPACK_IMPORTED_MODULE_35__["CreatingRocketComponent"] },
    { path: 'finish-robot', component: _finish_robot_finish_robot_component__WEBPACK_IMPORTED_MODULE_36__["FinishRobotComponent"] },
    { path: 'importing-objects', component: _importing_objects_importing_objects_component__WEBPACK_IMPORTED_MODULE_37__["ImportingObjectsComponent"] },
    { path: 'creating-rig', component: _creating_rig_creating_rig_component__WEBPACK_IMPORTED_MODULE_38__["CreatingRigComponent"] },
    { path: 'parenting-rig', component: _parenting_rig_parenting_rig_component__WEBPACK_IMPORTED_MODULE_39__["ParentingRigComponent"] },
    { path: 'restricting-bones', component: _restricting_bones_restricting_bones_component__WEBPACK_IMPORTED_MODULE_40__["RestrictingBonesComponent"] },
    { path: 'setup-scene', component: _setup_scene_setup_scene_component__WEBPACK_IMPORTED_MODULE_41__["SetupSceneComponent"] },
    { path: 'animate-robot', component: _animate_robot_animate_robot_component__WEBPACK_IMPORTED_MODULE_42__["AnimateRobotComponent"] },
    { path: 'animate-rocket', component: _animate_rocket_animate_rocket_component__WEBPACK_IMPORTED_MODULE_43__["AnimateRocketComponent"] },
    { path: 't-curves', component: _t_curves_t_curves_component__WEBPACK_IMPORTED_MODULE_47__["TCurvesComponent"] },
    { path: 't-mat-tex', component: _t_materials_and_textures_t_materials_and_textures_component__WEBPACK_IMPORTED_MODULE_49__["TMaterialsAndTexturesComponent"] },
    { path: 't-modifiers', component: _t_modifiers_t_modifiers_component__WEBPACK_IMPORTED_MODULE_48__["TModifiersComponent"] },
    { path: 't-rigging', component: _t_rigging_t_rigging_component__WEBPACK_IMPORTED_MODULE_50__["TRiggingComponent"] },
    { path: 'rendering', component: _rendering_rendering_component__WEBPACK_IMPORTED_MODULE_46__["RenderingComponent"] },
    { path: 'animate-rotator', component: _animate_rotator_animate_rotator_component__WEBPACK_IMPORTED_MODULE_44__["AnimateRotatorComponent"] },
    { path: 'conclusion', component: _conclusion_conclusion_component__WEBPACK_IMPORTED_MODULE_51__["ConclusionComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { onSameUrlNavigation: "reload" })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _prism_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../prism.js */ "./src/prism.js");
/* harmony import */ var _prism_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_prism_js__WEBPACK_IMPORTED_MODULE_4__);





var AppComponent = /** @class */ (function () {
    function AppComponent(router, location, elementRef) {
        this.router = router;
        this.location = location;
        this.elementRef = elementRef;
        this.title = 'Learn modelling using Blender!';
        this.hideBackButton = false;
        this.hideNextButton = false;
        this.routerLinks = ["/home", "/required-tools", "/about-elearning", "/first-startup", "/blender-ui", "/viewport", "/t-coordinate-system",
            "/edit-mode", "/first-scene", "/modelling-chapter-overview", "/adding-reference-material", "/blocking-out",
            "/shaping-up-one", "/shaping-up-two", "/t-modifiers", "/adding-wheels", "/t-mat-tex", "/adding-materials",
            "/adding-black-parts", "/cutting-doors", "/adding-details", "/adding-ladders", "/t-curves", "/using-curves",
            "/adding-textures", "/adding-extinguisher", "/adding-windows", "/adding-stairs-front", "/adding-lights",
            "/adding-top-light", "/finishing-model", "/rendering", "/animation-chapter-overview", "/creating-robot-part-one",
            "/creating-robot-part-two", "/creating-rocket", "/finish-robot", "/importing-objects", "/t-rigging", "/creating-rig",
            "/parenting-rig", "/restricting-bones", "/setup-scene", "/animate-robot", "/animate-rocket", "/animate-rotator", "/conclusion"];
    }
    AppComponent.prototype.ngOnInit = function () {
        _prism_js__WEBPACK_IMPORTED_MODULE_4__["manual"] = true;
    };
    AppComponent.prototype.onActivate = function () {
        window.scroll(0, 0);
    };
    AppComponent.prototype.getHideNextButton = function () {
        this.routerLink = this.router.url;
        if (this.routerLink === this.routerLinks[0] || this.routerLink === this.routerLinks[this.routerLinks.length - 1]) {
            this.hideNextButton = true;
        }
        else
            this.hideNextButton = false;
        return this.hideNextButton;
    };
    AppComponent.prototype.getHideBackButton = function () {
        this.routerLink = this.router.url;
        if (this.routerLink === this.routerLinks[0]) {
            this.hideBackButton = true;
        }
        else
            this.hideBackButton = false;
        return this.hideBackButton;
    };
    AppComponent.prototype.getNext = function () {
        var e_1, _a;
        this.routerLink = this.router.url;
        var counter = -1;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.routerLinks), _c = _b.next(); !_c.done; _c = _b.next()) {
                var r = _c.value;
                counter++;
                if (this.routerLink === r) {
                    this.routerLink = this.routerLinks[counter + 1];
                    break;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return this.routerLink;
    };
    AppComponent.prototype.getLast = function () {
        var e_2, _a;
        this.routerLink = this.router.url;
        var counter = -1;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.routerLinks), _c = _b.next(); !_c.done; _c = _b.next()) {
                var r = _c.value;
                counter++;
                if (this.routerLink === r) {
                    this.routerLink = this.routerLinks[counter - 1];
                    break;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return this.routerLink;
    };
    AppComponent.prototype.myFunc = function () {
        var d1 = this.elementRef.nativeElement.querySelector('#menu');
        if (d1.classList.contains('hidden')) {
            d1.classList.remove('hidden');
        }
        else {
            d1.classList.add('hidden');
        }
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _poc_poc_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./poc/poc.component */ "./src/app/poc/poc.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _basic_video_component_basic_video_component_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./basic-video-component/basic-video-component.component */ "./src/app/basic-video-component/basic-video-component.component.ts");
/* harmony import */ var _xml_video_component_xml_video_component_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./xml-video-component/xml-video-component.component */ "./src/app/xml-video-component/xml-video-component.component.ts");
/* harmony import */ var _quiz_component_quiz_component_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./quiz-component/quiz-component.component */ "./src/app/quiz-component/quiz-component.component.ts");
/* harmony import */ var _required_tools_required_tools_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./required-tools/required-tools.component */ "./src/app/required-tools/required-tools.component.ts");
/* harmony import */ var _about_elearning_about_elearning_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./about-elearning/about-elearning.component */ "./src/app/about-elearning/about-elearning.component.ts");
/* harmony import */ var _first_startup_first_startup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./first-startup/first-startup.component */ "./src/app/first-startup/first-startup.component.ts");
/* harmony import */ var _blender_ui_blender_ui_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./blender-ui/blender-ui.component */ "./src/app/blender-ui/blender-ui.component.ts");
/* harmony import */ var _viewport_viewport_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./viewport/viewport.component */ "./src/app/viewport/viewport.component.ts");
/* harmony import */ var _t_coordinate_system_t_coordinate_system_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./t-coordinate-system/t-coordinate-system.component */ "./src/app/t-coordinate-system/t-coordinate-system.component.ts");
/* harmony import */ var _edit_mode_edit_mode_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./edit-mode/edit-mode.component */ "./src/app/edit-mode/edit-mode.component.ts");
/* harmony import */ var _first_scene_first_scene_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./first-scene/first-scene.component */ "./src/app/first-scene/first-scene.component.ts");
/* harmony import */ var _animation_chapter_overview_animation_chapter_overview_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./animation-chapter-overview/animation-chapter-overview.component */ "./src/app/animation-chapter-overview/animation-chapter-overview.component.ts");
/* harmony import */ var _creating_robot_part_one_creating_robot_part_one_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./creating-robot-part-one/creating-robot-part-one.component */ "./src/app/creating-robot-part-one/creating-robot-part-one.component.ts");
/* harmony import */ var _creating_robot_part_two_creating_robot_part_two_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./creating-robot-part-two/creating-robot-part-two.component */ "./src/app/creating-robot-part-two/creating-robot-part-two.component.ts");
/* harmony import */ var _creating_rocket_creating_rocket_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./creating-rocket/creating-rocket.component */ "./src/app/creating-rocket/creating-rocket.component.ts");
/* harmony import */ var _finish_robot_finish_robot_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./finish-robot/finish-robot.component */ "./src/app/finish-robot/finish-robot.component.ts");
/* harmony import */ var _importing_objects_importing_objects_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./importing-objects/importing-objects.component */ "./src/app/importing-objects/importing-objects.component.ts");
/* harmony import */ var _creating_rig_creating_rig_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./creating-rig/creating-rig.component */ "./src/app/creating-rig/creating-rig.component.ts");
/* harmony import */ var _parenting_rig_parenting_rig_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./parenting-rig/parenting-rig.component */ "./src/app/parenting-rig/parenting-rig.component.ts");
/* harmony import */ var _restricting_bones_restricting_bones_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./restricting-bones/restricting-bones.component */ "./src/app/restricting-bones/restricting-bones.component.ts");
/* harmony import */ var _setup_scene_setup_scene_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./setup-scene/setup-scene.component */ "./src/app/setup-scene/setup-scene.component.ts");
/* harmony import */ var _animate_robot_animate_robot_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./animate-robot/animate-robot.component */ "./src/app/animate-robot/animate-robot.component.ts");
/* harmony import */ var _animate_rocket_animate_rocket_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./animate-rocket/animate-rocket.component */ "./src/app/animate-rocket/animate-rocket.component.ts");
/* harmony import */ var _animate_rotator_animate_rotator_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./animate-rotator/animate-rotator.component */ "./src/app/animate-rotator/animate-rotator.component.ts");
/* harmony import */ var _modelling_chapter_overview_modelling_chapter_overview_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./modelling-chapter-overview/modelling-chapter-overview.component */ "./src/app/modelling-chapter-overview/modelling-chapter-overview.component.ts");
/* harmony import */ var _adding_reference_material_adding_reference_material_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./adding-reference-material/adding-reference-material.component */ "./src/app/adding-reference-material/adding-reference-material.component.ts");
/* harmony import */ var _blocking_out_blocking_out_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./blocking-out/blocking-out.component */ "./src/app/blocking-out/blocking-out.component.ts");
/* harmony import */ var _shaping_up_one_shaping_up_one_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./shaping-up-one/shaping-up-one.component */ "./src/app/shaping-up-one/shaping-up-one.component.ts");
/* harmony import */ var _shaping_up_two_shaping_up_two_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./shaping-up-two/shaping-up-two.component */ "./src/app/shaping-up-two/shaping-up-two.component.ts");
/* harmony import */ var _adding_wheels_adding_wheels_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./adding-wheels/adding-wheels.component */ "./src/app/adding-wheels/adding-wheels.component.ts");
/* harmony import */ var _adding_black_parts_adding_black_parts_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./adding-black-parts/adding-black-parts.component */ "./src/app/adding-black-parts/adding-black-parts.component.ts");
/* harmony import */ var _cutting_doors_cutting_doors_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./cutting-doors/cutting-doors.component */ "./src/app/cutting-doors/cutting-doors.component.ts");
/* harmony import */ var _adding_details_adding_details_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./adding-details/adding-details.component */ "./src/app/adding-details/adding-details.component.ts");
/* harmony import */ var _adding_ladders_adding_ladders_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./adding-ladders/adding-ladders.component */ "./src/app/adding-ladders/adding-ladders.component.ts");
/* harmony import */ var _using_curves_using_curves_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./using-curves/using-curves.component */ "./src/app/using-curves/using-curves.component.ts");
/* harmony import */ var _adding_textures_adding_textures_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./adding-textures/adding-textures.component */ "./src/app/adding-textures/adding-textures.component.ts");
/* harmony import */ var _adding_extinguisher_adding_extinguisher_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./adding-extinguisher/adding-extinguisher.component */ "./src/app/adding-extinguisher/adding-extinguisher.component.ts");
/* harmony import */ var _adding_windows_adding_windows_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./adding-windows/adding-windows.component */ "./src/app/adding-windows/adding-windows.component.ts");
/* harmony import */ var _adding_stairs_front_adding_stairs_front_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./adding-stairs-front/adding-stairs-front.component */ "./src/app/adding-stairs-front/adding-stairs-front.component.ts");
/* harmony import */ var _adding_lights_adding_lights_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./adding-lights/adding-lights.component */ "./src/app/adding-lights/adding-lights.component.ts");
/* harmony import */ var _adding_top_light_adding_top_light_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./adding-top-light/adding-top-light.component */ "./src/app/adding-top-light/adding-top-light.component.ts");
/* harmony import */ var _finishing_model_finishing_model_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./finishing-model/finishing-model.component */ "./src/app/finishing-model/finishing-model.component.ts");
/* harmony import */ var _adding_materials_adding_materials_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./adding-materials/adding-materials.component */ "./src/app/adding-materials/adding-materials.component.ts");
/* harmony import */ var _t_rigging_t_rigging_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./t-rigging/t-rigging.component */ "./src/app/t-rigging/t-rigging.component.ts");
/* harmony import */ var _t_materials_and_textures_t_materials_and_textures_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./t-materials-and-textures/t-materials-and-textures.component */ "./src/app/t-materials-and-textures/t-materials-and-textures.component.ts");
/* harmony import */ var _t_modifiers_t_modifiers_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./t-modifiers/t-modifiers.component */ "./src/app/t-modifiers/t-modifiers.component.ts");
/* harmony import */ var _t_curves_t_curves_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./t-curves/t-curves.component */ "./src/app/t-curves/t-curves.component.ts");
/* harmony import */ var _rendering_rendering_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./rendering/rendering.component */ "./src/app/rendering/rendering.component.ts");
/* harmony import */ var _conclusion_conclusion_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./conclusion/conclusion.component */ "./src/app/conclusion/conclusion.component.ts");






























































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _poc_poc_component__WEBPACK_IMPORTED_MODULE_6__["PocComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
                _basic_video_component_basic_video_component_component__WEBPACK_IMPORTED_MODULE_13__["BasicVideoComponentComponent"],
                _xml_video_component_xml_video_component_component__WEBPACK_IMPORTED_MODULE_14__["XmlVideoComponentComponent"],
                _quiz_component_quiz_component_component__WEBPACK_IMPORTED_MODULE_15__["QuizComponentComponent"],
                _required_tools_required_tools_component__WEBPACK_IMPORTED_MODULE_16__["RequiredToolsComponent"],
                _about_elearning_about_elearning_component__WEBPACK_IMPORTED_MODULE_17__["AboutElearningComponent"],
                _first_startup_first_startup_component__WEBPACK_IMPORTED_MODULE_18__["FirstStartupComponent"],
                _blender_ui_blender_ui_component__WEBPACK_IMPORTED_MODULE_19__["BlenderUiComponent"],
                _viewport_viewport_component__WEBPACK_IMPORTED_MODULE_20__["ViewportComponent"],
                _t_coordinate_system_t_coordinate_system_component__WEBPACK_IMPORTED_MODULE_21__["TCoordinateSystemComponent"],
                _edit_mode_edit_mode_component__WEBPACK_IMPORTED_MODULE_22__["EditModeComponent"],
                _first_scene_first_scene_component__WEBPACK_IMPORTED_MODULE_23__["FirstSceneComponent"],
                _animation_chapter_overview_animation_chapter_overview_component__WEBPACK_IMPORTED_MODULE_24__["AnimationChapterOverviewComponent"],
                _creating_robot_part_one_creating_robot_part_one_component__WEBPACK_IMPORTED_MODULE_25__["CreatingRobotPartOneComponent"],
                _creating_robot_part_two_creating_robot_part_two_component__WEBPACK_IMPORTED_MODULE_26__["CreatingRobotPartTwoComponent"],
                _creating_rocket_creating_rocket_component__WEBPACK_IMPORTED_MODULE_27__["CreatingRocketComponent"],
                _finish_robot_finish_robot_component__WEBPACK_IMPORTED_MODULE_28__["FinishRobotComponent"],
                _importing_objects_importing_objects_component__WEBPACK_IMPORTED_MODULE_29__["ImportingObjectsComponent"],
                _creating_rig_creating_rig_component__WEBPACK_IMPORTED_MODULE_30__["CreatingRigComponent"],
                _parenting_rig_parenting_rig_component__WEBPACK_IMPORTED_MODULE_31__["ParentingRigComponent"],
                _restricting_bones_restricting_bones_component__WEBPACK_IMPORTED_MODULE_32__["RestrictingBonesComponent"],
                _setup_scene_setup_scene_component__WEBPACK_IMPORTED_MODULE_33__["SetupSceneComponent"],
                _animate_robot_animate_robot_component__WEBPACK_IMPORTED_MODULE_34__["AnimateRobotComponent"],
                _animate_rocket_animate_rocket_component__WEBPACK_IMPORTED_MODULE_35__["AnimateRocketComponent"],
                _animate_rotator_animate_rotator_component__WEBPACK_IMPORTED_MODULE_36__["AnimateRotatorComponent"],
                _modelling_chapter_overview_modelling_chapter_overview_component__WEBPACK_IMPORTED_MODULE_37__["ModellingChapterOverviewComponent"],
                _adding_reference_material_adding_reference_material_component__WEBPACK_IMPORTED_MODULE_38__["AddingReferenceMaterialComponent"],
                _blocking_out_blocking_out_component__WEBPACK_IMPORTED_MODULE_39__["BlockingOutComponent"],
                _shaping_up_one_shaping_up_one_component__WEBPACK_IMPORTED_MODULE_40__["ShapingUpOneComponent"],
                _shaping_up_two_shaping_up_two_component__WEBPACK_IMPORTED_MODULE_41__["ShapingUpTwoComponent"],
                _adding_wheels_adding_wheels_component__WEBPACK_IMPORTED_MODULE_42__["AddingWheelsComponent"],
                _adding_black_parts_adding_black_parts_component__WEBPACK_IMPORTED_MODULE_43__["AddingBlackPartsComponent"],
                _cutting_doors_cutting_doors_component__WEBPACK_IMPORTED_MODULE_44__["CuttingDoorsComponent"],
                _adding_details_adding_details_component__WEBPACK_IMPORTED_MODULE_45__["AddingDetailsComponent"],
                _adding_ladders_adding_ladders_component__WEBPACK_IMPORTED_MODULE_46__["AddingLaddersComponent"],
                _using_curves_using_curves_component__WEBPACK_IMPORTED_MODULE_47__["UsingCurvesComponent"],
                _adding_textures_adding_textures_component__WEBPACK_IMPORTED_MODULE_48__["AddingTexturesComponent"],
                _adding_extinguisher_adding_extinguisher_component__WEBPACK_IMPORTED_MODULE_49__["AddingExtinguisherComponent"],
                _adding_windows_adding_windows_component__WEBPACK_IMPORTED_MODULE_50__["AddingWindowsComponent"],
                _adding_stairs_front_adding_stairs_front_component__WEBPACK_IMPORTED_MODULE_51__["AddingStairsFrontComponent"],
                _adding_lights_adding_lights_component__WEBPACK_IMPORTED_MODULE_52__["AddingLightsComponent"],
                _adding_top_light_adding_top_light_component__WEBPACK_IMPORTED_MODULE_53__["AddingTopLightComponent"],
                _finishing_model_finishing_model_component__WEBPACK_IMPORTED_MODULE_54__["FinishingModelComponent"],
                _adding_materials_adding_materials_component__WEBPACK_IMPORTED_MODULE_55__["AddingMaterialsComponent"],
                _t_rigging_t_rigging_component__WEBPACK_IMPORTED_MODULE_56__["TRiggingComponent"],
                _t_materials_and_textures_t_materials_and_textures_component__WEBPACK_IMPORTED_MODULE_57__["TMaterialsAndTexturesComponent"],
                _t_modifiers_t_modifiers_component__WEBPACK_IMPORTED_MODULE_58__["TModifiersComponent"],
                _t_curves_t_curves_component__WEBPACK_IMPORTED_MODULE_59__["TCurvesComponent"],
                _rendering_rendering_component__WEBPACK_IMPORTED_MODULE_60__["RenderingComponent"],
                _conclusion_conclusion_component__WEBPACK_IMPORTED_MODULE_61__["ConclusionComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBarModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"]
            ],
            providers: [
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_8__["APP_BASE_HREF"], useValue: '/' },
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_8__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_8__["HashLocationStrategy"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/basic-video-component/basic-video-component.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/basic-video-component/basic-video-component.component.ts ***!
  \**************************************************************************/
/*! exports provided: BasicVideoComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicVideoComponentComponent", function() { return BasicVideoComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BasicVideoComponentComponent = /** @class */ (function () {
    function BasicVideoComponentComponent() {
    }
    BasicVideoComponentComponent.prototype.ngOnInit = function () {
        /* this path currently loads from a server hosted by the minf group, change this to local path for development */
        this.video_assets_folder = "http://www.minf.uni-bamberg.de/recordings/ws2020/Blender/";
        this.videopath = this.video_assets_folder + this.videoname;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BasicVideoComponentComponent.prototype, "videoname", void 0);
    BasicVideoComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-basic-video-component',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./basic-video-component.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/basic-video-component/basic-video-component.component.html")).default
        })
        /**
         * the basic video component is used with a videoname as input string. The video itself is then loaded from
         * a path specified below in the ngOnInit() function. Use the full video name with file extension, i.e. demo.mp4.
         */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BasicVideoComponentComponent);
    return BasicVideoComponentComponent;
}());



/***/ }),

/***/ "./src/app/blender-ui/blender-ui.component.ts":
/*!****************************************************!*\
  !*** ./src/app/blender-ui/blender-ui.component.ts ***!
  \****************************************************/
/*! exports provided: BlenderUiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlenderUiComponent", function() { return BlenderUiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlenderUiComponent = /** @class */ (function () {
    function BlenderUiComponent() {
    }
    BlenderUiComponent.prototype.ngOnInit = function () {
    };
    BlenderUiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blender-ui',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./blender-ui.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/blender-ui/blender-ui.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BlenderUiComponent);
    return BlenderUiComponent;
}());



/***/ }),

/***/ "./src/app/blocking-out/blocking-out.component.ts":
/*!********************************************************!*\
  !*** ./src/app/blocking-out/blocking-out.component.ts ***!
  \********************************************************/
/*! exports provided: BlockingOutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockingOutComponent", function() { return BlockingOutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlockingOutComponent = /** @class */ (function () {
    function BlockingOutComponent() {
    }
    BlockingOutComponent.prototype.ngOnInit = function () {
    };
    BlockingOutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blocking-out',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./blocking-out.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/blocking-out/blocking-out.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BlockingOutComponent);
    return BlockingOutComponent;
}());



/***/ }),

/***/ "./src/app/conclusion/conclusion.component.ts":
/*!****************************************************!*\
  !*** ./src/app/conclusion/conclusion.component.ts ***!
  \****************************************************/
/*! exports provided: ConclusionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConclusionComponent", function() { return ConclusionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConclusionComponent = /** @class */ (function () {
    function ConclusionComponent() {
    }
    ConclusionComponent.prototype.ngOnInit = function () {
    };
    ConclusionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-conclusion',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./conclusion.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/conclusion/conclusion.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConclusionComponent);
    return ConclusionComponent;
}());



/***/ }),

/***/ "./src/app/creating-rig/creating-rig.component.ts":
/*!********************************************************!*\
  !*** ./src/app/creating-rig/creating-rig.component.ts ***!
  \********************************************************/
/*! exports provided: CreatingRigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatingRigComponent", function() { return CreatingRigComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CreatingRigComponent = /** @class */ (function () {
    function CreatingRigComponent() {
    }
    CreatingRigComponent.prototype.ngOnInit = function () {
    };
    CreatingRigComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-creating-rig',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./creating-rig.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/creating-rig/creating-rig.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CreatingRigComponent);
    return CreatingRigComponent;
}());



/***/ }),

/***/ "./src/app/creating-robot-part-one/creating-robot-part-one.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/creating-robot-part-one/creating-robot-part-one.component.ts ***!
  \******************************************************************************/
/*! exports provided: CreatingRobotPartOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatingRobotPartOneComponent", function() { return CreatingRobotPartOneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CreatingRobotPartOneComponent = /** @class */ (function () {
    function CreatingRobotPartOneComponent() {
    }
    CreatingRobotPartOneComponent.prototype.ngOnInit = function () {
    };
    CreatingRobotPartOneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-creating-robot-part-one',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./creating-robot-part-one.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/creating-robot-part-one/creating-robot-part-one.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CreatingRobotPartOneComponent);
    return CreatingRobotPartOneComponent;
}());



/***/ }),

/***/ "./src/app/creating-robot-part-two/creating-robot-part-two.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/creating-robot-part-two/creating-robot-part-two.component.ts ***!
  \******************************************************************************/
/*! exports provided: CreatingRobotPartTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatingRobotPartTwoComponent", function() { return CreatingRobotPartTwoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CreatingRobotPartTwoComponent = /** @class */ (function () {
    function CreatingRobotPartTwoComponent() {
    }
    CreatingRobotPartTwoComponent.prototype.ngOnInit = function () {
    };
    CreatingRobotPartTwoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-creating-robot-part-two',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./creating-robot-part-two.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/creating-robot-part-two/creating-robot-part-two.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CreatingRobotPartTwoComponent);
    return CreatingRobotPartTwoComponent;
}());



/***/ }),

/***/ "./src/app/creating-rocket/creating-rocket.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/creating-rocket/creating-rocket.component.ts ***!
  \**************************************************************/
/*! exports provided: CreatingRocketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatingRocketComponent", function() { return CreatingRocketComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CreatingRocketComponent = /** @class */ (function () {
    function CreatingRocketComponent() {
    }
    CreatingRocketComponent.prototype.ngOnInit = function () {
    };
    CreatingRocketComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-creating-rocket',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./creating-rocket.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/creating-rocket/creating-rocket.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CreatingRocketComponent);
    return CreatingRocketComponent;
}());



/***/ }),

/***/ "./src/app/cutting-doors/cutting-doors.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/cutting-doors/cutting-doors.component.ts ***!
  \**********************************************************/
/*! exports provided: CuttingDoorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuttingDoorsComponent", function() { return CuttingDoorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CuttingDoorsComponent = /** @class */ (function () {
    function CuttingDoorsComponent() {
    }
    CuttingDoorsComponent.prototype.ngOnInit = function () {
    };
    CuttingDoorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cutting-doors',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cutting-doors.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cutting-doors/cutting-doors.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CuttingDoorsComponent);
    return CuttingDoorsComponent;
}());



/***/ }),

/***/ "./src/app/edit-mode/edit-mode.component.ts":
/*!**************************************************!*\
  !*** ./src/app/edit-mode/edit-mode.component.ts ***!
  \**************************************************/
/*! exports provided: EditModeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditModeComponent", function() { return EditModeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EditModeComponent = /** @class */ (function () {
    function EditModeComponent() {
    }
    EditModeComponent.prototype.ngOnInit = function () {
    };
    EditModeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-mode',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-mode.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-mode/edit-mode.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EditModeComponent);
    return EditModeComponent;
}());



/***/ }),

/***/ "./src/app/finish-robot/finish-robot.component.ts":
/*!********************************************************!*\
  !*** ./src/app/finish-robot/finish-robot.component.ts ***!
  \********************************************************/
/*! exports provided: FinishRobotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinishRobotComponent", function() { return FinishRobotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FinishRobotComponent = /** @class */ (function () {
    function FinishRobotComponent() {
    }
    FinishRobotComponent.prototype.ngOnInit = function () {
    };
    FinishRobotComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-finish-robot',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./finish-robot.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/finish-robot/finish-robot.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FinishRobotComponent);
    return FinishRobotComponent;
}());



/***/ }),

/***/ "./src/app/finishing-model/finishing-model.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/finishing-model/finishing-model.component.ts ***!
  \**************************************************************/
/*! exports provided: FinishingModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinishingModelComponent", function() { return FinishingModelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FinishingModelComponent = /** @class */ (function () {
    function FinishingModelComponent() {
    }
    FinishingModelComponent.prototype.ngOnInit = function () {
    };
    FinishingModelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-finishing-model',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./finishing-model.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/finishing-model/finishing-model.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FinishingModelComponent);
    return FinishingModelComponent;
}());



/***/ }),

/***/ "./src/app/first-scene/first-scene.component.ts":
/*!******************************************************!*\
  !*** ./src/app/first-scene/first-scene.component.ts ***!
  \******************************************************/
/*! exports provided: FirstSceneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstSceneComponent", function() { return FirstSceneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FirstSceneComponent = /** @class */ (function () {
    function FirstSceneComponent() {
    }
    FirstSceneComponent.prototype.ngOnInit = function () {
    };
    FirstSceneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-first-scene',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./first-scene.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/first-scene/first-scene.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FirstSceneComponent);
    return FirstSceneComponent;
}());



/***/ }),

/***/ "./src/app/first-startup/first-startup.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/first-startup/first-startup.component.ts ***!
  \**********************************************************/
/*! exports provided: FirstStartupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstStartupComponent", function() { return FirstStartupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FirstStartupComponent = /** @class */ (function () {
    function FirstStartupComponent() {
    }
    FirstStartupComponent.prototype.ngOnInit = function () {
    };
    FirstStartupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-first-startup',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./first-startup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/first-startup/first-startup.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FirstStartupComponent);
    return FirstStartupComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/importing-objects/importing-objects.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/importing-objects/importing-objects.component.ts ***!
  \******************************************************************/
/*! exports provided: ImportingObjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportingObjectsComponent", function() { return ImportingObjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ImportingObjectsComponent = /** @class */ (function () {
    function ImportingObjectsComponent() {
    }
    ImportingObjectsComponent.prototype.ngOnInit = function () {
    };
    ImportingObjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-importing-objects',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./importing-objects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/importing-objects/importing-objects.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ImportingObjectsComponent);
    return ImportingObjectsComponent;
}());



/***/ }),

/***/ "./src/app/modelling-chapter-overview/modelling-chapter-overview.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modelling-chapter-overview/modelling-chapter-overview.component.ts ***!
  \************************************************************************************/
/*! exports provided: ModellingChapterOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModellingChapterOverviewComponent", function() { return ModellingChapterOverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ModellingChapterOverviewComponent = /** @class */ (function () {
    function ModellingChapterOverviewComponent() {
    }
    ModellingChapterOverviewComponent.prototype.ngOnInit = function () {
    };
    ModellingChapterOverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modelling-chapter-overview',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modelling-chapter-overview.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modelling-chapter-overview/modelling-chapter-overview.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ModellingChapterOverviewComponent);
    return ModellingChapterOverviewComponent;
}());



/***/ }),

/***/ "./src/app/parenting-rig/parenting-rig.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/parenting-rig/parenting-rig.component.ts ***!
  \**********************************************************/
/*! exports provided: ParentingRigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentingRigComponent", function() { return ParentingRigComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ParentingRigComponent = /** @class */ (function () {
    function ParentingRigComponent() {
    }
    ParentingRigComponent.prototype.ngOnInit = function () {
    };
    ParentingRigComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-parenting-rig',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./parenting-rig.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/parenting-rig/parenting-rig.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ParentingRigComponent);
    return ParentingRigComponent;
}());



/***/ }),

/***/ "./src/app/poc/poc.component.ts":
/*!**************************************!*\
  !*** ./src/app/poc/poc.component.ts ***!
  \**************************************/
/*! exports provided: PocComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PocComponent", function() { return PocComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PocComponent = /** @class */ (function () {
    function PocComponent() {
    }
    PocComponent.prototype.ngOnInit = function () {
    };
    PocComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-poc',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./poc.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/poc/poc.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PocComponent);
    return PocComponent;
}());



/***/ }),

/***/ "./src/app/quiz-component/quiz-component.component.ts":
/*!************************************************************!*\
  !*** ./src/app/quiz-component/quiz-component.component.ts ***!
  \************************************************************/
/*! exports provided: QuizComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizComponentComponent", function() { return QuizComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var QuizComponentComponent = /** @class */ (function () {
    function QuizComponentComponent(elementRef) {
        this.elementRef = elementRef;
    }
    QuizComponentComponent.prototype.ngOnInit = function () {
        this.buildQuiz();
    };
    QuizComponentComponent.prototype.buildQuiz = function () {
        var e_1, _a;
        var finalHtml = '';
        finalHtml = finalHtml + '<p class="question">' + this.question + '</p>';
        finalHtml = finalHtml + '<div class="answers">';
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.answers), _c = _b.next(); !_c.done; _c = _b.next()) {
                var answer = _c.value;
                var htmlAnswer = '<label>' +
                    '<input type="radio" name="' + this.qId + '"' + 'value="' + answer +
                    '">' +
                    '<p>' + answer + '</p>' +
                    '</input>' +
                    '</label>';
                finalHtml = finalHtml + htmlAnswer;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        finalHtml = finalHtml + '</div>';
        var d1 = this.elementRef.nativeElement.querySelector('.quiz');
        d1.innerHTML = finalHtml;
    };
    QuizComponentComponent.prototype.checkAnswers = function () {
        console.log('checking answers');
        //validate it
        var qSelector = 'input[name="' + this.qId + '"]:checked';
        var checkedAnswer = this.elementRef.nativeElement.querySelector(qSelector);
        var value = checkedAnswer.getAttribute('value');
        console.log(checkedAnswer);
        console.log(value);
        var result = '';
        if (value == this.correctAnswer) {
            result = 'You answered correctly! Please continue to the next section.';
        }
        else {
            result = 'Answer was incorrect. It is recommend you redo this section.';
        }
        var d1 = this.elementRef.nativeElement.querySelector('.result');
        var resultsHtml = '';
        resultsHtml = resultsHtml + '<p class="result">' + result + '</p>';
        d1.innerHTML = resultsHtml;
    };
    QuizComponentComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], QuizComponentComponent.prototype, "question", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], QuizComponentComponent.prototype, "correctAnswer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], QuizComponentComponent.prototype, "answers", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], QuizComponentComponent.prototype, "qId", void 0);
    QuizComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quiz-component',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quiz-component.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/quiz-component/quiz-component.component.html")).default
        })
        /*
          The quiz component takes multiple input parameters to create a question that can be answered and will then be
          evaluated.
        
          @param question: the question
          @param correctAnswer: the correct answer
          @param answers[]: all possible answers that should be displayed containing the correct one
          @param qId: an ID to be able to find the question and evaluate
        */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], QuizComponentComponent);
    return QuizComponentComponent;
}());



/***/ }),

/***/ "./src/app/rendering/rendering.component.ts":
/*!**************************************************!*\
  !*** ./src/app/rendering/rendering.component.ts ***!
  \**************************************************/
/*! exports provided: RenderingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderingComponent", function() { return RenderingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RenderingComponent = /** @class */ (function () {
    function RenderingComponent() {
    }
    RenderingComponent.prototype.ngOnInit = function () {
    };
    RenderingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rendering',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./rendering.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/rendering/rendering.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RenderingComponent);
    return RenderingComponent;
}());



/***/ }),

/***/ "./src/app/required-tools/required-tools.component.ts":
/*!************************************************************!*\
  !*** ./src/app/required-tools/required-tools.component.ts ***!
  \************************************************************/
/*! exports provided: RequiredToolsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequiredToolsComponent", function() { return RequiredToolsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RequiredToolsComponent = /** @class */ (function () {
    function RequiredToolsComponent() {
    }
    RequiredToolsComponent.prototype.ngOnInit = function () {
    };
    RequiredToolsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-required-tools',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./required-tools.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/required-tools/required-tools.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RequiredToolsComponent);
    return RequiredToolsComponent;
}());



/***/ }),

/***/ "./src/app/restricting-bones/restricting-bones.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/restricting-bones/restricting-bones.component.ts ***!
  \******************************************************************/
/*! exports provided: RestrictingBonesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestrictingBonesComponent", function() { return RestrictingBonesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RestrictingBonesComponent = /** @class */ (function () {
    function RestrictingBonesComponent() {
    }
    RestrictingBonesComponent.prototype.ngOnInit = function () {
    };
    RestrictingBonesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-restricting-bones',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./restricting-bones.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/restricting-bones/restricting-bones.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RestrictingBonesComponent);
    return RestrictingBonesComponent;
}());



/***/ }),

/***/ "./src/app/setup-scene/setup-scene.component.ts":
/*!******************************************************!*\
  !*** ./src/app/setup-scene/setup-scene.component.ts ***!
  \******************************************************/
/*! exports provided: SetupSceneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupSceneComponent", function() { return SetupSceneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SetupSceneComponent = /** @class */ (function () {
    function SetupSceneComponent() {
    }
    SetupSceneComponent.prototype.ngOnInit = function () {
    };
    SetupSceneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-setup-scene',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./setup-scene.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/setup-scene/setup-scene.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SetupSceneComponent);
    return SetupSceneComponent;
}());



/***/ }),

/***/ "./src/app/shaping-up-one/shaping-up-one.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shaping-up-one/shaping-up-one.component.ts ***!
  \************************************************************/
/*! exports provided: ShapingUpOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapingUpOneComponent", function() { return ShapingUpOneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShapingUpOneComponent = /** @class */ (function () {
    function ShapingUpOneComponent() {
    }
    ShapingUpOneComponent.prototype.ngOnInit = function () {
    };
    ShapingUpOneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shaping-up-one',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shaping-up-one.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shaping-up-one/shaping-up-one.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShapingUpOneComponent);
    return ShapingUpOneComponent;
}());



/***/ }),

/***/ "./src/app/shaping-up-two/shaping-up-two.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shaping-up-two/shaping-up-two.component.ts ***!
  \************************************************************/
/*! exports provided: ShapingUpTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapingUpTwoComponent", function() { return ShapingUpTwoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShapingUpTwoComponent = /** @class */ (function () {
    function ShapingUpTwoComponent() {
    }
    ShapingUpTwoComponent.prototype.ngOnInit = function () {
    };
    ShapingUpTwoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shaping-up-two',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shaping-up-two.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shaping-up-two/shaping-up-two.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShapingUpTwoComponent);
    return ShapingUpTwoComponent;
}());



/***/ }),

/***/ "./src/app/shared/keystroke.ts":
/*!*************************************!*\
  !*** ./src/app/shared/keystroke.ts ***!
  \*************************************/
/*! exports provided: Keystroke */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Keystroke", function() { return Keystroke; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Keystroke = /** @class */ (function () {
    function Keystroke(time, key, info) {
        this.time = time;
        this.key = key;
        this.info = info;
    }
    return Keystroke;
}());



/***/ }),

/***/ "./src/app/t-coordinate-system/t-coordinate-system.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/t-coordinate-system/t-coordinate-system.component.ts ***!
  \**********************************************************************/
/*! exports provided: TCoordinateSystemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TCoordinateSystemComponent", function() { return TCoordinateSystemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TCoordinateSystemComponent = /** @class */ (function () {
    function TCoordinateSystemComponent() {
    }
    TCoordinateSystemComponent.prototype.ngOnInit = function () {
    };
    TCoordinateSystemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-t-coordinate-system',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./t-coordinate-system.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/t-coordinate-system/t-coordinate-system.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TCoordinateSystemComponent);
    return TCoordinateSystemComponent;
}());



/***/ }),

/***/ "./src/app/t-curves/t-curves.component.ts":
/*!************************************************!*\
  !*** ./src/app/t-curves/t-curves.component.ts ***!
  \************************************************/
/*! exports provided: TCurvesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TCurvesComponent", function() { return TCurvesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TCurvesComponent = /** @class */ (function () {
    function TCurvesComponent() {
    }
    TCurvesComponent.prototype.ngOnInit = function () {
    };
    TCurvesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-t-curves',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./t-curves.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/t-curves/t-curves.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TCurvesComponent);
    return TCurvesComponent;
}());



/***/ }),

/***/ "./src/app/t-materials-and-textures/t-materials-and-textures.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/t-materials-and-textures/t-materials-and-textures.component.ts ***!
  \********************************************************************************/
/*! exports provided: TMaterialsAndTexturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TMaterialsAndTexturesComponent", function() { return TMaterialsAndTexturesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TMaterialsAndTexturesComponent = /** @class */ (function () {
    function TMaterialsAndTexturesComponent() {
    }
    TMaterialsAndTexturesComponent.prototype.ngOnInit = function () {
    };
    TMaterialsAndTexturesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-t-materials-and-textures',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./t-materials-and-textures.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/t-materials-and-textures/t-materials-and-textures.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TMaterialsAndTexturesComponent);
    return TMaterialsAndTexturesComponent;
}());



/***/ }),

/***/ "./src/app/t-modifiers/t-modifiers.component.ts":
/*!******************************************************!*\
  !*** ./src/app/t-modifiers/t-modifiers.component.ts ***!
  \******************************************************/
/*! exports provided: TModifiersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TModifiersComponent", function() { return TModifiersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TModifiersComponent = /** @class */ (function () {
    function TModifiersComponent() {
    }
    TModifiersComponent.prototype.ngOnInit = function () {
    };
    TModifiersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-t-modifiers',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./t-modifiers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/t-modifiers/t-modifiers.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TModifiersComponent);
    return TModifiersComponent;
}());



/***/ }),

/***/ "./src/app/t-rigging/t-rigging.component.ts":
/*!**************************************************!*\
  !*** ./src/app/t-rigging/t-rigging.component.ts ***!
  \**************************************************/
/*! exports provided: TRiggingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRiggingComponent", function() { return TRiggingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TRiggingComponent = /** @class */ (function () {
    function TRiggingComponent() {
    }
    TRiggingComponent.prototype.ngOnInit = function () {
    };
    TRiggingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-t-rigging',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./t-rigging.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/t-rigging/t-rigging.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TRiggingComponent);
    return TRiggingComponent;
}());



/***/ }),

/***/ "./src/app/using-curves/using-curves.component.ts":
/*!********************************************************!*\
  !*** ./src/app/using-curves/using-curves.component.ts ***!
  \********************************************************/
/*! exports provided: UsingCurvesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsingCurvesComponent", function() { return UsingCurvesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UsingCurvesComponent = /** @class */ (function () {
    function UsingCurvesComponent() {
    }
    UsingCurvesComponent.prototype.ngOnInit = function () {
    };
    UsingCurvesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-using-curves',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./using-curves.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/using-curves/using-curves.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UsingCurvesComponent);
    return UsingCurvesComponent;
}());



/***/ }),

/***/ "./src/app/viewport/viewport.component.ts":
/*!************************************************!*\
  !*** ./src/app/viewport/viewport.component.ts ***!
  \************************************************/
/*! exports provided: ViewportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewportComponent", function() { return ViewportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ViewportComponent = /** @class */ (function () {
    function ViewportComponent() {
    }
    ViewportComponent.prototype.ngOnInit = function () {
    };
    ViewportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-viewport',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./viewport.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/viewport/viewport.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ViewportComponent);
    return ViewportComponent;
}());



/***/ }),

/***/ "./src/app/xml-video-component/xml-video-component.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/xml-video-component/xml-video-component.component.ts ***!
  \**********************************************************************/
/*! exports provided: XmlVideoComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XmlVideoComponentComponent", function() { return XmlVideoComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_keystroke__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/keystroke */ "./src/app/shared/keystroke.ts");



var XmlVideoComponentComponent = /** @class */ (function () {
    function XmlVideoComponentComponent(elementRef) {
        this.elementRef = elementRef;
        this.keystrokes = [];
        this.secondsOfKeystrokes = [];
        this.displayAllToggled = false;
    }
    XmlVideoComponentComponent.prototype.ngOnInit = function () {
        /* this is a server maintained by minf group, change to local path for development */
        this.video_assets_folder = "http://www.minf.uni-bamberg.de/recordings/ws2020/Blender/";
        this.videopath = this.video_assets_folder + this.videoname;
        /* currently set to a local path containing the xml files */
        this.xml_assets_folder = "assets/xml/";
        /* xml path is created by changing the file extension to .xml, i.e. demo.mp4 -> demo.xml.
            DEV Note: when using file extensions with more or less than 3 letters this needs adjustment!*/
        this.xmlpath = this.xml_assets_folder + this.videoname.slice(0, -3) + 'xml';
        //get the xml file
        var xmlhttp = new XMLHttpRequest();
        var object = this;
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                object.myFunction(this);
            }
        };
        xmlhttp.open("GET", this.xmlpath, true);
        xmlhttp.send();
    };
    /* used to process the xml file once its loaded */
    XmlVideoComponentComponent.prototype.myFunction = function (xml) {
        var _this = this;
        var x, i, xmlDoc;
        xmlDoc = xml.responseXML;
        x = xmlDoc.getElementsByTagName("keystroke");
        for (i = 0; i < x.length; i++) {
            var time = x[i].getElementsByTagName("time")[0].childNodes[0].nodeValue;
            var key = x[i].getElementsByTagName("key")[0].childNodes[0].nodeValue;
            var info = x[i].getElementsByTagName("info")[0].childNodes[0].nodeValue;
            this.keystrokes.push(new _shared_keystroke__WEBPACK_IMPORTED_MODULE_2__["Keystroke"](time, key, info));
            this.secondsOfKeystrokes.push(time);
        }
        //update every second
        setInterval(function () { _this.update(); }, 1000);
    };
    ;
    XmlVideoComponentComponent.prototype.update = function () {
        if (this.displayAllToggled) {
            //no need to update this table as long as the toggle is active
            return;
        }
        var d1 = this.elementRef.nativeElement.querySelector('.video');
        var currentTime = d1.currentTime;
        this.updateKeystrokeTable(currentTime);
    };
    /* this function goes through all keystrokes of the xml and updates the table accordingly */
    XmlVideoComponentComponent.prototype.updateKeystrokeTable = function (currentVideoTime) {
        var lastIndex = -1;
        for (var i = 0; i < this.secondsOfKeystrokes.length; i++) {
            if (this.secondsOfKeystrokes[i] > currentVideoTime) {
                lastIndex = i - 1;
                break;
            }
            if (i == this.secondsOfKeystrokes.length - 1) {
                lastIndex = i;
            }
        }
        var tbodyHtml = '';
        var tableBody = this.elementRef.nativeElement.querySelector('.keystrokeAnchor');
        for (var j = lastIndex; j >= 0; j--) {
            var ks = this.keystrokes[j];
            var insertString = '<tr>' +
                '<td>' + this.convertTimeToDisplayFormat(ks.time) + '</td>' +
                '<td>' + ks.key + '</td>' +
                '<td>' + ks.info + '</td>' +
                '</tr>';
            tbodyHtml = tbodyHtml + insertString;
        }
        tableBody.innerHTML = tbodyHtml;
    };
    /* convert to a human readible format */
    XmlVideoComponentComponent.prototype.convertTimeToDisplayFormat = function (seconds) {
        var secondsAsNumber = +seconds;
        if (secondsAsNumber < 60) {
            return '0:' + seconds;
        }
        var minutes;
        minutes = Math.floor(secondsAsNumber / 60);
        var secondsRemainder;
        secondsRemainder = secondsAsNumber % 60;
        var secondsRemainerString;
        if (secondsRemainder < 10) {
            secondsRemainerString = '0' + secondsRemainder.toString();
        }
        else {
            secondsRemainerString = secondsRemainder.toString();
        }
        var returnString;
        returnString = minutes.toString() + ':' + secondsRemainerString;
        return returnString;
    };
    /* toggle was used to display all keystrokes */
    XmlVideoComponentComponent.prototype.toggleChanged = function () {
        if (!this.displayAllToggled) {
            this.displayAllToggled = true;
            //update the table to display all values - this can be done by simply putting a completely high number, e.g. 24 hours = 86400s
            //no video should ever be that long..
            this.updateKeystrokeTable(86400);
        }
        else {
            this.displayAllToggled = false;
            //call update of table
            this.update();
        }
    };
    XmlVideoComponentComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], XmlVideoComponentComponent.prototype, "videoname", void 0);
    XmlVideoComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-xml-video-component',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./xml-video-component.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/xml-video-component/xml-video-component.component.html")).default
        })
        /**
         * This component extends the basic-video-component functionality by adding a table containing the key
         * strokes used in the video. the keystrokes have to be defined in a separate XML file.
         */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], XmlVideoComponentComponent);
    return XmlVideoComponentComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/prism.js":
/*!**********************!*\
  !*** ./src/prism.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* PrismJS 1.17.1
https://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript+bash+diff+git+less+http+javadoclike+markdown+json+js-templates+typescript+jsdoc+scss+js-extras+jsx+sass&plugins=line-numbers+command-line */
var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(u){var c=/\blang(?:uage)?-([\w-]+)\b/i,a=0;var _={manual:u.Prism&&u.Prism.manual,disableWorkerMessageHandler:u.Prism&&u.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof L?new L(e.type,_.util.encode(e.content),e.alias):Array.isArray(e)?e.map(_.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++a}),e.__id},clone:function n(e,r){var t,a,i=_.util.type(e);switch(r=r||{},i){case"Object":if(a=_.util.objId(e),r[a])return r[a];for(var o in t={},r[a]=t,e)e.hasOwnProperty(o)&&(t[o]=n(e[o],r));return t;case"Array":return a=_.util.objId(e),r[a]?r[a]:(t=[],r[a]=t,e.forEach(function(e,a){t[a]=n(e,r)}),t);default:return e}}},languages:{extend:function(e,a){var n=_.util.clone(_.languages[e]);for(var r in a)n[r]=a[r];return n},insertBefore:function(n,e,a,r){var t=(r=r||_.languages)[n],i={};for(var o in t)if(t.hasOwnProperty(o)){if(o==e)for(var l in a)a.hasOwnProperty(l)&&(i[l]=a[l]);a.hasOwnProperty(o)||(i[o]=t[o])}var s=r[n];return r[n]=i,_.languages.DFS(_.languages,function(e,a){a===s&&e!=n&&(this[e]=i)}),i},DFS:function e(a,n,r,t){t=t||{};var i=_.util.objId;for(var o in a)if(a.hasOwnProperty(o)){n.call(a,o,a[o],r||o);var l=a[o],s=_.util.type(l);"Object"!==s||t[i(l)]?"Array"!==s||t[i(l)]||(t[i(l)]=!0,e(l,n,o,t)):(t[i(l)]=!0,e(l,n,null,t))}}},plugins:{},highlightAll:function(e,a){_.highlightAllUnder(document,e,a)},highlightAllUnder:function(e,a,n){var r={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};_.hooks.run("before-highlightall",r);for(var t,i=e.querySelectorAll(r.selector),o=0;t=i[o++];)_.highlightElement(t,!0===a,r.callback)},highlightElement:function(e,a,n){var r=function(e){for(;e&&!c.test(e.className);)e=e.parentNode;return e?(e.className.match(c)||[,"none"])[1].toLowerCase():"none"}(e),t=_.languages[r];e.className=e.className.replace(c,"").replace(/\s+/g," ")+" language-"+r;var i=e.parentNode;i&&"pre"===i.nodeName.toLowerCase()&&(i.className=i.className.replace(c,"").replace(/\s+/g," ")+" language-"+r);var o={element:e,language:r,grammar:t,code:e.textContent};function l(e){o.highlightedCode=e,_.hooks.run("before-insert",o),o.element.innerHTML=o.highlightedCode,_.hooks.run("after-highlight",o),_.hooks.run("complete",o),n&&n.call(o.element)}if(_.hooks.run("before-sanity-check",o),!o.code)return _.hooks.run("complete",o),void(n&&n.call(o.element));if(_.hooks.run("before-highlight",o),o.grammar)if(a&&u.Worker){var s=new Worker(_.filename);s.onmessage=function(e){l(e.data)},s.postMessage(JSON.stringify({language:o.language,code:o.code,immediateClose:!0}))}else l(_.highlight(o.code,o.grammar,o.language));else l(_.util.encode(o.code))},highlight:function(e,a,n){var r={code:e,grammar:a,language:n};return _.hooks.run("before-tokenize",r),r.tokens=_.tokenize(r.code,r.grammar),_.hooks.run("after-tokenize",r),L.stringify(_.util.encode(r.tokens),r.language)},matchGrammar:function(e,a,n,r,t,i,o){for(var l in n)if(n.hasOwnProperty(l)&&n[l]){var s=n[l];s=Array.isArray(s)?s:[s];for(var u=0;u<s.length;++u){if(o&&o==l+","+u)return;var c=s[u],g=c.inside,f=!!c.lookbehind,h=!!c.greedy,d=0,m=c.alias;if(h&&!c.pattern.global){var p=c.pattern.toString().match(/[imsuy]*$/)[0];c.pattern=RegExp(c.pattern.source,p+"g")}c=c.pattern||c;for(var y=r,v=t;y<a.length;v+=a[y].length,++y){var k=a[y];if(a.length>e.length)return;if(!(k instanceof L)){if(h&&y!=a.length-1){if(c.lastIndex=v,!(x=c.exec(e)))break;for(var b=x.index+(f&&x[1]?x[1].length:0),w=x.index+x[0].length,A=y,P=v,O=a.length;A<O&&(P<w||!a[A].type&&!a[A-1].greedy);++A)(P+=a[A].length)<=b&&(++y,v=P);if(a[y]instanceof L)continue;j=A-y,k=e.slice(v,P),x.index-=v}else{c.lastIndex=0;var x=c.exec(k),j=1}if(x){f&&(d=x[1]?x[1].length:0);w=(b=x.index+d)+(x=x[0].slice(d)).length;var N=k.slice(0,b),S=k.slice(w),C=[y,j];N&&(++y,v+=N.length,C.push(N));var E=new L(l,g?_.tokenize(x,g):x,m,x,h);if(C.push(E),S&&C.push(S),Array.prototype.splice.apply(a,C),1!=j&&_.matchGrammar(e,a,n,y,v,!0,l+","+u),i)break}else if(i)break}}}}},tokenize:function(e,a){var n=[e],r=a.rest;if(r){for(var t in r)a[t]=r[t];delete a.rest}return _.matchGrammar(e,n,a,0,0,!1),n},hooks:{all:{},add:function(e,a){var n=_.hooks.all;n[e]=n[e]||[],n[e].push(a)},run:function(e,a){var n=_.hooks.all[e];if(n&&n.length)for(var r,t=0;r=n[t++];)r(a)}},Token:L};function L(e,a,n,r,t){this.type=e,this.content=a,this.alias=n,this.length=0|(r||"").length,this.greedy=!!t}if(u.Prism=_,L.stringify=function(e,a){if("string"==typeof e)return e;if(Array.isArray(e))return e.map(function(e){return L.stringify(e,a)}).join("");var n={type:e.type,content:L.stringify(e.content,a),tag:"span",classes:["token",e.type],attributes:{},language:a};if(e.alias){var r=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(n.classes,r)}_.hooks.run("wrap",n);var t=Object.keys(n.attributes).map(function(e){return e+'="'+(n.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+n.tag+' class="'+n.classes.join(" ")+'"'+(t?" "+t:"")+">"+n.content+"</"+n.tag+">"},!u.document)return u.addEventListener&&(_.disableWorkerMessageHandler||u.addEventListener("message",function(e){var a=JSON.parse(e.data),n=a.language,r=a.code,t=a.immediateClose;u.postMessage(_.highlight(r,_.languages[n],n)),t&&u.close()},!1)),_;var e=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();if(e&&(_.filename=e.src,e.hasAttribute("data-manual")&&(_.manual=!0)),!_.manual){function n(){_.manual||_.highlightAll()}"loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(n):window.setTimeout(n,16):document.addEventListener("DOMContentLoaded",n)}return _}(_self); true&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);
Prism.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.hooks.add("wrap",function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(a,e){var s={};s["language-"+e]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[e]},s.cdata=/^<!\[CDATA\[|\]\]>$/i;var n={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:s}};n["language-"+e]={pattern:/[\s\S]+/,inside:Prism.languages[e]};var i={};i[a]={pattern:RegExp("(<__[\\s\\S]*?>)(?:<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\s*|[\\s\\S])*?(?=<\\/__>)".replace(/__/g,a),"i"),lookbehind:!0,greedy:!0,inside:n},Prism.languages.insertBefore("markup","cdata",i)}}),Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup;
!function(s){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;s.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/@[\w-]+/}},url:{pattern:RegExp("url\\((?:"+t.source+"|[^\n\r()]*)\\)","i"),inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},s.languages.css.atrule.inside.rest=s.languages.css;var e=s.languages.markup;e&&(e.tag.addInlined("style","css"),s.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:e.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:s.languages.css}},alias:"language-css"}},e.tag))}(Prism);
Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/};
Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.js=Prism.languages.javascript;
!function(e){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",n={environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)\w+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b\w+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+?)\s*(?:\r?\n|\r)(?:[\s\S])*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:n},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s*(?:\r?\n|\r)(?:[\s\S])*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0},{pattern:/(["'])(?:\\[\s\S]|\$\([^)]+\)|`[^`]+`|(?!\1)[^\\])*\1/,greedy:!0,inside:n}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:n.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|==?|!=?|=~|<<[<-]?|[&\d]?>>|\d?[<>]&?|&[>&]?|\|[&|]?|<=?|>=?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}};for(var a=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],r=n.variable[1].inside,s=0;s<a.length;s++)r[a[s]]=e.languages.bash[a[s]];e.languages.shell=e.languages.bash}(Prism);
!function(d){d.languages.diff={coord:[/^(?:\*{3}|-{3}|\+{3}).*$/m,/^@@.*@@$/m,/^\d+.*$/m]};var r={"deleted-sign":"-","deleted-arrow":"<","inserted-sign":"+","inserted-arrow":">",unchanged:" ",diff:"!"};Object.keys(r).forEach(function(e){var n=r[e],a=[];/^\w+$/.test(e)||a.push(/\w+/.exec(e)[0]),"diff"===e&&a.push("bold"),d.languages.diff[e]={pattern:RegExp("^(?:["+n+"].*(?:\r\n?|\n|(?![\\s\\S])))+","m"),alias:a}}),Object.defineProperty(d.languages.diff,"PREFIXES",{value:r})}(Prism);
Prism.languages.git={comment:/^#.*/m,deleted:/^[-–].*/m,inserted:/^\+.*/m,string:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/m,command:{pattern:/^.*\$ git .*$/m,inside:{parameter:/\s--?\w+/m}},coord:/^@@.*@@$/m,commit_sha1:/^commit \w{40}$/m};
Prism.languages.less=Prism.languages.extend("css",{comment:[/\/\*[\s\S]*?\*\//,{pattern:/(^|[^\\])\/\/.*/,lookbehind:!0}],atrule:{pattern:/@[\w-]+?(?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};])*?(?=\s*\{)/,inside:{punctuation:/[:()]/}},selector:{pattern:/(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@])*?(?=\s*\{)/,inside:{variable:/@+[\w-]+/}},property:/(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,operator:/[+\-*\/]/}),Prism.languages.insertBefore("less","property",{variable:[{pattern:/@[\w-]+\s*:/,inside:{punctuation:/:/}},/@@?[\w-]+/],"mixin-usage":{pattern:/([{;]\s*)[.#](?!\d)[\w-]+.*?(?=[(;])/,lookbehind:!0,alias:"function"}});
!function(t){t.languages.http={"request-line":{pattern:/^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\s(?:https?:\/\/|\/)\S+\sHTTP\/[0-9.]+/m,inside:{property:/^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/,"attr-name":/:\w+/}},"response-status":{pattern:/^HTTP\/1.[01] \d+.*/m,inside:{property:{pattern:/(^HTTP\/1.[01] )\d+.*/i,lookbehind:!0}}},"header-name":{pattern:/^[\w-]+:(?=.)/m,alias:"keyword"}};var a,e,n,i=t.languages,s={"application/javascript":i.javascript,"application/json":i.json||i.javascript,"application/xml":i.xml,"text/xml":i.xml,"text/html":i.html,"text/css":i.css},p={"application/json":!0,"application/xml":!0};for(var r in s)if(s[r]){a=a||{};var T=p[r]?(void 0,n=(e=r).replace(/^[a-z]+\//,""),"(?:"+e+"|\\w+/(?:[\\w.-]+\\+)+"+n+"(?![+\\w.-]))"):r;a[r]={pattern:RegExp("(content-type:\\s*"+T+"[\\s\\S]*?)(?:\\r?\\n|\\r){2}[\\s\\S]*","i"),lookbehind:!0,inside:{rest:s[r]}}}a&&t.languages.insertBefore("http","header-name",a)}(Prism);
!function(p){var a=p.languages.javadoclike={parameter:{pattern:/(^\s*(?:\/{3}|\*|\/\*\*)\s*@(?:param|arg|arguments)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^\s*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};Object.defineProperty(a,"addSupport",{value:function(a,e){"string"==typeof a&&(a=[a]),a.forEach(function(a){!function(a,e){var n="doc-comment",t=p.languages[a];if(t){var r=t[n];if(!r){var i={"doc-comment":{pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,alias:"comment"}};r=(t=p.languages.insertBefore(a,"comment",i))[n]}if(r instanceof RegExp&&(r=t[n]={pattern:r}),Array.isArray(r))for(var o=0,s=r.length;o<s;o++)r[o]instanceof RegExp&&(r[o]={pattern:r[o]}),e(r[o]);else e(r)}}(a,function(a){a.inside||(a.inside={}),a.inside.rest=e})})}}),a.addSupport(["java","javascript","php"],a)}(Prism);
!function(d){function n(n,e){return n=n.replace(/<inner>/g,"(?:\\\\.|[^\\\\\\n\r]|(?:\r?\n|\r)(?!\r?\n|\r))"),e&&(n=n+"|"+n.replace(/_/g,"\\*")),RegExp("((?:^|[^\\\\])(?:\\\\{2})*)(?:"+n+")")}var e="(?:\\\\.|``.+?``|`[^`\r\\n]+`|[^\\\\|\r\\n`])+",t="\\|?__(?:\\|__)+\\|?(?:(?:\r?\n|\r)|$)".replace(/__/g,e),a="\\|?[ \t]*:?-{3,}:?[ \t]*(?:\\|[ \t]*:?-{3,}:?[ \t]*)+\\|?(?:\r?\n|\r)";d.languages.markdown=d.languages.extend("markup",{}),d.languages.insertBefore("markdown","prolog",{blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+t+a+"(?:"+t+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+t+a+")(?:"+t+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(e),inside:d.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+t+")"+a+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+t+"$"),inside:{"table-header":{pattern:RegExp(e),alias:"important",inside:d.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/(^[ \t]*(?:\r?\n|\r))(?: {4}|\t).+(?:(?:\r?\n|\r)(?: {4}|\t).+)*/m,lookbehind:!0,alias:"keyword"},{pattern:/``.+?``|`[^`\r\n]+`/,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\r?\n|\r))[\s\S]+?(?=(?:\r?\n|\r)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\r?\n|\r)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#+.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:n("__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__",!0),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:n("_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_",!0),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:n("(~~?)(?:(?!~)<inner>)+?\\2",!1),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},url:{pattern:n('!?\\[(?:(?!\\])<inner>)+\\](?:\\([^\\s)]+(?:[\t ]+"(?:\\\\.|[^"\\\\])*")?\\)| ?\\[(?:(?!\\])<inner>)+\\])',!1),lookbehind:!0,greedy:!0,inside:{variable:{pattern:/(\[)[^\]]+(?=\]$)/,lookbehind:!0},content:{pattern:/(^!?\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},string:{pattern:/"(?:\\.|[^"\\])*"(?=\)$)/}}}}),["url","bold","italic","strike"].forEach(function(e){["url","bold","italic","strike"].forEach(function(n){e!==n&&(d.languages.markdown[e].inside.content.inside[n]=d.languages.markdown[n])})}),d.hooks.add("after-tokenize",function(n){"markdown"!==n.language&&"md"!==n.language||!function n(e){if(e&&"string"!=typeof e)for(var t=0,a=e.length;t<a;t++){var i=e[t];if("code"===i.type){var r=i.content[1],o=i.content[3];if(r&&o&&"code-language"===r.type&&"code-block"===o.type&&"string"==typeof r.content){var l="language-"+r.content.trim().split(/\s+/)[0].toLowerCase();o.alias?"string"==typeof o.alias?o.alias=[o.alias,l]:o.alias.push(l):o.alias=[l]}}else n(i.content)}}(n.tokens)}),d.hooks.add("wrap",function(n){if("code-block"===n.type){for(var e="",t=0,a=n.classes.length;t<a;t++){var i=n.classes[t],r=/language-(.+)/.exec(i);if(r){e=r[1];break}}var o=d.languages[e];if(o){var l=n.content.replace(/&lt;/g,"<").replace(/&amp;/g,"&");n.content=d.highlight(l,o,e)}else if(e&&"none"!==e&&d.plugins.autoloader){var s="md-"+(new Date).valueOf()+"-"+Math.floor(1e16*Math.random());n.attributes.id=s,d.plugins.autoloader.loadLanguages(e,function(){var n=document.getElementById(s);n&&(n.innerHTML=d.highlight(n.textContent,d.languages[e],e))})}}}),d.languages.md=d.languages.markdown}(Prism);
Prism.languages.json={property:{pattern:/"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,greedy:!0},string:{pattern:/"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,greedy:!0},comment:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,number:/-?\d+\.?\d*(e[+-]?\d+)?/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:true|false)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}};
!function(u){var e=u.languages.javascript["template-string"],n=e.pattern.source,a=e.inside.interpolation,i=a.inside["interpolation-punctuation"],r=a.pattern.source;function t(e,t){if(u.languages[e])return{pattern:RegExp("((?:"+t+")\\s*)"+n),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},"embedded-code":{pattern:/[\s\S]+/,alias:e}}}}function o(e,t,n){var r={code:e,grammar:t,language:n};return u.hooks.run("before-tokenize",r),r.tokens=u.tokenize(r.code,r.grammar),u.hooks.run("after-tokenize",r),r.tokens}function d(e){var t={};t["interpolation-punctuation"]=i;var n=u.tokenize(e,t);if(3===n.length){var r=[1,1];r.push.apply(r,o(n[1],u.languages.javascript,"javascript")),n.splice.apply(n,r)}return new u.Token("interpolation",n,a.alias,e)}function c(a,e,i){var t=u.tokenize(a,{interpolation:{pattern:RegExp(r),lookbehind:!0}}),f=0,y={},n=o(t.map(function(e){if("string"==typeof e)return e;for(var t,n=e.content;-1!==a.indexOf((r=f++,t="___"+i.toUpperCase()+"_"+r+"___")););return y[t]=n,t;var r}).join(""),e,i),v=Object.keys(y);return f=0,function e(t){for(var n=0;n<t.length;n++){if(f>=v.length)return;var r=t[n];if("string"==typeof r||"string"==typeof r.content){var a=v[f],i="string"==typeof r?r:r.content,o=i.indexOf(a);if(-1!==o){++f;var s=i.substring(0,o),p=d(y[a]),l=i.substring(o+a.length),g=[];if(s&&g.push(s),g.push(p),l){var u=[l];e(u),g.push.apply(g,u)}"string"==typeof r?(t.splice.apply(t,[n,1].concat(g)),n+=g.length-1):r.content=g}}else{var c=r.content;Array.isArray(c)?e(c):e([c])}}}(n),new u.Token(i,n,"language-"+i,a)}u.languages.javascript["template-string"]=[t("css","\\b(?:styled(?:\\([^)]*\\))?(?:\\s*\\.\\s*\\w+(?:\\([^)]*\\))*)*|css(?:\\s*\\.\\s*(?:global|resolve))?|createGlobalStyle|keyframes)"),t("html","\\bhtml|\\.\\s*(?:inner|outer)HTML\\s*\\+?="),t("svg","\\bsvg"),t("markdown","\\b(?:md|markdown)"),t("graphql","\\b(?:gql|graphql(?:\\s*\\.\\s*experimental)?)"),e].filter(Boolean);var s={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};function f(e){return"string"==typeof e?e:Array.isArray(e)?e.map(f).join(""):f(e.content)}u.hooks.add("after-tokenize",function(e){e.language in s&&!function e(t){for(var n=0,r=t.length;n<r;n++){var a=t[n];if("string"!=typeof a){var i=a.content;if(Array.isArray(i))if("template-string"===a.type){var o=i[1];if(3===i.length&&"string"!=typeof o&&"embedded-code"===o.type){var s=f(o),p=o.alias,l=Array.isArray(p)?p[0]:p,g=u.languages[l];if(!g)continue;i[1]=c(s,g,l)}}else e(i);else"string"!=typeof i&&e([i])}}}(e.tokens)})}(Prism);
Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/}),Prism.languages.ts=Prism.languages.typescript;
!function(a){var e=a.languages.javascript,n="{(?:[^{}]|{(?:[^{}]|{[^{}]*})*})+}",s="(@(?:param|arg|argument|property)\\s+(?:"+n+"\\s+)?)";a.languages.jsdoc=a.languages.extend("javadoclike",{parameter:{pattern:RegExp(s+"[$\\w\\xA0-\\uFFFF.]+(?=\\s|$)"),lookbehind:!0,inside:{punctuation:/\./}}}),a.languages.insertBefore("jsdoc","keyword",{"optional-parameter":{pattern:RegExp(s+"\\[[$\\w\\xA0-\\uFFFF.]+(?:=[^[\\]]+)?\\](?=\\s|$)"),lookbehind:!0,inside:{parameter:{pattern:/(^\[)[$\w\xA0-\uFFFF\.]+/,lookbehind:!0,inside:{punctuation:/\./}},code:{pattern:/(=)[\s\S]*(?=\]$)/,lookbehind:!0,inside:e,alias:"language-javascript"},punctuation:/[=[\]]/}},"class-name":[{pattern:RegExp("(@[a-z]+\\s+)"+n),lookbehind:!0,inside:{punctuation:/[.,:?=<>|{}()[\]]/}},{pattern:/(@(?:augments|extends|class|interface|memberof!?|this)\s+)[A-Z]\w*(?:\.[A-Z]\w*)*/,lookbehind:!0,inside:{punctuation:/\./}}],example:{pattern:/(@example\s+)[^@]+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,lookbehind:!0,inside:{code:{pattern:/^(\s*(?:\*\s*)?).+$/m,lookbehind:!0,inside:e,alias:"language-javascript"}}}}),a.languages.javadoclike.addSupport("javascript",a.languages.jsdoc)}(Prism);
Prism.languages.scss=Prism.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()]|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),Prism.languages.insertBefore("scss","atrule",{keyword:[/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i,{pattern:/( +)(?:from|through)(?= )/,lookbehind:!0}]}),Prism.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),Prism.languages.insertBefore("scss","function",{placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:true|false)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,lookbehind:!0}}),Prism.languages.scss.atrule.inside.rest=Prism.languages.scss;
!function(a){a.languages.insertBefore("javascript","function-variable",{"method-variable":{pattern:RegExp("(\\.\\s*)"+a.languages.javascript["function-variable"].pattern.source),lookbehind:!0,alias:["function-variable","method","function","property-access"]}}),a.languages.insertBefore("javascript","function",{method:{pattern:RegExp("(\\.\\s*)"+a.languages.javascript.function.source),lookbehind:!0,alias:["function","property-access"]}}),a.languages.insertBefore("javascript","constant",{"known-class-name":[{pattern:/\b(?:(?:(?:Uint|Int)(?:8|16|32)|Uint8Clamped|Float(?:32|64))?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|(?:Weak)?(?:Set|Map)|WebAssembly)\b/,alias:"class-name"},{pattern:/\b(?:[A-Z]\w*)Error\b/,alias:"class-name"}]}),a.languages.javascript.keyword.unshift({pattern:/\b(?:as|default|export|from|import)\b/,alias:"module"},{pattern:/\bnull\b/,alias:["null","nil"]},{pattern:/\bundefined\b/,alias:"nil"}),a.languages.insertBefore("javascript","operator",{spread:{pattern:/\.{3}/,alias:"operator"},arrow:{pattern:/=>/,alias:"operator"}}),a.languages.insertBefore("javascript","punctuation",{"property-access":{pattern:/(\.\s*)#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*/,lookbehind:!0},"maybe-class-name":{pattern:/(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,lookbehind:!0},dom:{pattern:/\b(?:document|location|navigator|performance|(?:local|session)Storage|window)\b/,alias:"variable"},console:{pattern:/\bconsole(?=\s*\.)/,alias:"class-name"}});for(var e=["function","function-variable","method","method-variable","property-access"],t=0;t<e.length;t++){var n=e[t],r=a.languages.javascript[n];"RegExp"===a.util.type(r)&&(r=a.languages.javascript[n]={pattern:r});var s=r.inside||{};(r.inside=s)["maybe-class-name"]=/^[A-Z][\s\S]*/}}(Prism);
!function(i){var t=i.util.clone(i.languages.javascript);i.languages.jsx=i.languages.extend("markup",t),i.languages.jsx.tag.pattern=/<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^}]*\}|[^{}])*\}|[^{}])+\}))?|\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}))*\s*\/?)?>/i,i.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/i,i.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i,i.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,i.languages.insertBefore("inside","attr-name",{spread:{pattern:/\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}/,inside:{punctuation:/\.{3}|[{}.]/,"attr-value":/\w+/}}},i.languages.jsx.tag),i.languages.insertBefore("inside","attr-value",{script:{pattern:/=(\{(?:\{(?:\{[^}]*\}|[^}])*\}|[^}])+\})/i,inside:{"script-punctuation":{pattern:/^=(?={)/,alias:"punctuation"},rest:i.languages.jsx},alias:"language-javascript"}},i.languages.jsx.tag);var o=function(t){return t?"string"==typeof t?t:"string"==typeof t.content?t.content:t.content.map(o).join(""):""},p=function(t){for(var n=[],e=0;e<t.length;e++){var a=t[e],s=!1;if("string"!=typeof a&&("tag"===a.type&&a.content[0]&&"tag"===a.content[0].type?"</"===a.content[0].content[0].content?0<n.length&&n[n.length-1].tagName===o(a.content[0].content[1])&&n.pop():"/>"===a.content[a.content.length-1].content||n.push({tagName:o(a.content[0].content[1]),openedBraces:0}):0<n.length&&"punctuation"===a.type&&"{"===a.content?n[n.length-1].openedBraces++:0<n.length&&0<n[n.length-1].openedBraces&&"punctuation"===a.type&&"}"===a.content?n[n.length-1].openedBraces--:s=!0),(s||"string"==typeof a)&&0<n.length&&0===n[n.length-1].openedBraces){var g=o(a);e<t.length-1&&("string"==typeof t[e+1]||"plain-text"===t[e+1].type)&&(g+=o(t[e+1]),t.splice(e+1,1)),0<e&&("string"==typeof t[e-1]||"plain-text"===t[e-1].type)&&(g=o(t[e-1])+g,t.splice(e-1,1),e--),t[e]=new i.Token("plain-text",g,null,g)}a.content&&"string"!=typeof a.content&&p(a.content)}};i.hooks.add("after-tokenize",function(t){"jsx"!==t.language&&"tsx"!==t.language||p(t.tokens)})}(Prism);
!function(e){e.languages.sass=e.languages.extend("css",{comment:{pattern:/^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t]+.+)*/m,lookbehind:!0}}),e.languages.insertBefore("sass","atrule",{"atrule-line":{pattern:/^(?:[ \t]*)[@+=].+/m,inside:{atrule:/(?:@[\w-]+|[+=])/m}}}),delete e.languages.sass.atrule;var t=/\$[-\w]+|#\{\$[-\w]+\}/,a=[/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/,{pattern:/(\s+)-(?=\s)/,lookbehind:!0}];e.languages.insertBefore("sass","property",{"variable-line":{pattern:/^[ \t]*\$.+/m,inside:{punctuation:/:/,variable:t,operator:a}},"property-line":{pattern:/^[ \t]*(?:[^:\s]+ *:.*|:[^:\s]+.*)/m,inside:{property:[/[^:\s]+(?=\s*:)/,{pattern:/(:)[^:\s]+/,lookbehind:!0}],punctuation:/:/,variable:t,operator:a,important:e.languages.sass.important}}}),delete e.languages.sass.property,delete e.languages.sass.important,e.languages.insertBefore("sass","punctuation",{selector:{pattern:/([ \t]*)\S(?:,?[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,?[^,\r\n]+)*)*/,lookbehind:!0}})}(Prism);
!function(){if("undefined"!=typeof self&&self.Prism&&self.document){var l="line-numbers",c=/\n(?!$)/g,m=function(e){var t=a(e)["white-space"];if("pre-wrap"===t||"pre-line"===t){var n=e.querySelector("code"),r=e.querySelector(".line-numbers-rows"),s=e.querySelector(".line-numbers-sizer"),i=n.textContent.split(c);s||((s=document.createElement("span")).className="line-numbers-sizer",n.appendChild(s)),s.style.display="block",i.forEach(function(e,t){s.textContent=e||"\n";var n=s.getBoundingClientRect().height;r.children[t].style.height=n+"px"}),s.textContent="",s.style.display="none"}},a=function(e){return e?window.getComputedStyle?getComputedStyle(e):e.currentStyle||null:null};window.addEventListener("resize",function(){Array.prototype.forEach.call(document.querySelectorAll("pre."+l),m)}),Prism.hooks.add("complete",function(e){if(e.code){var t=e.element,n=t.parentNode;if(n&&/pre/i.test(n.nodeName)&&!t.querySelector(".line-numbers-rows")){for(var r=!1,s=/(?:^|\s)line-numbers(?:\s|$)/,i=t;i;i=i.parentNode)if(s.test(i.className)){r=!0;break}if(r){t.className=t.className.replace(s," "),s.test(n.className)||(n.className+=" line-numbers");var l,a=e.code.match(c),o=a?a.length+1:1,u=new Array(o+1).join("<span></span>");(l=document.createElement("span")).setAttribute("aria-hidden","true"),l.className="line-numbers-rows",l.innerHTML=u,n.hasAttribute("data-start")&&(n.style.counterReset="linenumber "+(parseInt(n.getAttribute("data-start"),10)-1)),e.element.appendChild(l),m(n),Prism.hooks.run("line-numbers",e)}}}}),Prism.hooks.add("line-numbers",function(e){e.plugins=e.plugins||{},e.plugins.lineNumbers=!0}),Prism.plugins.lineNumbers={getLine:function(e,t){if("PRE"===e.tagName&&e.classList.contains(l)){var n=e.querySelector(".line-numbers-rows"),r=parseInt(e.getAttribute("data-start"),10)||1,s=r+(n.children.length-1);t<r&&(t=r),s<t&&(t=s);var i=t-r;return n.children[i]}}}}}();
!function(){if("undefined"!=typeof self&&self.Prism&&self.document){var u=/(?:^|\s)command-line(?:\s|$)/;Prism.hooks.add("before-highlight",function(e){var t=e.vars=e.vars||{},a=t["command-line"]=t["command-line"]||{};if(!a.complete&&e.code){var n=e.element.parentNode;if(n&&/pre/i.test(n.nodeName)&&(u.test(n.className)||u.test(e.element.className)))if(e.element.querySelector(".command-line-prompt"))a.complete=!0;else{var r=e.code.split("\n");a.numberOfLines=r.length;var s=a.outputLines=[],o=n.getAttribute("data-output"),i=n.getAttribute("data-filter-output");if(o||""===o){o=o.split(",");for(var l=0;l<o.length;l++){var m=o[l].split("-"),p=parseInt(m[0],10),d=2===m.length?parseInt(m[1],10):p;if(!isNaN(p)&&!isNaN(d)){p<1&&(p=1),d>r.length&&(d=r.length),d--;for(var c=--p;c<=d;c++)s[c]=r[c],r[c]=""}}}else if(i)for(l=0;l<r.length;l++)0===r[l].indexOf(i)&&(s[l]=r[l].slice(i.length),r[l]="");e.code=r.join("\n")}else a.complete=!0}else a.complete=!0}),Prism.hooks.add("before-insert",function(e){var t=e.vars=e.vars||{},a=t["command-line"]=t["command-line"]||{};if(!a.complete){for(var n=e.highlightedCode.split("\n"),r=0,s=(a.outputLines||[]).length;r<s;r++)a.outputLines.hasOwnProperty(r)&&(n[r]=a.outputLines[r]);e.highlightedCode=n.join("\n")}}),Prism.hooks.add("complete",function(e){var t=e.vars=e.vars||{},a=t["command-line"]=t["command-line"]||{};if(!a.complete){var n=e.element.parentNode;u.test(e.element.className)&&(e.element.className=e.element.className.replace(u," ")),u.test(n.className)||(n.className+=" command-line");var r=function(e,t){return(n.getAttribute(e)||t).replace(/"/g,"&quot")},s=new Array((a.numberOfLines||0)+1),o=r("data-prompt","");if(""!==o)s=s.join('<span data-prompt="'+o+'"></span>');else{var i=r("data-user","user"),l=r("data-host","localhost");s=s.join('<span data-user="'+i+'" data-host="'+l+'"></span>')}var m=document.createElement("span");m.className="command-line-prompt",m.innerHTML=s;for(var p=0,d=(a.outputLines||[]).length;p<d;p++)if(a.outputLines.hasOwnProperty(p)){var c=m.children[p];c.removeAttribute("data-user"),c.removeAttribute("data-host"),c.removeAttribute("data-prompt")}e.element.insertBefore(m,e.element.firstChild),a.complete=!0}})}}();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/blender_lernapp/blender_lernapp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map