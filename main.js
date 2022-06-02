(self["webpackChunkMaster_Project"] = self["webpackChunkMaster_Project"] || []).push([["main"],{

/***/ 6698:
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": function() { return /* binding */ AboutComponent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _about_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.component.html?ngResource */ 5133);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






var AboutComponent = /*#__PURE__*/function () {
  function AboutComponent() {
    (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AboutComponent);

    this.about = false;
  }

  (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AboutComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "aboutFunc",
    value: function aboutFunc() {
      this.about = true;
      return this.about;
    }
  }, {
    key: "hideAbout",
    value: function hideAbout() {
      this.about = false;
      return this.about;
    }
  }]);

  return AboutComponent;
}();

AboutComponent.ctorParameters = function () {
  return [];
};

AboutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-about',
  template: _about_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [])], AboutComponent);


/***/ }),

/***/ 6216:
/*!************************************************************************************!*\
  !*** ./src/app/animation-chapter-overview/animation-chapter-overview.component.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimationChapterOverviewComponent": function() { return /* binding */ AnimationChapterOverviewComponent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _animation_chapter_overview_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animation-chapter-overview.component.html?ngResource */ 3533);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






var AnimationChapterOverviewComponent = /*#__PURE__*/function () {
  function AnimationChapterOverviewComponent() {
    (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AnimationChapterOverviewComponent);
  }

  (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AnimationChapterOverviewComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return AnimationChapterOverviewComponent;
}();

AnimationChapterOverviewComponent.ctorParameters = function () {
  return [];
};

AnimationChapterOverviewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-animation-chapter-overview',
  template: _animation_chapter_overview_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [])], AnimationChapterOverviewComponent);


/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome/welcome.component */ 3537);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ 6698);
/* harmony import */ var _setup_required_tools_setup_required_tools_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setup-required-tools/setup-required-tools.component */ 5711);
/* harmony import */ var _setup_about_elearning_setup_about_elearning_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./setup-about-elearning/setup-about-elearning.component */ 5145);
/* harmony import */ var _basics_blender_ui_basics_blender_ui_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./basics-blender-ui/basics-blender-ui.component */ 2486);
/* harmony import */ var _basics_tools_basics_tools_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./basics-tools/basics-tools.component */ 4978);
/* harmony import */ var _theory_coordinate_system_theory_coordinate_system_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./theory-coordinate-system/theory-coordinate-system.component */ 6869);
/* harmony import */ var _basics_modifiers_basics_modifiers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./basics-modifiers/basics-modifiers.component */ 6341);
/* harmony import */ var _modelling_chapter_overview_modelling_chapter_overview_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modelling-chapter-overview/modelling-chapter-overview.component */ 8526);
/* harmony import */ var _modelling_wall_e_body_modelling_wall_e_body_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modelling-wall-e-body/modelling-wall-e-body.component */ 9309);
/* harmony import */ var _modelling_wall_e_wheels_modelling_wall_e_wheels_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modelling-wall-e-wheels/modelling-wall-e-wheels.component */ 3082);
/* harmony import */ var _modelling_wall_e_head_modelling_wall_e_head_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modelling-wall-e-head/modelling-wall-e-head.component */ 5093);
/* harmony import */ var _modelling_wall_e_arms_modelling_wall_e_arms_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modelling-wall-e-arms/modelling-wall-e-arms.component */ 4106);
/* harmony import */ var _modelling_plant_modelling_plant_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modelling-plant/modelling-plant.component */ 9466);
/* harmony import */ var _animation_chapter_overview_animation_chapter_overview_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./animation-chapter-overview/animation-chapter-overview.component */ 6216);
/* harmony import */ var _rigging_and_animation_rigging_and_animation_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./rigging-and-animation/rigging-and-animation.component */ 9533);
/* harmony import */ var _coloring_and_rendering_coloring_and_rendering_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./coloring-and-rendering/coloring-and-rendering.component */ 963);
/* harmony import */ var _theory_curves_theory_curves_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./theory-curves/theory-curves.component */ 6267);
/* harmony import */ var _theory_modifiers_theory_modifiers_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./theory-modifiers/theory-modifiers.component */ 4260);
/* harmony import */ var _theory_materials_and_textures_theory_materials_and_textures_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./theory-materials-and-textures/theory-materials-and-textures.component */ 4652);
/* harmony import */ var _theory_rigging_theory_rigging_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./theory-rigging/theory-rigging.component */ 5276);
/* harmony import */ var _conclusion_conclusion_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./conclusion/conclusion.component */ 8312);



























var routes = [{
  path: '',
  redirectTo: '/welcome',
  pathMatch: 'full'
}, {
  path: 'welcome',
  component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__.WelcomeComponent
}, {
  path: 'about',
  component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__.AboutComponent
}, {
  path: 'required-tools',
  component: _setup_required_tools_setup_required_tools_component__WEBPACK_IMPORTED_MODULE_4__.RequiredToolsComponent
}, {
  path: 'about-elearning',
  component: _setup_about_elearning_setup_about_elearning_component__WEBPACK_IMPORTED_MODULE_5__.AboutElearningComponent
}, {
  path: 'blender-ui',
  component: _basics_blender_ui_basics_blender_ui_component__WEBPACK_IMPORTED_MODULE_6__.BlenderUiComponent
}, {
  path: 'basic-tools',
  component: _basics_tools_basics_tools_component__WEBPACK_IMPORTED_MODULE_7__.BasicToolsComponent
}, {
  path: 'basic-modifiers',
  component: _basics_modifiers_basics_modifiers_component__WEBPACK_IMPORTED_MODULE_9__.BasicModifiersComponent
}, {
  path: 'modelling-chapter-overview',
  component: _modelling_chapter_overview_modelling_chapter_overview_component__WEBPACK_IMPORTED_MODULE_10__.ModellingChapterOverviewComponent
}, {
  path: 'model-body',
  component: _modelling_wall_e_body_modelling_wall_e_body_component__WEBPACK_IMPORTED_MODULE_11__.ModelBodyComponent
}, {
  path: 'model-wheels',
  component: _modelling_wall_e_wheels_modelling_wall_e_wheels_component__WEBPACK_IMPORTED_MODULE_12__.ModelWheelsComponent
}, {
  path: 'model-head',
  component: _modelling_wall_e_head_modelling_wall_e_head_component__WEBPACK_IMPORTED_MODULE_13__.ModelHeadComponent
}, {
  path: 'model-arms',
  component: _modelling_wall_e_arms_modelling_wall_e_arms_component__WEBPACK_IMPORTED_MODULE_14__.ModelArmsComponent
}, {
  path: 'model-plant',
  component: _modelling_plant_modelling_plant_component__WEBPACK_IMPORTED_MODULE_15__.ModelPlantComponent
}, {
  path: 'coloring-and-rendering',
  component: _coloring_and_rendering_coloring_and_rendering_component__WEBPACK_IMPORTED_MODULE_18__.ColoringComponent
}, {
  path: 'animation-chapter-overview',
  component: _animation_chapter_overview_animation_chapter_overview_component__WEBPACK_IMPORTED_MODULE_16__.AnimationChapterOverviewComponent
}, {
  path: 'rigging-and-animation',
  component: _rigging_and_animation_rigging_and_animation_component__WEBPACK_IMPORTED_MODULE_17__.AnimationComponent
}, {
  path: 'theory-coordinate-system',
  component: _theory_coordinate_system_theory_coordinate_system_component__WEBPACK_IMPORTED_MODULE_8__.TheoryCoordinateSystemComponent
}, {
  path: 'theory-curves',
  component: _theory_curves_theory_curves_component__WEBPACK_IMPORTED_MODULE_19__.TheoryCurvesComponent
}, {
  path: 'theory-mat-tex',
  component: _theory_materials_and_textures_theory_materials_and_textures_component__WEBPACK_IMPORTED_MODULE_21__.TheoryMaterialsAndTexturesComponent
}, {
  path: 'theory-modifiers',
  component: _theory_modifiers_theory_modifiers_component__WEBPACK_IMPORTED_MODULE_20__.TheoryModifiersComponent
}, {
  path: 'theory-rigging',
  component: _theory_rigging_theory_rigging_component__WEBPACK_IMPORTED_MODULE_22__.TheoryRiggingComponent
}, {
  path: 'conclusion',
  component: _conclusion_conclusion_component__WEBPACK_IMPORTED_MODULE_23__.ConclusionComponent
}];

var AppRoutingModule = /*#__PURE__*/(0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AppRoutingModule() {
  (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppRoutingModule);
});

AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_24__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_25__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_26__.RouterModule.forRoot(routes, {
    onSameUrlNavigation: "reload"
  })],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_26__.RouterModule]
})], AppRoutingModule);


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js */ 5106);
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _prism_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../prism.js */ 1154);
/* harmony import */ var _prism_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_prism_js__WEBPACK_IMPORTED_MODULE_4__);










var AppComponent = /*#__PURE__*/function () {
  function AppComponent(router, location, elementRef) {
    (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppComponent);

    this.router = router;
    this.location = location;
    this.elementRef = elementRef;
    this.title = 'Learn modelling using Blender!';
    this.hideBackButton = false;
    this.hideNextButton = false;
    this.routerLinks = ["/welcome", "/required-tools", "/about-elearning", "/blender-ui", "/basic-tools", "/basic-modifiers", "/modelling-chapter-overview", "/model-body", "/model-wheels", "/model-head", "/model-arms", "/model-plant", "/coloring-and-rendering", "/animation-chapter-overview", "/rigging-and-animation", "/theory-coordinate-system", "/theory-curves", "/theory-mat-tex", "/theory-modifiers", "/theory-rigging", "/conclusion"];
  }

  (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(AppComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      _prism_js__WEBPACK_IMPORTED_MODULE_4__.manual = true;
    }
  }, {
    key: "onActivate",
    value: function onActivate() {
      window.scroll(0, 0);
    }
  }, {
    key: "getHideNextButton",
    value: function getHideNextButton() {
      this.routerLink = this.router.url;

      if (this.routerLink === this.routerLinks[0] || this.routerLink === this.routerLinks[this.routerLinks.length - 1]) {
        this.hideNextButton = true;
      } else this.hideNextButton = false;

      return this.hideNextButton;
    }
  }, {
    key: "getHideBackButton",
    value: function getHideBackButton() {
      this.routerLink = this.router.url;

      if (this.routerLink === this.routerLinks[0]) {
        this.hideBackButton = true;
      } else this.hideBackButton = false;

      return this.hideBackButton;
    }
  }, {
    key: "getNext",
    value: function getNext() {
      this.routerLink = this.router.url;
      var counter = -1;

      var _iterator = (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this.routerLinks),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var r = _step.value;
          counter++;

          if (this.routerLink === r) {
            this.routerLink = this.routerLinks[counter + 1];
            break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return this.routerLink;
    }
  }, {
    key: "getLast",
    value: function getLast() {
      this.routerLink = this.router.url;
      var counter = -1;

      var _iterator2 = (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this.routerLinks),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var r = _step2.value;
          counter++;

          if (this.routerLink === r) {
            this.routerLink = this.routerLinks[counter - 1];
            break;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return this.routerLink;
    }
  }, {
    key: "myFunc",
    value: function myFunc() {
      var d1 = this.elementRef.nativeElement.querySelector('#menu');

      if (d1.classList.contains('hidden')) {
        d1.classList.remove('hidden');
      } else {
        d1.classList.add('hidden');
      }
    }
  }]);

  return AppComponent;
}();

AppComponent.ctorParameters = function () {
  return [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef
  }];
};

AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_3__
}), (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router, _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location, _angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef])], AppComponent);


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./welcome/welcome.component */ 3537);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/progress-bar */ 833);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ 6698);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _basic_video_component_basic_video_component_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./basic-video-component/basic-video-component.component */ 6791);
/* harmony import */ var _xml_video_component_xml_video_component_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./xml-video-component/xml-video-component.component */ 1660);
/* harmony import */ var _quiz_component_quiz_component_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quiz-component/quiz-component.component */ 3569);
/* harmony import */ var _collapse_component_collapse_component_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./collapse-component/collapse-component.component */ 7231);
/* harmony import */ var _setup_required_tools_setup_required_tools_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./setup-required-tools/setup-required-tools.component */ 5711);
/* harmony import */ var _setup_about_elearning_setup_about_elearning_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./setup-about-elearning/setup-about-elearning.component */ 5145);
/* harmony import */ var _basics_blender_ui_basics_blender_ui_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./basics-blender-ui/basics-blender-ui.component */ 2486);
/* harmony import */ var _basics_tools_basics_tools_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./basics-tools/basics-tools.component */ 4978);
/* harmony import */ var _theory_coordinate_system_theory_coordinate_system_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./theory-coordinate-system/theory-coordinate-system.component */ 6869);
/* harmony import */ var _basics_modifiers_basics_modifiers_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./basics-modifiers/basics-modifiers.component */ 6341);
/* harmony import */ var _animation_chapter_overview_animation_chapter_overview_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./animation-chapter-overview/animation-chapter-overview.component */ 6216);
/* harmony import */ var _rigging_and_animation_rigging_and_animation_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./rigging-and-animation/rigging-and-animation.component */ 9533);
/* harmony import */ var _modelling_chapter_overview_modelling_chapter_overview_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modelling-chapter-overview/modelling-chapter-overview.component */ 8526);
/* harmony import */ var _modelling_wall_e_body_modelling_wall_e_body_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modelling-wall-e-body/modelling-wall-e-body.component */ 9309);
/* harmony import */ var _modelling_wall_e_wheels_modelling_wall_e_wheels_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modelling-wall-e-wheels/modelling-wall-e-wheels.component */ 3082);
/* harmony import */ var _modelling_wall_e_head_modelling_wall_e_head_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modelling-wall-e-head/modelling-wall-e-head.component */ 5093);
/* harmony import */ var _modelling_wall_e_arms_modelling_wall_e_arms_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modelling-wall-e-arms/modelling-wall-e-arms.component */ 4106);
/* harmony import */ var _modelling_plant_modelling_plant_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modelling-plant/modelling-plant.component */ 9466);
/* harmony import */ var _theory_rigging_theory_rigging_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./theory-rigging/theory-rigging.component */ 5276);
/* harmony import */ var _theory_materials_and_textures_theory_materials_and_textures_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./theory-materials-and-textures/theory-materials-and-textures.component */ 4652);
/* harmony import */ var _theory_modifiers_theory_modifiers_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./theory-modifiers/theory-modifiers.component */ 4260);
/* harmony import */ var _theory_curves_theory_curves_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./theory-curves/theory-curves.component */ 6267);
/* harmony import */ var _coloring_and_rendering_coloring_and_rendering_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./coloring-and-rendering/coloring-and-rendering.component */ 963);
/* harmony import */ var _conclusion_conclusion_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./conclusion/conclusion.component */ 8312);







































var AppModule = /*#__PURE__*/(0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AppModule() {
  (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppModule);
});

AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_30__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_31__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent, _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__.WelcomeComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_5__.AboutComponent, _basic_video_component_basic_video_component_component__WEBPACK_IMPORTED_MODULE_6__.BasicVideoComponentComponent, _xml_video_component_xml_video_component_component__WEBPACK_IMPORTED_MODULE_7__.XmlVideoComponentComponent, _quiz_component_quiz_component_component__WEBPACK_IMPORTED_MODULE_8__.QuizComponent, _collapse_component_collapse_component_component__WEBPACK_IMPORTED_MODULE_9__.CollapseComponent, _setup_required_tools_setup_required_tools_component__WEBPACK_IMPORTED_MODULE_10__.RequiredToolsComponent, _setup_about_elearning_setup_about_elearning_component__WEBPACK_IMPORTED_MODULE_11__.AboutElearningComponent, _basics_blender_ui_basics_blender_ui_component__WEBPACK_IMPORTED_MODULE_12__.BlenderUiComponent, _basics_tools_basics_tools_component__WEBPACK_IMPORTED_MODULE_13__.BasicToolsComponent, _theory_coordinate_system_theory_coordinate_system_component__WEBPACK_IMPORTED_MODULE_14__.TheoryCoordinateSystemComponent, _basics_modifiers_basics_modifiers_component__WEBPACK_IMPORTED_MODULE_15__.BasicModifiersComponent, _animation_chapter_overview_animation_chapter_overview_component__WEBPACK_IMPORTED_MODULE_16__.AnimationChapterOverviewComponent, _rigging_and_animation_rigging_and_animation_component__WEBPACK_IMPORTED_MODULE_17__.AnimationComponent, _modelling_chapter_overview_modelling_chapter_overview_component__WEBPACK_IMPORTED_MODULE_18__.ModellingChapterOverviewComponent, _modelling_wall_e_body_modelling_wall_e_body_component__WEBPACK_IMPORTED_MODULE_19__.ModelBodyComponent, _modelling_wall_e_wheels_modelling_wall_e_wheels_component__WEBPACK_IMPORTED_MODULE_20__.ModelWheelsComponent, _modelling_wall_e_head_modelling_wall_e_head_component__WEBPACK_IMPORTED_MODULE_21__.ModelHeadComponent, _modelling_wall_e_arms_modelling_wall_e_arms_component__WEBPACK_IMPORTED_MODULE_22__.ModelArmsComponent, _modelling_plant_modelling_plant_component__WEBPACK_IMPORTED_MODULE_23__.ModelPlantComponent, _theory_rigging_theory_rigging_component__WEBPACK_IMPORTED_MODULE_24__.TheoryRiggingComponent, _theory_materials_and_textures_theory_materials_and_textures_component__WEBPACK_IMPORTED_MODULE_25__.TheoryMaterialsAndTexturesComponent, _theory_modifiers_theory_modifiers_component__WEBPACK_IMPORTED_MODULE_26__.TheoryModifiersComponent, _theory_curves_theory_curves_component__WEBPACK_IMPORTED_MODULE_27__.TheoryCurvesComponent, _coloring_and_rendering_coloring_and_rendering_component__WEBPACK_IMPORTED_MODULE_28__.ColoringComponent, _conclusion_conclusion_component__WEBPACK_IMPORTED_MODULE_29__.ConclusionComponent],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_32__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_33__.FormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_34__.BrowserAnimationsModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_35__.MatProgressBarModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_36__.NgbModule],
  providers: [{
    provide: _angular_common__WEBPACK_IMPORTED_MODULE_37__.APP_BASE_HREF,
    useValue: '/'
  }, {
    provide: _angular_common__WEBPACK_IMPORTED_MODULE_37__.LocationStrategy,
    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_37__.HashLocationStrategy
  }],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent]
})], AppModule);


/***/ }),

/***/ 6791:
/*!**************************************************************************!*\
  !*** ./src/app/basic-video-component/basic-video-component.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicVideoComponentComponent": function() { return /* binding */ BasicVideoComponentComponent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _basic_video_component_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic-video-component.component.html?ngResource */ 866);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






var BasicVideoComponentComponent = /*#__PURE__*/function () {
  function BasicVideoComponentComponent() {
    (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BasicVideoComponentComponent);
  }

  (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(BasicVideoComponentComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      /* this path currently loads from a server hosted by the minf group, change this to local path for development */
      this.video_assets_folder = "http://www.minf.uni-bamberg.de/recordings/ss2022/Blender/";
      this.videopath = this.video_assets_folder + this.videoname;
    }
  }]);

  return BasicVideoComponentComponent;
}();

BasicVideoComponentComponent.ctorParameters = function () {
  return [];
};

BasicVideoComponentComponent.propDecorators = {
  videoname: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }]
};
BasicVideoComponentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-basic-video-component',
  template: _basic_video_component_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
})
/**
 * the basic video component is used with a videoname as input string. The video itself is then loaded from
 * a path specified below in the ngOnInit() function. Use the full video name with file extension, i.e. demo.mp4.
 */
, (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [])], BasicVideoComponentComponent);


/***/ }),

/***/ 2486:
/*!******************************************************************!*\
  !*** ./src/app/basics-blender-ui/basics-blender-ui.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlenderUiComponent": function() { return /* binding */ BlenderUiComponent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _basics_blender_ui_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basics-blender-ui.component.html?ngResource */ 9954);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






var BlenderUiComponent = /*#__PURE__*/function () {
  function BlenderUiComponent() {
    (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BlenderUiComponent);
  }

  (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(BlenderUiComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return BlenderUiComponent;
}();

BlenderUiComponent.ctorParameters = function () {
  return [];
};

BlenderUiComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-basics-blender-ui',
  template: _basics_blender_ui_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [])], BlenderUiComponent);


/***/ }),

/***/ 6341:
/*!****************************************************************!*\
  !*** ./src/app/basics-modifiers/basics-modifiers.component.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicModifiersComponent": function() { return /* binding */ BasicModifiersComponent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _basics_modifiers_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basics-modifiers.component.html?ngResource */ 7156);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






var BasicModifiersComponent = /*#__PURE__*/function () {
  function BasicModifiersComponent() {
    (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BasicModifiersComponent);
  }

  (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(BasicModifiersComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return BasicModifiersComponent;
}();

BasicModifiersComponent.ctorParameters = function () {
  return [];
};

BasicModifiersComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-basics-modifiers',
  template: _basics_modifiers_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [])], BasicModifiersComponent);


/***/ }),

/***/ 4978:
/*!********************************************************!*\
  !*** ./src/app/basics-tools/basics-tools.component.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicToolsComponent": function() { return /* binding */ BasicToolsComponent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _basics_tools_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basics-tools.component.html?ngResource */ 226);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






var BasicToolsComponent = /*#__PURE__*/function () {
  function BasicToolsComponent() {
    (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BasicToolsComponent);
  }

  (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(BasicToolsComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return BasicToolsComponent;
}();

BasicToolsComponent.ctorParameters = function () {
  return [];
};

BasicToolsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-basics-tools',
  template: _basics_tools_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [])], BasicToolsComponent);


/***/ }),

/***/ 7231:
/*!********************************************************************!*\
  !*** ./src/app/collapse-component/collapse-component.component.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollapseComponent": function() { return /* binding */ CollapseComponent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _collapse_component_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collapse-component.component.html?ngResource */ 2329);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






var CollapseComponent = /*#__PURE__*/function () {
  function CollapseComponent(elementRef) {
    (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CollapseComponent);

    this.elementRef = elementRef;
    this.isHidden = true;
  }

  (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(CollapseComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.buildCollapsable();
    }
  }, {
    key: "buildCollapsable",
    value: function buildCollapsable() {
      var button = this.elementRef.nativeElement.querySelector('.collapsible');
      button.innerHTML = this.message;
    }
  }, {
    key: "toggle",
    value: function toggle() {
      this.isHidden = !this.isHidden;
    }
  }]);

  return CollapseComponent;
}();

CollapseComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
  }];
};

CollapseComponent.propDecorators = {
  message: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  qId: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }]
};
CollapseComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-collapse-component',
  template: _collapse_component_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
})
/*
  The quiz component takes multiple input parameters to create a question that can be answered and will then be
  evaluated.

  @param question: the question
  @param correctAnswer: the correct answer
  @param answers[]: all possible answers that should be displayed containing the correct one
  @param qId: an ID to be able to find the question and evaluate
*/
, (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef])], CollapseComponent);


/***/ }),

/***/ 963:
/*!****************************************************************************!*\
  !*** ./src/app/coloring-and-rendering/coloring-and-rendering.component.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColoringComponent": function() { return /* binding */ ColoringComponent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _coloring_and_rendering_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coloring-and-rendering.component.html?ngResource */ 9723);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






var ColoringComponent = /*#__PURE__*/function () {
  function ColoringComponent() {
    (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ColoringComponent);
  }

  (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ColoringComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return ColoringComponent;
}();

ColoringComponent.ctorParameters = function () {
  return [];
};

ColoringComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-coloring-and-rendering',
  template: _coloring_and_rendering_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [])], ColoringComponent);


/***/ }),

/***/ 8312:
/*!****************************************************!*\
  !*** ./src/app/conclusion/conclusion.component.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConclusionComponent": function() { return /* binding */ ConclusionComponent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _conclusion_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./conclusion.component.html?ngResource */ 5947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






var ConclusionComponent = /*#__PURE__*/function () {
  function ConclusionComponent() {
    (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ConclusionComponent);
  }

  (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ConclusionComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return ConclusionComponent;
}();

ConclusionComponent.ctorParameters = function () {
  return [];
};

ConclusionComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-conclusion',
  template: _conclusion_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [])], ConclusionComponent);


/***/ }),

/***/ 8526:
/*!************************************************************************************!*\
  !*** ./src/app/modelling-chapter-overview/modelling-chapter-overview.component.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModellingChapterOverviewComponent": function() { return /* binding */ ModellingChapterOverviewComponent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _modelling_chapter_overview_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modelling-chapter-overview.component.html?ngResource */ 8757);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






var ModellingChapterOverviewComponent = /*#__PURE__*/function () {
  function ModellingChapterOverviewComponent() {
    (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ModellingChapterOverviewComponent);
  }

  (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ModellingChapterOverviewComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return ModellingChapterOverviewComponent;
}();

ModellingChapterOverviewComponent.ctorParameters = function () {
  return [];
};

ModellingChapterOverviewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-modelling-chapter-overview',
  template: _modelling_chapter_overview_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [])], ModellingChapterOverviewComponent);


/***/ }),

/***/ 9466:
/*!**************************************************************!*\
  !*** ./src/app/modelling-plant/modelling-plant.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModelPlantComponent": function() { return /* binding */ ModelPlantComponent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _modelling_plant_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modelling-plant.component.html?ngResource */ 6504);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






var ModelPlantComponent = /*#__PURE__*/function () {
  function ModelPlantComponent() {
    (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ModelPlantComponent);
  }

  (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ModelPlantComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return ModelPlantComponent;
}();

ModelPlantComponent.ctorParameters = function () {
  return [];
};

ModelPlantComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-modelling-plant',
  template: _modelling_plant_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [])], ModelPlantComponent);


/***/ }),

/***/ 4106:
/*!**************************************************************************!*\
  !*** ./src/app/modelling-wall-e-arms/modelling-wall-e-arms.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModelArmsComponent": function() { return /* binding */ ModelArmsComponent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _modelling_wall_e_arms_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modelling-wall-e-arms.component.html?ngResource */ 2528);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






var ModelArmsComponent = /*#__PURE__*/function () {
  function ModelArmsComponent() {
    (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ModelArmsComponent);
  }

  (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ModelArmsComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return ModelArmsComponent;
}();

ModelArmsComponent.ctorParameters = function () {
  return [];
};

ModelArmsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-modelling-wall-e-arms',
  template: _modelling_wall_e_arms_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [])], ModelArmsComponent);


/***/ }),

/***/ 9309:
/*!**************************************************************************!*\
  !*** ./src/app/modelling-wall-e-body/modelling-wall-e-body.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModelBodyComponent": function() { return /* binding */ ModelBodyComponent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _modelling_wall_e_body_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modelling-wall-e-body.component.html?ngResource */ 39);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






var ModelBodyComponent = /*#__PURE__*/function () {
  function ModelBodyComponent() {
    (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ModelBodyComponent);
  }

  (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ModelBodyComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return ModelBodyComponent;
}();

ModelBodyComponent.ctorParameters = function () {
  return [];
};

ModelBodyComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-modelling-wall-e-body',
  template: _modelling_wall_e_body_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [])], ModelBodyComponent);


/***/ }),

/***/ 5093:
/*!**************************************************************************!*\
  !*** ./src/app/modelling-wall-e-head/modelling-wall-e-head.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModelHeadComponent": function() { return /* binding */ ModelHeadComponent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _modelling_wall_e_head_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modelling-wall-e-head.component.html?ngResource */ 2033);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






var ModelHeadComponent = /*#__PURE__*/function () {
  function ModelHeadComponent() {
    (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ModelHeadComponent);
  }

  (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ModelHeadComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return ModelHeadComponent;
}();

ModelHeadComponent.ctorParameters = function () {
  return [];
};

ModelHeadComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-modelling-wall-e-head',
  template: _modelling_wall_e_head_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [])], ModelHeadComponent);


/***/ }),

/***/ 3082:
/*!******************************************************************************!*\
  !*** ./src/app/modelling-wall-e-wheels/modelling-wall-e-wheels.component.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModelWheelsComponent": function() { return /* binding */ ModelWheelsComponent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _modelling_wall_e_wheels_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modelling-wall-e-wheels.component.html?ngResource */ 3281);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






var ModelWheelsComponent = /*#__PURE__*/function () {
  function ModelWheelsComponent() {
    (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ModelWheelsComponent);
  }

  (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ModelWheelsComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return ModelWheelsComponent;
}();

ModelWheelsComponent.ctorParameters = function () {
  return [];
};

ModelWheelsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-modelling-wall-e-wheels',
  template: _modelling_wall_e_wheels_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [])], ModelWheelsComponent);


/***/ }),

/***/ 3569:
/*!************************************************************!*\
  !*** ./src/app/quiz-component/quiz-component.component.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuizComponent": function() { return /* binding */ QuizComponent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js */ 5106);
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _quiz_component_component_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quiz-component.component.html?ngResource */ 6410);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







var QuizComponent = /*#__PURE__*/function () {
  function QuizComponent(elementRef) {
    (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, QuizComponent);

    this.elementRef = elementRef;
  }

  (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(QuizComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.buildQuiz();
    }
  }, {
    key: "buildQuiz",
    value: function buildQuiz() {
      var finalHtml = '';
      finalHtml = finalHtml + '<p class="question">' + this.question + '</p>';
      finalHtml = finalHtml + '<div class="answers">';

      var _iterator = (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this.answers),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var answer = _step.value;
          var htmlAnswer = '<label>' + '<input type="radio" name="' + this.qId + '"' + 'value="' + answer + '">' + '<p>' + answer + '</p>' + '</input>' + '</label>';
          finalHtml = finalHtml + htmlAnswer;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      finalHtml = finalHtml + '</div>';
      var d1 = this.elementRef.nativeElement.querySelector('.quiz');
      d1.innerHTML = finalHtml;
    }
  }, {
    key: "checkAnswers",
    value: function checkAnswers() {
      console.log('checking answers'); //validate it

      var qSelector = 'input[name="' + this.qId + '"]:checked';
      var checkedAnswer = this.elementRef.nativeElement.querySelector(qSelector);
      var value = checkedAnswer.getAttribute('value');
      console.log(checkedAnswer);
      console.log(value);
      var result = '';

      if (value == this.correctAnswer) {
        result = 'You answered correctly! Please continue to the next section.';
      } else {
        result = 'Answer was incorrect. It is recommend you redo this section.';
      }

      var d1 = this.elementRef.nativeElement.querySelector('.result');
      var resultsHtml = '';
      resultsHtml = resultsHtml + '<p class="result">' + result + '</p>';
      d1.innerHTML = resultsHtml;
    }
  }]);

  return QuizComponent;
}();

QuizComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef
  }];
};

QuizComponent.propDecorators = {
  question: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }],
  correctAnswer: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }],
  answers: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }],
  qId: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }]
};
QuizComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-quiz-component',
  template: _quiz_component_component_html_ngResource__WEBPACK_IMPORTED_MODULE_3__
})
/*
  The quiz component takes multiple input parameters to create a question that can be answered and will then be
  evaluated.

  @param question: the question
  @param correctAnswer: the correct answer
  @param answers[]: all possible answers that should be displayed containing the correct one
  @param qId: an ID to be able to find the question and evaluate
*/
, (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef])], QuizComponent);


/***/ }),

/***/ 9533:
/*!**************************************************************************!*\
  !*** ./src/app/rigging-and-animation/rigging-and-animation.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimationComponent": function() { return /* binding */ AnimationComponent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _rigging_and_animation_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rigging-and-animation.component.html?ngResource */ 9972);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






var AnimationComponent = /*#__PURE__*/function () {
  function AnimationComponent() {
    (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AnimationComponent);
  }

  (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AnimationComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return AnimationComponent;
}();

AnimationComponent.ctorParameters = function () {
  return [];
};

AnimationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-rigging-and-animation',
  template: _rigging_and_animation_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [])], AnimationComponent);


/***/ }),

/***/ 5145:
/*!**************************************************************************!*\
  !*** ./src/app/setup-about-elearning/setup-about-elearning.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutElearningComponent": function() { return /* binding */ AboutElearningComponent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _setup_about_elearning_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setup-about-elearning.component.html?ngResource */ 250);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






var AboutElearningComponent = /*#__PURE__*/function () {
  function AboutElearningComponent() {
    (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AboutElearningComponent);
  }

  (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AboutElearningComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return AboutElearningComponent;
}();

AboutElearningComponent.ctorParameters = function () {
  return [];
};

AboutElearningComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-setup-about-elearning',
  template: _setup_about_elearning_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [])], AboutElearningComponent);


/***/ }),

/***/ 5711:
/*!************************************************************************!*\
  !*** ./src/app/setup-required-tools/setup-required-tools.component.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequiredToolsComponent": function() { return /* binding */ RequiredToolsComponent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _setup_required_tools_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setup-required-tools.component.html?ngResource */ 7633);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






var RequiredToolsComponent = /*#__PURE__*/function () {
  function RequiredToolsComponent() {
    (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, RequiredToolsComponent);
  }

  (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(RequiredToolsComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return RequiredToolsComponent;
}();

RequiredToolsComponent.ctorParameters = function () {
  return [];
};

RequiredToolsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-setup-required-tools',
  template: _setup_required_tools_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [])], RequiredToolsComponent);


/***/ }),

/***/ 6016:
/*!*************************************!*\
  !*** ./src/app/shared/keystroke.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Keystroke": function() { return /* binding */ Keystroke; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);


var Keystroke = /*#__PURE__*/(0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function Keystroke(time, key, info) {
  (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Keystroke);

  this.time = time;
  this.key = key;
  this.info = info;
});

/***/ }),

/***/ 6869:
/*!********************************************************************************!*\
  !*** ./src/app/theory-coordinate-system/theory-coordinate-system.component.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TheoryCoordinateSystemComponent": function() { return /* binding */ TheoryCoordinateSystemComponent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _theory_coordinate_system_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theory-coordinate-system.component.html?ngResource */ 1057);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






var TheoryCoordinateSystemComponent = /*#__PURE__*/function () {
  function TheoryCoordinateSystemComponent() {
    (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TheoryCoordinateSystemComponent);
  }

  (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(TheoryCoordinateSystemComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return TheoryCoordinateSystemComponent;
}();

TheoryCoordinateSystemComponent.ctorParameters = function () {
  return [];
};

TheoryCoordinateSystemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-theory-coordinate-system',
  template: _theory_coordinate_system_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [])], TheoryCoordinateSystemComponent);


/***/ }),

/***/ 6267:
/*!**********************************************************!*\
  !*** ./src/app/theory-curves/theory-curves.component.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TheoryCurvesComponent": function() { return /* binding */ TheoryCurvesComponent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _theory_curves_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theory-curves.component.html?ngResource */ 3872);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






var TheoryCurvesComponent = /*#__PURE__*/function () {
  function TheoryCurvesComponent() {
    (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TheoryCurvesComponent);
  }

  (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(TheoryCurvesComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return TheoryCurvesComponent;
}();

TheoryCurvesComponent.ctorParameters = function () {
  return [];
};

TheoryCurvesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-theory-curves',
  template: _theory_curves_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [])], TheoryCurvesComponent);


/***/ }),

/***/ 4652:
/*!******************************************************************************************!*\
  !*** ./src/app/theory-materials-and-textures/theory-materials-and-textures.component.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TheoryMaterialsAndTexturesComponent": function() { return /* binding */ TheoryMaterialsAndTexturesComponent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _theory_materials_and_textures_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theory-materials-and-textures.component.html?ngResource */ 8061);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






var TheoryMaterialsAndTexturesComponent = /*#__PURE__*/function () {
  function TheoryMaterialsAndTexturesComponent() {
    (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TheoryMaterialsAndTexturesComponent);
  }

  (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(TheoryMaterialsAndTexturesComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return TheoryMaterialsAndTexturesComponent;
}();

TheoryMaterialsAndTexturesComponent.ctorParameters = function () {
  return [];
};

TheoryMaterialsAndTexturesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-theory-materials-and-textures',
  template: _theory_materials_and_textures_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [])], TheoryMaterialsAndTexturesComponent);


/***/ }),

/***/ 4260:
/*!****************************************************************!*\
  !*** ./src/app/theory-modifiers/theory-modifiers.component.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TheoryModifiersComponent": function() { return /* binding */ TheoryModifiersComponent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _theory_modifiers_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theory-modifiers.component.html?ngResource */ 3573);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






var TheoryModifiersComponent = /*#__PURE__*/function () {
  function TheoryModifiersComponent() {
    (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TheoryModifiersComponent);
  }

  (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(TheoryModifiersComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return TheoryModifiersComponent;
}();

TheoryModifiersComponent.ctorParameters = function () {
  return [];
};

TheoryModifiersComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-theory-modifiers',
  template: _theory_modifiers_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [])], TheoryModifiersComponent);


/***/ }),

/***/ 5276:
/*!************************************************************!*\
  !*** ./src/app/theory-rigging/theory-rigging.component.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TheoryRiggingComponent": function() { return /* binding */ TheoryRiggingComponent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _theory_rigging_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theory-rigging.component.html?ngResource */ 1100);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






var TheoryRiggingComponent = /*#__PURE__*/function () {
  function TheoryRiggingComponent() {
    (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TheoryRiggingComponent);
  }

  (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(TheoryRiggingComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return TheoryRiggingComponent;
}();

TheoryRiggingComponent.ctorParameters = function () {
  return [];
};

TheoryRiggingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-theory-rigging',
  template: _theory_rigging_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [])], TheoryRiggingComponent);


/***/ }),

/***/ 3537:
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomeComponent": function() { return /* binding */ WelcomeComponent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _welcome_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome.component.html?ngResource */ 542);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






var WelcomeComponent = /*#__PURE__*/function () {
  function WelcomeComponent() {
    (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, WelcomeComponent);
  }

  (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(WelcomeComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return WelcomeComponent;
}();

WelcomeComponent.ctorParameters = function () {
  return [];
};

WelcomeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-welcome',
  template: _welcome_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [])], WelcomeComponent);


/***/ }),

/***/ 1660:
/*!**********************************************************************!*\
  !*** ./src/app/xml-video-component/xml-video-component.component.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XmlVideoComponentComponent": function() { return /* binding */ XmlVideoComponentComponent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _xml_video_component_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./xml-video-component.component.html?ngResource */ 3765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_keystroke__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/keystroke */ 6016);







var XmlVideoComponentComponent = /*#__PURE__*/function () {
  function XmlVideoComponentComponent(elementRef) {
    (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, XmlVideoComponentComponent);

    this.elementRef = elementRef;
    this.keystrokes = [];
    this.secondsOfKeystrokes = [];
    this.displayAllToggled = false;
  }

  (0,_home_runner_work_blender_lernapp_blender_lernapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(XmlVideoComponentComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      /* this is a server maintained by minf group, change to local path for development */
      this.video_assets_folder = "http://www.minf.uni-bamberg.de/recordings/ss2022/Blender/";
      this.videopath = this.video_assets_folder + this.videoname;
      /* currently set to a local path containing the xml files */

      this.xml_assets_folder = "assets/xml/";
      /* xml path is created by changing the file extension to .xml, i.e. demo.mp4 -> demo.xml.
          DEV Note: when using file extensions with more or less than 3 letters this needs adjustment!*/

      this.xmlpath = this.xml_assets_folder + this.videoname.slice(0, -3) + 'xml'; //get the xml file

      var xmlhttp = new XMLHttpRequest();
      var object = this;

      xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          object.myFunction(this);
        }
      };

      xmlhttp.open("GET", this.xmlpath, true);
      xmlhttp.send();
    }
    /* used to process the xml file once its loaded */

  }, {
    key: "myFunction",
    value: function myFunction(xml) {
      var _this = this;

      var x, i, xmlDoc;
      xmlDoc = xml.responseXML;
      x = xmlDoc.getElementsByTagName("keystroke");

      for (i = 0; i < x.length; i++) {
        var time = x[i].getElementsByTagName("time")[0].childNodes[0].nodeValue;
        var key = x[i].getElementsByTagName("key")[0].childNodes[0].nodeValue;
        var info = x[i].getElementsByTagName("info")[0].childNodes[0].nodeValue;
        this.keystrokes.push(new _shared_keystroke__WEBPACK_IMPORTED_MODULE_3__.Keystroke(time, key, info));
        this.secondsOfKeystrokes.push(time);
      } //update every second


      setInterval(function () {
        _this.update();
      }, 1000);
    }
  }, {
    key: "update",
    value: function update() {
      if (this.displayAllToggled) {
        //no need to update this table as long as the toggle is active
        return;
      }

      var d1 = this.elementRef.nativeElement.querySelector('.video');
      var currentTime = d1.currentTime;
      this.updateKeystrokeTable(currentTime);
    }
    /* this function goes through all keystrokes of the xml and updates the table accordingly */

  }, {
    key: "updateKeystrokeTable",
    value: function updateKeystrokeTable(currentVideoTime) {
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
        var insertString = '<tr>' + '<td>' + this.convertTimeToDisplayFormat(ks.time) + '</td>' + '<td>' + ks.key + '</td>' + '<td>' + ks.info + '</td>' + '</tr>';
        tbodyHtml = tbodyHtml + insertString;
      }

      tableBody.innerHTML = tbodyHtml;
    }
    /* convert to a human readible format */

  }, {
    key: "convertTimeToDisplayFormat",
    value: function convertTimeToDisplayFormat(seconds) {
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
      } else {
        secondsRemainerString = secondsRemainder.toString();
      }

      var returnString;
      returnString = minutes.toString() + ':' + secondsRemainerString;
      return returnString;
    }
    /* toggle was used to display all keystrokes */

  }, {
    key: "toggleChanged",
    value: function toggleChanged() {
      if (!this.displayAllToggled) {
        this.displayAllToggled = true; //update the table to display all values - this can be done by simply putting a completely high number, e.g. 24 hours = 86400s
        //no video should ever be that long..

        this.updateKeystrokeTable(86400);
      } else {
        this.displayAllToggled = false; //call update of table

        this.update();
      }
    }
  }]);

  return XmlVideoComponentComponent;
}();

XmlVideoComponentComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef
  }];
};

XmlVideoComponentComponent.propDecorators = {
  videoname: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }]
};
XmlVideoComponentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-xml-video-component',
  template: _xml_video_component_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
})
/**
 * This component extends the basic-video-component functionality by adding a table containing the key
 * strokes used in the video. the keystrokes have to be defined in a separate XML file.
 */
, (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef])], XmlVideoComponentComponent);


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 8150);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}

(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(function (err) {
  return console.error(err);
});

/***/ }),

/***/ 1154:
/*!**********************!*\
  !*** ./src/prism.js ***!
  \**********************/
/***/ (function(module) {

/* PrismJS 1.17.1
https://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript+bash+diff+git+less+http+javadoclike+markdown+json+js-templates+typescript+jsdoc+scss+js-extras+jsx+sass&plugins=line-numbers+command-line */
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
    Prism = function (u) {
  var c = /\blang(?:uage)?-([\w-]+)\b/i,
      a = 0;
  var _ = {
    manual: u.Prism && u.Prism.manual,
    disableWorkerMessageHandler: u.Prism && u.Prism.disableWorkerMessageHandler,
    util: {
      encode: function encode(e) {
        return e instanceof L ? new L(e.type, _.util.encode(e.content), e.alias) : Array.isArray(e) ? e.map(_.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
      },
      type: function type(e) {
        return Object.prototype.toString.call(e).slice(8, -1);
      },
      objId: function objId(e) {
        return e.__id || Object.defineProperty(e, "__id", {
          value: ++a
        }), e.__id;
      },
      clone: function n(e, r) {
        var t,
            a,
            i = _.util.type(e);

        switch (r = r || {}, i) {
          case "Object":
            if (a = _.util.objId(e), r[a]) return r[a];

            for (var o in t = {}, r[a] = t, e) {
              e.hasOwnProperty(o) && (t[o] = n(e[o], r));
            }

            return t;

          case "Array":
            return a = _.util.objId(e), r[a] ? r[a] : (t = [], r[a] = t, e.forEach(function (e, a) {
              t[a] = n(e, r);
            }), t);

          default:
            return e;
        }
      }
    },
    languages: {
      extend: function extend(e, a) {
        var n = _.util.clone(_.languages[e]);

        for (var r in a) {
          n[r] = a[r];
        }

        return n;
      },
      insertBefore: function insertBefore(n, e, a, r) {
        var t = (r = r || _.languages)[n],
            i = {};

        for (var o in t) {
          if (t.hasOwnProperty(o)) {
            if (o == e) for (var l in a) {
              a.hasOwnProperty(l) && (i[l] = a[l]);
            }
            a.hasOwnProperty(o) || (i[o] = t[o]);
          }
        }

        var s = r[n];
        return r[n] = i, _.languages.DFS(_.languages, function (e, a) {
          a === s && e != n && (this[e] = i);
        }), i;
      },
      DFS: function e(a, n, r, t) {
        t = t || {};
        var i = _.util.objId;

        for (var o in a) {
          if (a.hasOwnProperty(o)) {
            n.call(a, o, a[o], r || o);

            var l = a[o],
                s = _.util.type(l);

            "Object" !== s || t[i(l)] ? "Array" !== s || t[i(l)] || (t[i(l)] = !0, e(l, n, o, t)) : (t[i(l)] = !0, e(l, n, null, t));
          }
        }
      }
    },
    plugins: {},
    highlightAll: function highlightAll(e, a) {
      _.highlightAllUnder(document, e, a);
    },
    highlightAllUnder: function highlightAllUnder(e, a, n) {
      var r = {
        callback: n,
        selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
      };

      _.hooks.run("before-highlightall", r);

      for (var t, i = e.querySelectorAll(r.selector), o = 0; t = i[o++];) {
        _.highlightElement(t, !0 === a, r.callback);
      }
    },
    highlightElement: function highlightElement(e, a, n) {
      var r = function (e) {
        for (; e && !c.test(e.className);) {
          e = e.parentNode;
        }

        return e ? (e.className.match(c) || [, "none"])[1].toLowerCase() : "none";
      }(e),
          t = _.languages[r];

      e.className = e.className.replace(c, "").replace(/\s+/g, " ") + " language-" + r;
      var i = e.parentNode;
      i && "pre" === i.nodeName.toLowerCase() && (i.className = i.className.replace(c, "").replace(/\s+/g, " ") + " language-" + r);
      var o = {
        element: e,
        language: r,
        grammar: t,
        code: e.textContent
      };

      function l(e) {
        o.highlightedCode = e, _.hooks.run("before-insert", o), o.element.innerHTML = o.highlightedCode, _.hooks.run("after-highlight", o), _.hooks.run("complete", o), n && n.call(o.element);
      }

      if (_.hooks.run("before-sanity-check", o), !o.code) return _.hooks.run("complete", o), void (n && n.call(o.element));
      if (_.hooks.run("before-highlight", o), o.grammar) {
        if (a && u.Worker) {
          var s = new Worker(_.filename);
          s.onmessage = function (e) {
            l(e.data);
          }, s.postMessage(JSON.stringify({
            language: o.language,
            code: o.code,
            immediateClose: !0
          }));
        } else l(_.highlight(o.code, o.grammar, o.language));
      } else l(_.util.encode(o.code));
    },
    highlight: function highlight(e, a, n) {
      var r = {
        code: e,
        grammar: a,
        language: n
      };
      return _.hooks.run("before-tokenize", r), r.tokens = _.tokenize(r.code, r.grammar), _.hooks.run("after-tokenize", r), L.stringify(_.util.encode(r.tokens), r.language);
    },
    matchGrammar: function matchGrammar(e, a, n, r, t, i, o) {
      for (var l in n) {
        if (n.hasOwnProperty(l) && n[l]) {
          var s = n[l];
          s = Array.isArray(s) ? s : [s];

          for (var u = 0; u < s.length; ++u) {
            if (o && o == l + "," + u) return;
            var c = s[u],
                g = c.inside,
                f = !!c.lookbehind,
                h = !!c.greedy,
                d = 0,
                m = c.alias;

            if (h && !c.pattern.global) {
              var p = c.pattern.toString().match(/[imsuy]*$/)[0];
              c.pattern = RegExp(c.pattern.source, p + "g");
            }

            c = c.pattern || c;

            for (var y = r, v = t; y < a.length; v += a[y].length, ++y) {
              var k = a[y];
              if (a.length > e.length) return;

              if (!(k instanceof L)) {
                if (h && y != a.length - 1) {
                  if (c.lastIndex = v, !(x = c.exec(e))) break;

                  for (var b = x.index + (f && x[1] ? x[1].length : 0), w = x.index + x[0].length, A = y, P = v, O = a.length; A < O && (P < w || !a[A].type && !a[A - 1].greedy); ++A) {
                    (P += a[A].length) <= b && (++y, v = P);
                  }

                  if (a[y] instanceof L) continue;
                  j = A - y, k = e.slice(v, P), x.index -= v;
                } else {
                  c.lastIndex = 0;
                  var x = c.exec(k),
                      j = 1;
                }

                if (x) {
                  f && (d = x[1] ? x[1].length : 0);
                  w = (b = x.index + d) + (x = x[0].slice(d)).length;
                  var N = k.slice(0, b),
                      S = k.slice(w),
                      C = [y, j];
                  N && (++y, v += N.length, C.push(N));
                  var E = new L(l, g ? _.tokenize(x, g) : x, m, x, h);
                  if (C.push(E), S && C.push(S), Array.prototype.splice.apply(a, C), 1 != j && _.matchGrammar(e, a, n, y, v, !0, l + "," + u), i) break;
                } else if (i) break;
              }
            }
          }
        }
      }
    },
    tokenize: function tokenize(e, a) {
      var n = [e],
          r = a.rest;

      if (r) {
        for (var t in r) {
          a[t] = r[t];
        }

        delete a.rest;
      }

      return _.matchGrammar(e, n, a, 0, 0, !1), n;
    },
    hooks: {
      all: {},
      add: function add(e, a) {
        var n = _.hooks.all;
        n[e] = n[e] || [], n[e].push(a);
      },
      run: function run(e, a) {
        var n = _.hooks.all[e];
        if (n && n.length) for (var r, t = 0; r = n[t++];) {
          r(a);
        }
      }
    },
    Token: L
  };

  function L(e, a, n, r, t) {
    this.type = e, this.content = a, this.alias = n, this.length = 0 | (r || "").length, this.greedy = !!t;
  }

  if (u.Prism = _, L.stringify = function (e, a) {
    if ("string" == typeof e) return e;
    if (Array.isArray(e)) return e.map(function (e) {
      return L.stringify(e, a);
    }).join("");
    var n = {
      type: e.type,
      content: L.stringify(e.content, a),
      tag: "span",
      classes: ["token", e.type],
      attributes: {},
      language: a
    };

    if (e.alias) {
      var r = Array.isArray(e.alias) ? e.alias : [e.alias];
      Array.prototype.push.apply(n.classes, r);
    }

    _.hooks.run("wrap", n);

    var t = Object.keys(n.attributes).map(function (e) {
      return e + '="' + (n.attributes[e] || "").replace(/"/g, "&quot;") + '"';
    }).join(" ");
    return "<" + n.tag + ' class="' + n.classes.join(" ") + '"' + (t ? " " + t : "") + ">" + n.content + "</" + n.tag + ">";
  }, !u.document) return u.addEventListener && (_.disableWorkerMessageHandler || u.addEventListener("message", function (e) {
    var a = JSON.parse(e.data),
        n = a.language,
        r = a.code,
        t = a.immediateClose;
    u.postMessage(_.highlight(r, _.languages[n], n)), t && u.close();
  }, !1)), _;
  var e = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();

  if (e && (_.filename = e.src, e.hasAttribute("data-manual") && (_.manual = !0)), !_.manual) {
    var n = function n() {
      _.manual || _.highlightAll();
    };

    "loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(n) : window.setTimeout(n, 16) : document.addEventListener("DOMContentLoaded", n);
  }

  return _;
}(_self);

 true && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism);
Prism.languages.markup = {
  comment: /<!--[\s\S]*?-->/,
  prolog: /<\?[\s\S]+?\?>/,
  doctype: /<!DOCTYPE[\s\S]+?>/i,
  cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
  tag: {
    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
    greedy: !0,
    inside: {
      tag: {
        pattern: /^<\/?[^\s>\/]+/i,
        inside: {
          punctuation: /^<\/?/,
          namespace: /^[^\s>\/:]+:/
        }
      },
      "attr-value": {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
        inside: {
          punctuation: [/^=/, {
            pattern: /^(\s*)["']|["']$/,
            lookbehind: !0
          }]
        }
      },
      punctuation: /\/?>/,
      "attr-name": {
        pattern: /[^\s>\/]+/,
        inside: {
          namespace: /^[^\s>\/:]+:/
        }
      }
    }
  },
  entity: /&#?[\da-z]{1,8};/i
}, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.hooks.add("wrap", function (a) {
  "entity" === a.type && (a.attributes.title = a.content.replace(/&amp;/, "&"));
}), Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
  value: function value(a, e) {
    var s = {};
    s["language-" + e] = {
      pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
      lookbehind: !0,
      inside: Prism.languages[e]
    }, s.cdata = /^<!\[CDATA\[|\]\]>$/i;
    var n = {
      "included-cdata": {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        inside: s
      }
    };
    n["language-" + e] = {
      pattern: /[\s\S]+/,
      inside: Prism.languages[e]
    };
    var i = {};
    i[a] = {
      pattern: RegExp("(<__[\\s\\S]*?>)(?:<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\s*|[\\s\\S])*?(?=<\\/__>)".replace(/__/g, a), "i"),
      lookbehind: !0,
      greedy: !0,
      inside: n
    }, Prism.languages.insertBefore("markup", "cdata", i);
  }
}), Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup;
!function (s) {
  var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
  s.languages.css = {
    comment: /\/\*[\s\S]*?\*\//,
    atrule: {
      pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
      inside: {
        rule: /@[\w-]+/
      }
    },
    url: {
      pattern: RegExp("url\\((?:" + t.source + "|[^\n\r()]*)\\)", "i"),
      inside: {
        function: /^url/i,
        punctuation: /^\(|\)$/
      }
    },
    selector: RegExp("[^{}\\s](?:[^{};\"']|" + t.source + ")*?(?=\\s*\\{)"),
    string: {
      pattern: t,
      greedy: !0
    },
    property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
    important: /!important\b/i,
    function: /[-a-z0-9]+(?=\()/i,
    punctuation: /[(){};:,]/
  }, s.languages.css.atrule.inside.rest = s.languages.css;
  var e = s.languages.markup;
  e && (e.tag.addInlined("style", "css"), s.languages.insertBefore("inside", "attr-value", {
    "style-attr": {
      pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
      inside: {
        "attr-name": {
          pattern: /^\s*style/i,
          inside: e.tag.inside
        },
        punctuation: /^\s*=\s*['"]|['"]\s*$/,
        "attr-value": {
          pattern: /.+/i,
          inside: s.languages.css
        }
      },
      alias: "language-css"
    }
  }, e.tag));
}(Prism);
Prism.languages.clike = {
  comment: [{
    pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
    lookbehind: !0
  }, {
    pattern: /(^|[^\\:])\/\/.*/,
    lookbehind: !0,
    greedy: !0
  }],
  string: {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0
  },
  "class-name": {
    pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
    lookbehind: !0,
    inside: {
      punctuation: /[.\\]/
    }
  },
  keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
  boolean: /\b(?:true|false)\b/,
  function: /\w+(?=\()/,
  number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
  operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
  punctuation: /[{}[\];(),.:]/
};
Prism.languages.javascript = Prism.languages.extend("clike", {
  "class-name": [Prism.languages.clike["class-name"], {
    pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
    lookbehind: !0
  }],
  keyword: [{
    pattern: /((?:^|})\s*)(?:catch|finally)\b/,
    lookbehind: !0
  }, {
    pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
    lookbehind: !0
  }],
  number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
  function: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
}), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, Prism.languages.insertBefore("javascript", "keyword", {
  regex: {
    pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,
    lookbehind: !0,
    greedy: !0
  },
  "function-variable": {
    pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
    alias: "function"
  },
  parameter: [{
    pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
    lookbehind: !0,
    inside: Prism.languages.javascript
  }, {
    pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
    inside: Prism.languages.javascript
  }, {
    pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
    lookbehind: !0,
    inside: Prism.languages.javascript
  }, {
    pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
    lookbehind: !0,
    inside: Prism.languages.javascript
  }],
  constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
}), Prism.languages.insertBefore("javascript", "string", {
  "template-string": {
    pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
    greedy: !0,
    inside: {
      "template-punctuation": {
        pattern: /^`|`$/,
        alias: "string"
      },
      interpolation: {
        pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
        lookbehind: !0,
        inside: {
          "interpolation-punctuation": {
            pattern: /^\${|}$/,
            alias: "punctuation"
          },
          rest: Prism.languages.javascript
        }
      },
      string: /[\s\S]+/
    }
  }
}), Prism.languages.markup && Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.js = Prism.languages.javascript;
!function (e) {
  var t = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",
      n = {
    environment: {
      pattern: RegExp("\\$" + t),
      alias: "constant"
    },
    variable: [{
      pattern: /\$?\(\([\s\S]+?\)\)/,
      greedy: !0,
      inside: {
        variable: [{
          pattern: /(^\$\(\([\s\S]+)\)\)/,
          lookbehind: !0
        }, /^\$\(\(/],
        number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/,
        operator: /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
        punctuation: /\(\(?|\)\)?|,|;/
      }
    }, {
      pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
      greedy: !0,
      inside: {
        variable: /^\$\(|^`|\)$|`$/
      }
    }, {
      pattern: /\$\{[^}]+\}/,
      greedy: !0,
      inside: {
        operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
        punctuation: /[\[\]]/,
        environment: {
          pattern: RegExp("(\\{)" + t),
          lookbehind: !0,
          alias: "constant"
        }
      }
    }, /\$(?:\w+|[#?*!@$])/],
    entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/
  };
  e.languages.bash = {
    shebang: {
      pattern: /^#!\s*\/.*/,
      alias: "important"
    },
    comment: {
      pattern: /(^|[^"{\\$])#.*/,
      lookbehind: !0
    },
    "function-name": [{
      pattern: /(\bfunction\s+)\w+(?=(?:\s*\(?:\s*\))?\s*\{)/,
      lookbehind: !0,
      alias: "function"
    }, {
      pattern: /\b\w+(?=\s*\(\s*\)\s*\{)/,
      alias: "function"
    }],
    "for-or-select": {
      pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
      alias: "variable",
      lookbehind: !0
    },
    "assign-left": {
      pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
      inside: {
        environment: {
          pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + t),
          lookbehind: !0,
          alias: "constant"
        }
      },
      alias: "variable",
      lookbehind: !0
    },
    string: [{
      pattern: /((?:^|[^<])<<-?\s*)(\w+?)\s*(?:\r?\n|\r)(?:[\s\S])*?(?:\r?\n|\r)\2/,
      lookbehind: !0,
      greedy: !0,
      inside: n
    }, {
      pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s*(?:\r?\n|\r)(?:[\s\S])*?(?:\r?\n|\r)\3/,
      lookbehind: !0,
      greedy: !0
    }, {
      pattern: /(["'])(?:\\[\s\S]|\$\([^)]+\)|`[^`]+`|(?!\1)[^\\])*\1/,
      greedy: !0,
      inside: n
    }],
    environment: {
      pattern: RegExp("\\$?" + t),
      alias: "constant"
    },
    variable: n.variable,
    function: {
      pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
      lookbehind: !0
    },
    keyword: {
      pattern: /(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,
      lookbehind: !0
    },
    builtin: {
      pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,
      lookbehind: !0,
      alias: "class-name"
    },
    boolean: {
      pattern: /(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,
      lookbehind: !0
    },
    "file-descriptor": {
      pattern: /\B&\d\b/,
      alias: "important"
    },
    operator: {
      pattern: /\d?<>|>\||\+=|==?|!=?|=~|<<[<-]?|[&\d]?>>|\d?[<>]&?|&[>&]?|\|[&|]?|<=?|>=?/,
      inside: {
        "file-descriptor": {
          pattern: /^\d/,
          alias: "important"
        }
      }
    },
    punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
    number: {
      pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
      lookbehind: !0
    }
  };

  for (var a = ["comment", "function-name", "for-or-select", "assign-left", "string", "environment", "function", "keyword", "builtin", "boolean", "file-descriptor", "operator", "punctuation", "number"], r = n.variable[1].inside, s = 0; s < a.length; s++) {
    r[a[s]] = e.languages.bash[a[s]];
  }

  e.languages.shell = e.languages.bash;
}(Prism);
!function (d) {
  d.languages.diff = {
    coord: [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d+.*$/m]
  };
  var r = {
    "deleted-sign": "-",
    "deleted-arrow": "<",
    "inserted-sign": "+",
    "inserted-arrow": ">",
    unchanged: " ",
    diff: "!"
  };
  Object.keys(r).forEach(function (e) {
    var n = r[e],
        a = [];
    /^\w+$/.test(e) || a.push(/\w+/.exec(e)[0]), "diff" === e && a.push("bold"), d.languages.diff[e] = {
      pattern: RegExp("^(?:[" + n + "].*(?:\r\n?|\n|(?![\\s\\S])))+", "m"),
      alias: a
    };
  }), Object.defineProperty(d.languages.diff, "PREFIXES", {
    value: r
  });
}(Prism);
Prism.languages.git = {
  comment: /^#.*/m,
  deleted: /^[-–].*/m,
  inserted: /^\+.*/m,
  string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/m,
  command: {
    pattern: /^.*\$ git .*$/m,
    inside: {
      parameter: /\s--?\w+/m
    }
  },
  coord: /^@@.*@@$/m,
  commit_sha1: /^commit \w{40}$/m
};
Prism.languages.less = Prism.languages.extend("css", {
  comment: [/\/\*[\s\S]*?\*\//, {
    pattern: /(^|[^\\])\/\/.*/,
    lookbehind: !0
  }],
  atrule: {
    pattern: /@[\w-]+?(?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};])*?(?=\s*\{)/,
    inside: {
      punctuation: /[:()]/
    }
  },
  selector: {
    pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@])*?(?=\s*\{)/,
    inside: {
      variable: /@+[\w-]+/
    }
  },
  property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,
  operator: /[+\-*\/]/
}), Prism.languages.insertBefore("less", "property", {
  variable: [{
    pattern: /@[\w-]+\s*:/,
    inside: {
      punctuation: /:/
    }
  }, /@@?[\w-]+/],
  "mixin-usage": {
    pattern: /([{;]\s*)[.#](?!\d)[\w-]+.*?(?=[(;])/,
    lookbehind: !0,
    alias: "function"
  }
});
!function (t) {
  t.languages.http = {
    "request-line": {
      pattern: /^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\s(?:https?:\/\/|\/)\S+\sHTTP\/[0-9.]+/m,
      inside: {
        property: /^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/,
        "attr-name": /:\w+/
      }
    },
    "response-status": {
      pattern: /^HTTP\/1.[01] \d+.*/m,
      inside: {
        property: {
          pattern: /(^HTTP\/1.[01] )\d+.*/i,
          lookbehind: !0
        }
      }
    },
    "header-name": {
      pattern: /^[\w-]+:(?=.)/m,
      alias: "keyword"
    }
  };
  var a,
      e,
      n,
      i = t.languages,
      s = {
    "application/javascript": i.javascript,
    "application/json": i.json || i.javascript,
    "application/xml": i.xml,
    "text/xml": i.xml,
    "text/html": i.html,
    "text/css": i.css
  },
      p = {
    "application/json": !0,
    "application/xml": !0
  };

  for (var r in s) {
    if (s[r]) {
      a = a || {};
      var T = p[r] ? (void 0, n = (e = r).replace(/^[a-z]+\//, ""), "(?:" + e + "|\\w+/(?:[\\w.-]+\\+)+" + n + "(?![+\\w.-]))") : r;
      a[r] = {
        pattern: RegExp("(content-type:\\s*" + T + "[\\s\\S]*?)(?:\\r?\\n|\\r){2}[\\s\\S]*", "i"),
        lookbehind: !0,
        inside: {
          rest: s[r]
        }
      };
    }
  }

  a && t.languages.insertBefore("http", "header-name", a);
}(Prism);
!function (p) {
  var a = p.languages.javadoclike = {
    parameter: {
      pattern: /(^\s*(?:\/{3}|\*|\/\*\*)\s*@(?:param|arg|arguments)\s+)\w+/m,
      lookbehind: !0
    },
    keyword: {
      pattern: /(^\s*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,
      lookbehind: !0
    },
    punctuation: /[{}]/
  };
  Object.defineProperty(a, "addSupport", {
    value: function value(a, e) {
      "string" == typeof a && (a = [a]), a.forEach(function (a) {
        !function (a, e) {
          var n = "doc-comment",
              t = p.languages[a];

          if (t) {
            var r = t[n];

            if (!r) {
              var i = {
                "doc-comment": {
                  pattern: /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,
                  alias: "comment"
                }
              };
              r = (t = p.languages.insertBefore(a, "comment", i))[n];
            }

            if (r instanceof RegExp && (r = t[n] = {
              pattern: r
            }), Array.isArray(r)) for (var o = 0, s = r.length; o < s; o++) {
              r[o] instanceof RegExp && (r[o] = {
                pattern: r[o]
              }), e(r[o]);
            } else e(r);
          }
        }(a, function (a) {
          a.inside || (a.inside = {}), a.inside.rest = e;
        });
      });
    }
  }), a.addSupport(["java", "javascript", "php"], a);
}(Prism);
!function (d) {
  function n(n, e) {
    return n = n.replace(/<inner>/g, "(?:\\\\.|[^\\\\\\n\r]|(?:\r?\n|\r)(?!\r?\n|\r))"), e && (n = n + "|" + n.replace(/_/g, "\\*")), RegExp("((?:^|[^\\\\])(?:\\\\{2})*)(?:" + n + ")");
  }

  var e = "(?:\\\\.|``.+?``|`[^`\r\\n]+`|[^\\\\|\r\\n`])+",
      t = "\\|?__(?:\\|__)+\\|?(?:(?:\r?\n|\r)|$)".replace(/__/g, e),
      a = "\\|?[ \t]*:?-{3,}:?[ \t]*(?:\\|[ \t]*:?-{3,}:?[ \t]*)+\\|?(?:\r?\n|\r)";
  d.languages.markdown = d.languages.extend("markup", {}), d.languages.insertBefore("markdown", "prolog", {
    blockquote: {
      pattern: /^>(?:[\t ]*>)*/m,
      alias: "punctuation"
    },
    table: {
      pattern: RegExp("^" + t + a + "(?:" + t + ")*", "m"),
      inside: {
        "table-data-rows": {
          pattern: RegExp("^(" + t + a + ")(?:" + t + ")*$"),
          lookbehind: !0,
          inside: {
            "table-data": {
              pattern: RegExp(e),
              inside: d.languages.markdown
            },
            punctuation: /\|/
          }
        },
        "table-line": {
          pattern: RegExp("^(" + t + ")" + a + "$"),
          lookbehind: !0,
          inside: {
            punctuation: /\||:?-{3,}:?/
          }
        },
        "table-header-row": {
          pattern: RegExp("^" + t + "$"),
          inside: {
            "table-header": {
              pattern: RegExp(e),
              alias: "important",
              inside: d.languages.markdown
            },
            punctuation: /\|/
          }
        }
      }
    },
    code: [{
      pattern: /(^[ \t]*(?:\r?\n|\r))(?: {4}|\t).+(?:(?:\r?\n|\r)(?: {4}|\t).+)*/m,
      lookbehind: !0,
      alias: "keyword"
    }, {
      pattern: /``.+?``|`[^`\r\n]+`/,
      alias: "keyword"
    }, {
      pattern: /^```[\s\S]*?^```$/m,
      greedy: !0,
      inside: {
        "code-block": {
          pattern: /^(```.*(?:\r?\n|\r))[\s\S]+?(?=(?:\r?\n|\r)^```$)/m,
          lookbehind: !0
        },
        "code-language": {
          pattern: /^(```).+/,
          lookbehind: !0
        },
        punctuation: /```/
      }
    }],
    title: [{
      pattern: /\S.*(?:\r?\n|\r)(?:==+|--+)(?=[ \t]*$)/m,
      alias: "important",
      inside: {
        punctuation: /==+$|--+$/
      }
    }, {
      pattern: /(^\s*)#+.+/m,
      lookbehind: !0,
      alias: "important",
      inside: {
        punctuation: /^#+|#+$/
      }
    }],
    hr: {
      pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
      lookbehind: !0,
      alias: "punctuation"
    },
    list: {
      pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
      lookbehind: !0,
      alias: "punctuation"
    },
    "url-reference": {
      pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
      inside: {
        variable: {
          pattern: /^(!?\[)[^\]]+/,
          lookbehind: !0
        },
        string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
        punctuation: /^[\[\]!:]|[<>]/
      },
      alias: "url"
    },
    bold: {
      pattern: n("__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__", !0),
      lookbehind: !0,
      greedy: !0,
      inside: {
        content: {
          pattern: /(^..)[\s\S]+(?=..$)/,
          lookbehind: !0,
          inside: {}
        },
        punctuation: /\*\*|__/
      }
    },
    italic: {
      pattern: n("_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_", !0),
      lookbehind: !0,
      greedy: !0,
      inside: {
        content: {
          pattern: /(^.)[\s\S]+(?=.$)/,
          lookbehind: !0,
          inside: {}
        },
        punctuation: /[*_]/
      }
    },
    strike: {
      pattern: n("(~~?)(?:(?!~)<inner>)+?\\2", !1),
      lookbehind: !0,
      greedy: !0,
      inside: {
        content: {
          pattern: /(^~~?)[\s\S]+(?=\1$)/,
          lookbehind: !0,
          inside: {}
        },
        punctuation: /~~?/
      }
    },
    url: {
      pattern: n('!?\\[(?:(?!\\])<inner>)+\\](?:\\([^\\s)]+(?:[\t ]+"(?:\\\\.|[^"\\\\])*")?\\)| ?\\[(?:(?!\\])<inner>)+\\])', !1),
      lookbehind: !0,
      greedy: !0,
      inside: {
        variable: {
          pattern: /(\[)[^\]]+(?=\]$)/,
          lookbehind: !0
        },
        content: {
          pattern: /(^!?\[)[^\]]+(?=\])/,
          lookbehind: !0,
          inside: {}
        },
        string: {
          pattern: /"(?:\\.|[^"\\])*"(?=\)$)/
        }
      }
    }
  }), ["url", "bold", "italic", "strike"].forEach(function (e) {
    ["url", "bold", "italic", "strike"].forEach(function (n) {
      e !== n && (d.languages.markdown[e].inside.content.inside[n] = d.languages.markdown[n]);
    });
  }), d.hooks.add("after-tokenize", function (n) {
    "markdown" !== n.language && "md" !== n.language || !function n(e) {
      if (e && "string" != typeof e) for (var t = 0, a = e.length; t < a; t++) {
        var i = e[t];

        if ("code" === i.type) {
          var r = i.content[1],
              o = i.content[3];

          if (r && o && "code-language" === r.type && "code-block" === o.type && "string" == typeof r.content) {
            var l = "language-" + r.content.trim().split(/\s+/)[0].toLowerCase();
            o.alias ? "string" == typeof o.alias ? o.alias = [o.alias, l] : o.alias.push(l) : o.alias = [l];
          }
        } else n(i.content);
      }
    }(n.tokens);
  }), d.hooks.add("wrap", function (n) {
    if ("code-block" === n.type) {
      for (var e = "", t = 0, a = n.classes.length; t < a; t++) {
        var i = n.classes[t],
            r = /language-(.+)/.exec(i);

        if (r) {
          e = r[1];
          break;
        }
      }

      var o = d.languages[e];

      if (o) {
        var l = n.content.replace(/&lt;/g, "<").replace(/&amp;/g, "&");
        n.content = d.highlight(l, o, e);
      } else if (e && "none" !== e && d.plugins.autoloader) {
        var s = "md-" + new Date().valueOf() + "-" + Math.floor(1e16 * Math.random());
        n.attributes.id = s, d.plugins.autoloader.loadLanguages(e, function () {
          var n = document.getElementById(s);
          n && (n.innerHTML = d.highlight(n.textContent, d.languages[e], e));
        });
      }
    }
  }), d.languages.md = d.languages.markdown;
}(Prism);
Prism.languages.json = {
  property: {
    pattern: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
    greedy: !0
  },
  string: {
    pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
    greedy: !0
  },
  comment: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
  number: /-?\d+\.?\d*(e[+-]?\d+)?/i,
  punctuation: /[{}[\],]/,
  operator: /:/,
  boolean: /\b(?:true|false)\b/,
  null: {
    pattern: /\bnull\b/,
    alias: "keyword"
  }
};
!function (u) {
  var e = u.languages.javascript["template-string"],
      n = e.pattern.source,
      a = e.inside.interpolation,
      i = a.inside["interpolation-punctuation"],
      r = a.pattern.source;

  function t(e, t) {
    if (u.languages[e]) return {
      pattern: RegExp("((?:" + t + ")\\s*)" + n),
      lookbehind: !0,
      greedy: !0,
      inside: {
        "template-punctuation": {
          pattern: /^`|`$/,
          alias: "string"
        },
        "embedded-code": {
          pattern: /[\s\S]+/,
          alias: e
        }
      }
    };
  }

  function o(e, t, n) {
    var r = {
      code: e,
      grammar: t,
      language: n
    };
    return u.hooks.run("before-tokenize", r), r.tokens = u.tokenize(r.code, r.grammar), u.hooks.run("after-tokenize", r), r.tokens;
  }

  function d(e) {
    var t = {};
    t["interpolation-punctuation"] = i;
    var n = u.tokenize(e, t);

    if (3 === n.length) {
      var r = [1, 1];
      r.push.apply(r, o(n[1], u.languages.javascript, "javascript")), n.splice.apply(n, r);
    }

    return new u.Token("interpolation", n, a.alias, e);
  }

  function c(a, e, i) {
    var t = u.tokenize(a, {
      interpolation: {
        pattern: RegExp(r),
        lookbehind: !0
      }
    }),
        f = 0,
        y = {},
        n = o(t.map(function (e) {
      if ("string" == typeof e) return e;

      for (var t, n = e.content; -1 !== a.indexOf((r = f++, t = "___" + i.toUpperCase() + "_" + r + "___"));) {
        ;
      }

      return y[t] = n, t;
      var r;
    }).join(""), e, i),
        v = Object.keys(y);
    return f = 0, function e(t) {
      for (var n = 0; n < t.length; n++) {
        if (f >= v.length) return;
        var r = t[n];

        if ("string" == typeof r || "string" == typeof r.content) {
          var a = v[f],
              i = "string" == typeof r ? r : r.content,
              o = i.indexOf(a);

          if (-1 !== o) {
            ++f;
            var s = i.substring(0, o),
                p = d(y[a]),
                l = i.substring(o + a.length),
                g = [];

            if (s && g.push(s), g.push(p), l) {
              var u = [l];
              e(u), g.push.apply(g, u);
            }

            "string" == typeof r ? (t.splice.apply(t, [n, 1].concat(g)), n += g.length - 1) : r.content = g;
          }
        } else {
          var c = r.content;
          Array.isArray(c) ? e(c) : e([c]);
        }
      }
    }(n), new u.Token(i, n, "language-" + i, a);
  }

  u.languages.javascript["template-string"] = [t("css", "\\b(?:styled(?:\\([^)]*\\))?(?:\\s*\\.\\s*\\w+(?:\\([^)]*\\))*)*|css(?:\\s*\\.\\s*(?:global|resolve))?|createGlobalStyle|keyframes)"), t("html", "\\bhtml|\\.\\s*(?:inner|outer)HTML\\s*\\+?="), t("svg", "\\bsvg"), t("markdown", "\\b(?:md|markdown)"), t("graphql", "\\b(?:gql|graphql(?:\\s*\\.\\s*experimental)?)"), e].filter(Boolean);
  var s = {
    javascript: !0,
    js: !0,
    typescript: !0,
    ts: !0,
    jsx: !0,
    tsx: !0
  };

  function f(e) {
    return "string" == typeof e ? e : Array.isArray(e) ? e.map(f).join("") : f(e.content);
  }

  u.hooks.add("after-tokenize", function (e) {
    e.language in s && !function e(t) {
      for (var n = 0, r = t.length; n < r; n++) {
        var a = t[n];

        if ("string" != typeof a) {
          var i = a.content;
          if (Array.isArray(i)) {
            if ("template-string" === a.type) {
              var o = i[1];

              if (3 === i.length && "string" != typeof o && "embedded-code" === o.type) {
                var s = f(o),
                    p = o.alias,
                    l = Array.isArray(p) ? p[0] : p,
                    g = u.languages[l];
                if (!g) continue;
                i[1] = c(s, g, l);
              }
            } else e(i);
          } else "string" != typeof i && e([i]);
        }
      }
    }(e.tokens);
  });
}(Prism);
Prism.languages.typescript = Prism.languages.extend("javascript", {
  keyword: /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,
  builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/
}), Prism.languages.ts = Prism.languages.typescript;
!function (a) {
  var e = a.languages.javascript,
      n = "{(?:[^{}]|{(?:[^{}]|{[^{}]*})*})+}",
      s = "(@(?:param|arg|argument|property)\\s+(?:" + n + "\\s+)?)";
  a.languages.jsdoc = a.languages.extend("javadoclike", {
    parameter: {
      pattern: RegExp(s + "[$\\w\\xA0-\\uFFFF.]+(?=\\s|$)"),
      lookbehind: !0,
      inside: {
        punctuation: /\./
      }
    }
  }), a.languages.insertBefore("jsdoc", "keyword", {
    "optional-parameter": {
      pattern: RegExp(s + "\\[[$\\w\\xA0-\\uFFFF.]+(?:=[^[\\]]+)?\\](?=\\s|$)"),
      lookbehind: !0,
      inside: {
        parameter: {
          pattern: /(^\[)[$\w\xA0-\uFFFF\.]+/,
          lookbehind: !0,
          inside: {
            punctuation: /\./
          }
        },
        code: {
          pattern: /(=)[\s\S]*(?=\]$)/,
          lookbehind: !0,
          inside: e,
          alias: "language-javascript"
        },
        punctuation: /[=[\]]/
      }
    },
    "class-name": [{
      pattern: RegExp("(@[a-z]+\\s+)" + n),
      lookbehind: !0,
      inside: {
        punctuation: /[.,:?=<>|{}()[\]]/
      }
    }, {
      pattern: /(@(?:augments|extends|class|interface|memberof!?|this)\s+)[A-Z]\w*(?:\.[A-Z]\w*)*/,
      lookbehind: !0,
      inside: {
        punctuation: /\./
      }
    }],
    example: {
      pattern: /(@example\s+)[^@]+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,
      lookbehind: !0,
      inside: {
        code: {
          pattern: /^(\s*(?:\*\s*)?).+$/m,
          lookbehind: !0,
          inside: e,
          alias: "language-javascript"
        }
      }
    }
  }), a.languages.javadoclike.addSupport("javascript", a.languages.jsdoc);
}(Prism);
Prism.languages.scss = Prism.languages.extend("css", {
  comment: {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
    lookbehind: !0
  },
  atrule: {
    pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,
    inside: {
      rule: /@[\w-]+/
    }
  },
  url: /(?:[-a-z]+-)?url(?=\()/i,
  selector: {
    pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()]|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,
    inside: {
      parent: {
        pattern: /&/,
        alias: "important"
      },
      placeholder: /%[-\w]+/,
      variable: /\$[-\w]+|#\{\$[-\w]+\}/
    }
  },
  property: {
    pattern: /(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/,
    inside: {
      variable: /\$[-\w]+|#\{\$[-\w]+\}/
    }
  }
}), Prism.languages.insertBefore("scss", "atrule", {
  keyword: [/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i, {
    pattern: /( +)(?:from|through)(?= )/,
    lookbehind: !0
  }]
}), Prism.languages.insertBefore("scss", "important", {
  variable: /\$[-\w]+|#\{\$[-\w]+\}/
}), Prism.languages.insertBefore("scss", "function", {
  placeholder: {
    pattern: /%[-\w]+/,
    alias: "selector"
  },
  statement: {
    pattern: /\B!(?:default|optional)\b/i,
    alias: "keyword"
  },
  boolean: /\b(?:true|false)\b/,
  null: {
    pattern: /\bnull\b/,
    alias: "keyword"
  },
  operator: {
    pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
    lookbehind: !0
  }
}), Prism.languages.scss.atrule.inside.rest = Prism.languages.scss;
!function (a) {
  a.languages.insertBefore("javascript", "function-variable", {
    "method-variable": {
      pattern: RegExp("(\\.\\s*)" + a.languages.javascript["function-variable"].pattern.source),
      lookbehind: !0,
      alias: ["function-variable", "method", "function", "property-access"]
    }
  }), a.languages.insertBefore("javascript", "function", {
    method: {
      pattern: RegExp("(\\.\\s*)" + a.languages.javascript.function.source),
      lookbehind: !0,
      alias: ["function", "property-access"]
    }
  }), a.languages.insertBefore("javascript", "constant", {
    "known-class-name": [{
      pattern: /\b(?:(?:(?:Uint|Int)(?:8|16|32)|Uint8Clamped|Float(?:32|64))?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|(?:Weak)?(?:Set|Map)|WebAssembly)\b/,
      alias: "class-name"
    }, {
      pattern: /\b(?:[A-Z]\w*)Error\b/,
      alias: "class-name"
    }]
  }), a.languages.javascript.keyword.unshift({
    pattern: /\b(?:as|default|export|from|import)\b/,
    alias: "module"
  }, {
    pattern: /\bnull\b/,
    alias: ["null", "nil"]
  }, {
    pattern: /\bundefined\b/,
    alias: "nil"
  }), a.languages.insertBefore("javascript", "operator", {
    spread: {
      pattern: /\.{3}/,
      alias: "operator"
    },
    arrow: {
      pattern: /=>/,
      alias: "operator"
    }
  }), a.languages.insertBefore("javascript", "punctuation", {
    "property-access": {
      pattern: /(\.\s*)#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*/,
      lookbehind: !0
    },
    "maybe-class-name": {
      pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
      lookbehind: !0
    },
    dom: {
      pattern: /\b(?:document|location|navigator|performance|(?:local|session)Storage|window)\b/,
      alias: "variable"
    },
    console: {
      pattern: /\bconsole(?=\s*\.)/,
      alias: "class-name"
    }
  });

  for (var e = ["function", "function-variable", "method", "method-variable", "property-access"], t = 0; t < e.length; t++) {
    var n = e[t],
        r = a.languages.javascript[n];
    "RegExp" === a.util.type(r) && (r = a.languages.javascript[n] = {
      pattern: r
    });
    var s = r.inside || {};
    (r.inside = s)["maybe-class-name"] = /^[A-Z][\s\S]*/;
  }
}(Prism);
!function (i) {
  var t = i.util.clone(i.languages.javascript);
  i.languages.jsx = i.languages.extend("markup", t), i.languages.jsx.tag.pattern = /<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^}]*\}|[^{}])*\}|[^{}])+\}))?|\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}))*\s*\/?)?>/i, i.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/i, i.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i, i.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, i.languages.insertBefore("inside", "attr-name", {
    spread: {
      pattern: /\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}/,
      inside: {
        punctuation: /\.{3}|[{}.]/,
        "attr-value": /\w+/
      }
    }
  }, i.languages.jsx.tag), i.languages.insertBefore("inside", "attr-value", {
    script: {
      pattern: /=(\{(?:\{(?:\{[^}]*\}|[^}])*\}|[^}])+\})/i,
      inside: {
        "script-punctuation": {
          pattern: /^=(?={)/,
          alias: "punctuation"
        },
        rest: i.languages.jsx
      },
      alias: "language-javascript"
    }
  }, i.languages.jsx.tag);

  var o = function o(t) {
    return t ? "string" == typeof t ? t : "string" == typeof t.content ? t.content : t.content.map(o).join("") : "";
  },
      p = function p(t) {
    for (var n = [], e = 0; e < t.length; e++) {
      var a = t[e],
          s = !1;

      if ("string" != typeof a && ("tag" === a.type && a.content[0] && "tag" === a.content[0].type ? "</" === a.content[0].content[0].content ? 0 < n.length && n[n.length - 1].tagName === o(a.content[0].content[1]) && n.pop() : "/>" === a.content[a.content.length - 1].content || n.push({
        tagName: o(a.content[0].content[1]),
        openedBraces: 0
      }) : 0 < n.length && "punctuation" === a.type && "{" === a.content ? n[n.length - 1].openedBraces++ : 0 < n.length && 0 < n[n.length - 1].openedBraces && "punctuation" === a.type && "}" === a.content ? n[n.length - 1].openedBraces-- : s = !0), (s || "string" == typeof a) && 0 < n.length && 0 === n[n.length - 1].openedBraces) {
        var g = o(a);
        e < t.length - 1 && ("string" == typeof t[e + 1] || "plain-text" === t[e + 1].type) && (g += o(t[e + 1]), t.splice(e + 1, 1)), 0 < e && ("string" == typeof t[e - 1] || "plain-text" === t[e - 1].type) && (g = o(t[e - 1]) + g, t.splice(e - 1, 1), e--), t[e] = new i.Token("plain-text", g, null, g);
      }

      a.content && "string" != typeof a.content && p(a.content);
    }
  };

  i.hooks.add("after-tokenize", function (t) {
    "jsx" !== t.language && "tsx" !== t.language || p(t.tokens);
  });
}(Prism);
!function (e) {
  e.languages.sass = e.languages.extend("css", {
    comment: {
      pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t]+.+)*/m,
      lookbehind: !0
    }
  }), e.languages.insertBefore("sass", "atrule", {
    "atrule-line": {
      pattern: /^(?:[ \t]*)[@+=].+/m,
      inside: {
        atrule: /(?:@[\w-]+|[+=])/m
      }
    }
  }), delete e.languages.sass.atrule;
  var t = /\$[-\w]+|#\{\$[-\w]+\}/,
      a = [/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/, {
    pattern: /(\s+)-(?=\s)/,
    lookbehind: !0
  }];
  e.languages.insertBefore("sass", "property", {
    "variable-line": {
      pattern: /^[ \t]*\$.+/m,
      inside: {
        punctuation: /:/,
        variable: t,
        operator: a
      }
    },
    "property-line": {
      pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s]+.*)/m,
      inside: {
        property: [/[^:\s]+(?=\s*:)/, {
          pattern: /(:)[^:\s]+/,
          lookbehind: !0
        }],
        punctuation: /:/,
        variable: t,
        operator: a,
        important: e.languages.sass.important
      }
    }
  }), delete e.languages.sass.property, delete e.languages.sass.important, e.languages.insertBefore("sass", "punctuation", {
    selector: {
      pattern: /([ \t]*)\S(?:,?[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,?[^,\r\n]+)*)*/,
      lookbehind: !0
    }
  });
}(Prism);
!function () {
  if ("undefined" != typeof self && self.Prism && self.document) {
    var l = "line-numbers",
        c = /\n(?!$)/g,
        m = function m(e) {
      var t = a(e)["white-space"];

      if ("pre-wrap" === t || "pre-line" === t) {
        var n = e.querySelector("code"),
            r = e.querySelector(".line-numbers-rows"),
            s = e.querySelector(".line-numbers-sizer"),
            i = n.textContent.split(c);
        s || ((s = document.createElement("span")).className = "line-numbers-sizer", n.appendChild(s)), s.style.display = "block", i.forEach(function (e, t) {
          s.textContent = e || "\n";
          var n = s.getBoundingClientRect().height;
          r.children[t].style.height = n + "px";
        }), s.textContent = "", s.style.display = "none";
      }
    },
        a = function a(e) {
      return e ? window.getComputedStyle ? getComputedStyle(e) : e.currentStyle || null : null;
    };

    window.addEventListener("resize", function () {
      Array.prototype.forEach.call(document.querySelectorAll("pre." + l), m);
    }), Prism.hooks.add("complete", function (e) {
      if (e.code) {
        var t = e.element,
            n = t.parentNode;

        if (n && /pre/i.test(n.nodeName) && !t.querySelector(".line-numbers-rows")) {
          for (var r = !1, s = /(?:^|\s)line-numbers(?:\s|$)/, i = t; i; i = i.parentNode) {
            if (s.test(i.className)) {
              r = !0;
              break;
            }
          }

          if (r) {
            t.className = t.className.replace(s, " "), s.test(n.className) || (n.className += " line-numbers");
            var l,
                a = e.code.match(c),
                o = a ? a.length + 1 : 1,
                u = new Array(o + 1).join("<span></span>");
            (l = document.createElement("span")).setAttribute("aria-hidden", "true"), l.className = "line-numbers-rows", l.innerHTML = u, n.hasAttribute("data-start") && (n.style.counterReset = "linenumber " + (parseInt(n.getAttribute("data-start"), 10) - 1)), e.element.appendChild(l), m(n), Prism.hooks.run("line-numbers", e);
          }
        }
      }
    }), Prism.hooks.add("line-numbers", function (e) {
      e.plugins = e.plugins || {}, e.plugins.lineNumbers = !0;
    }), Prism.plugins.lineNumbers = {
      getLine: function getLine(e, t) {
        if ("PRE" === e.tagName && e.classList.contains(l)) {
          var n = e.querySelector(".line-numbers-rows"),
              r = parseInt(e.getAttribute("data-start"), 10) || 1,
              s = r + (n.children.length - 1);
          t < r && (t = r), s < t && (t = s);
          var i = t - r;
          return n.children[i];
        }
      }
    };
  }
}();
!function () {
  if ("undefined" != typeof self && self.Prism && self.document) {
    var u = /(?:^|\s)command-line(?:\s|$)/;
    Prism.hooks.add("before-highlight", function (e) {
      var t = e.vars = e.vars || {},
          a = t["command-line"] = t["command-line"] || {};

      if (!a.complete && e.code) {
        var n = e.element.parentNode;
        if (n && /pre/i.test(n.nodeName) && (u.test(n.className) || u.test(e.element.className))) {
          if (e.element.querySelector(".command-line-prompt")) a.complete = !0;else {
            var r = e.code.split("\n");
            a.numberOfLines = r.length;
            var s = a.outputLines = [],
                o = n.getAttribute("data-output"),
                i = n.getAttribute("data-filter-output");

            if (o || "" === o) {
              o = o.split(",");

              for (var l = 0; l < o.length; l++) {
                var m = o[l].split("-"),
                    p = parseInt(m[0], 10),
                    d = 2 === m.length ? parseInt(m[1], 10) : p;

                if (!isNaN(p) && !isNaN(d)) {
                  p < 1 && (p = 1), d > r.length && (d = r.length), d--;

                  for (var c = --p; c <= d; c++) {
                    s[c] = r[c], r[c] = "";
                  }
                }
              }
            } else if (i) for (l = 0; l < r.length; l++) {
              0 === r[l].indexOf(i) && (s[l] = r[l].slice(i.length), r[l] = "");
            }

            e.code = r.join("\n");
          }
        } else a.complete = !0;
      } else a.complete = !0;
    }), Prism.hooks.add("before-insert", function (e) {
      var t = e.vars = e.vars || {},
          a = t["command-line"] = t["command-line"] || {};

      if (!a.complete) {
        for (var n = e.highlightedCode.split("\n"), r = 0, s = (a.outputLines || []).length; r < s; r++) {
          a.outputLines.hasOwnProperty(r) && (n[r] = a.outputLines[r]);
        }

        e.highlightedCode = n.join("\n");
      }
    }), Prism.hooks.add("complete", function (e) {
      var t = e.vars = e.vars || {},
          a = t["command-line"] = t["command-line"] || {};

      if (!a.complete) {
        var n = e.element.parentNode;
        u.test(e.element.className) && (e.element.className = e.element.className.replace(u, " ")), u.test(n.className) || (n.className += " command-line");

        var r = function r(e, t) {
          return (n.getAttribute(e) || t).replace(/"/g, "&quot");
        },
            s = new Array((a.numberOfLines || 0) + 1),
            o = r("data-prompt", "");

        if ("" !== o) s = s.join('<span data-prompt="' + o + '"></span>');else {
          var i = r("data-user", "user"),
              l = r("data-host", "localhost");
          s = s.join('<span data-user="' + i + '" data-host="' + l + '"></span>');
        }
        var m = document.createElement("span");
        m.className = "command-line-prompt", m.innerHTML = s;

        for (var p = 0, d = (a.outputLines || []).length; p < d; p++) {
          if (a.outputLines.hasOwnProperty(p)) {
            var c = m.children[p];
            c.removeAttribute("data-user"), c.removeAttribute("data-host"), c.removeAttribute("data-prompt");
          }
        }

        e.element.insertBefore(m, e.element.firstChild), a.complete = !0;
      }
    });
  }
}();

/***/ }),

/***/ 5133:
/*!*******************************************************!*\
  !*** ./src/app/about/about.component.html?ngResource ***!
  \*******************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<div class=\"ui list\" *ngIf=\"!about\" style=\"text-align:center; margin-top: 100px; margin-bottom: 50px;\" >\n  <a class=\"item\" (click)=\"aboutFunc()\">About</a>\n</div>\n\n<div *ngIf=\"about\" style=\"margin: 30px; text-align: center;\" class=\"ui message\">\n  <i class=\"close icon\" (click)=\"hideAbout()\"></i>\n  <h4>This project was created by Kevin Sabanagic</h4>\n  <p>Master-Thesis at Otto-Friedrich University Bamberg.\n    <br>April 2021\n  </p>\n  <h4>Since then, updated and maintained by the team of the chair of media informatics:</h4>\n  <p>Major Update with new content by Pascal Löffler\n    <br>April 2022\n  </p>\n  <p>Code can be found <a href=\"https://github.com/uniba-mi/blender_lernapp\" target=\"_blank\">here</a></p>\n</div>";

/***/ }),

/***/ 3533:
/*!*************************************************************************************************!*\
  !*** ./src/app/animation-chapter-overview/animation-chapter-overview.component.html?ngResource ***!
  \*************************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<h2 id=\"headline\">Animation chapter overview</h2>\n<div id=\"start_content\">\n    <p>\n        Now that you have a basic understanding on how to model more complex objects, there is one thing left to bring your objects to \n        life. Often you will want to add in some animation to create less static scenes. In this chapter we will focus on exactly that. \n        I will introduce you to a basic workflow that can not only be applied to characters like humans or animals called rigging. We \n        will create a little animation for the robot to drive around the scene. In this process you will learn more about \n        how different parts in the animation play together and how to set up a smooth animation.\n    </p>\n    <div>\n        <video class=\"overview\" autoplay controls width=\"60%\">\n            <source src=\"./assets/videos/render-wall-e-animation.mkv\" type=\"video/mkv\">\n            <source src=\"./assets/videos/render-wall-e-animation.mp4\" type=\"video/mp4\">\n            Your browser does not support the video tag.\n        </video>\n    </div>\n    <p>\n        The approach of this chapter is a little bit different to the one from the modelling chapter. Since it will anyway be almost \n        impossible to follow along and repeat the exact same steps I did, I encourage you to explore this chapter a little bit on your \n        own. After that create your own little animation following the process I did. Maybe in your animation the \n        robot will bring the vase with the plant to fall over, just be creative.\n    </p>\n</div>";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ (function(module) {

"use strict";
module.exports = "<div>\n  <button type=\"button\" id=\"menu_button\" (click)=\"myFunc()\">\n    <img src=\"./assets/images/menu_icon.png\" alt=\"menu\" id=\"menu_icon\">\n  </button> \n  <h1 class=\"ui header\" style=\"text-align:center; margin-top: 30px; margin-bottom: 50px; \">\n    {{ title }}\n  </h1>\n  <div class=\"ui grid container\" style=\"min-width:85%;\">\n    <div class=\"one wide column\">\n      <div class=\"ui left fixed vertical menu\" id=\"menu\" style=\"max-width:25%; overflow: auto;\">\n        <a class=\"item\" id=\"menu_item\">\n          <button type=\"button\" id=\"menu_button\" (click)=\"myFunc()\">\n              <img src=\"./assets/images/menu_icon.png\" alt=\"menu\" id=\"menu_icon\">\n          </button>\n        </a>\n        <a class=\"item\" routerLink=\"/welcome\" routerLinkActive=\"active\">\n          Welcome\n        </a>\n        <div class=\"item\">\n          <h4>Setup</h4>\n          <a class=\"item\" routerLink=\"/required-tools\" routerLinkActive=\"active\">\n            Required Tools\n          </a>\n          <a class=\"item\" routerLink=\"/about-elearning\" routerLinkActive=\"active\">\n            About this E-Learning\n          </a>\n        </div>\n        <div class=\"item\">\n          <h4>Part 1: Introduction to Blender</h4>\n          <a class=\"item\" routerLink=\"/blender-ui\" routerLinkActive=\"active\">\n            UI Overview\n          </a>\n          <a class=\"item\" routerLink=\"/theory-coordinate-system\" routerLinkActive=\"active\">\n            Theory: Coordinate systems\n          </a>\n          <a class=\"item\" routerLink=\"/basic-tools\" routerLinkActive=\"active\">\n            Basic Tools\n          </a>\n          <a class=\"item\" routerLink=\"/theory-modifiers\" routerLinkActive=\"active\">\n            Theory: Modifiers\n          </a>\n          <a class=\"item\" routerLink=\"/basic-modifiers\" routerLinkActive=\"active\">\n            Basic Modifiers\n          </a>\n          <a class=\"item\" routerLink=\"/theory-curves\" routerLinkActive=\"active\">\n            Theory: Curves\n          </a>\n        </div>\n        <div class=\"item\">\n          <h4>Part 2: Modelling</h4>\n          <a class=\"item\" routerLink=\"/modelling-chapter-overview\" routerLinkActive=\"active\">\n            Modelling chapter overview\n          </a>\n          <a class=\"item\" routerLink=\"/model-body\" routerLinkActive=\"active\">\n            Wall-E Body\n          </a>\n          <a class=\"item\" routerLink=\"/model-wheels\" routerLinkActive=\"active\">\n            Wall-E Wheels\n          </a>\n          <a class=\"item\" routerLink=\"/model-head\" routerLinkActive=\"active\">\n            Wall-E Head\n          </a>\n          <a class=\"item\" routerLink=\"/model-arms\" routerLinkActive=\"active\">\n            Wall-E Arms\n          </a>\n          <a class=\"item\" routerLink=\"/model-plant\" routerLinkActive=\"active\">\n            Vase and Plant\n          </a>\n          \n        </div>\n        <div class=\"item\">\n          <h4>Part 3: Coloring and Rendering</h4>\n          <a class=\"item\" routerLink=\"/theory-mat-tex\" routerLinkActive=\"active\">\n            Theory: Materials and Textures\n          </a>\n          <a class=\"item\" routerLink=\"/coloring-and-rendering\" routerLinkActive=\"active\">\n            Coloring and Rendering\n          </a>\n        </div>\n        <div class=\"item\">\n          <h4>Part 4: Rigging and Animation</h4>\n          <a class=\"item\" routerLink=\"/animation-chapter-overview\" routerLinkActive=\"active\">\n            Animation chapter overview\n          </a>\n          <a class=\"item\" routerLink=\"/theory-rigging\" routerLinkActive=\"active\">\n            Theory: Rigging\n          </a>\n          <a class=\"item\" routerLink=\"/rigging-and-animation\" routerLinkActive=\"active\">\n            Rigging and Animation\n          </a>\n        </div>\n        <div class=\"item\">\n          <h4>Conclusion</h4>\n          <a class=\"item\" routerLink=\"/conclusion\" routerLinkActive=\"active\">\n            Where to go from here?\n          </a>\n        </div>\n      </div>\n    </div>\n    <div class=\"fifteen wide column\">\n      <router-outlet (activate)=\"onActivate()\"></router-outlet>\n      <div style=\"text-align:center; margin: 50px;\">\n        <button class=\"ui button primary\" [routerLink]=\"getLast()\" *ngIf=\"!getHideBackButton()\">Back</button>\n        <button class=\"ui button primary\" [routerLink]=\"getNext()\" *ngIf=\"!getHideNextButton()\">Next</button>\n      </div>\n      <app-about></app-about>\n    </div>\n  </div>\n\n</div>";

/***/ }),

/***/ 866:
/*!***************************************************************************************!*\
  !*** ./src/app/basic-video-component/basic-video-component.component.html?ngResource ***!
  \***************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<div>\n    <video autoplay controls>\n        <source src=\"{{videopath}}\" type=\"video/mp4\">\n        Your browser does not support the video tag.\n    </video>\n</div>\n";

/***/ }),

/***/ 9954:
/*!*******************************************************************************!*\
  !*** ./src/app/basics-blender-ui/basics-blender-ui.component.html?ngResource ***!
  \*******************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<h2 id=\"headline\">UI overview</h2>\n<div id=\"start_content\">\n    <div class=\"ui info message\">\n      <h5>In this section you will learn:</h5>\n      <ul>\n        <li>What the settings on your first startup mean</li>\n        <li>What is displayed in the different sections of the UI</li>\n        <li>How to adjust the windows to your needs</li>\n        <li>What the startup Blender scene consists of</li>\n        <li>How to navigate around the viewport</li>\n        <li>How to delete and insert objects into the scene</li>\n        <li>How to create your first model</li>\n        <li>What orthographic view means</li>\n        <li>How to switch the view to different sides</li>\n        <li>How to join objects</li>\n      </ul>\n    </div>\n    <div class=\"vdiv\">\n      <app-basic-video-component videoname=\"Video_1_UI.mp4\"></app-basic-video-component>\n    </div>\n    <div class=\"collapsible-component\">\n      <app-collapse-component message=\"I want to read\" qId=\"ID1\">\n        <p>\n          Welcome to the Blender learn environment. Blender is a very interactive 3D Modelling software. So please follow along to the \n          tutorials actively. This will help you to remember the tools and their shortcuts. We will be working with the Blender version 2.93. \n          When you first open up Blender you will be greeted with a dialog like this. You can choose a few options for the quick setup. \n          The default language which we will be using is english. Than you can decide on the version of shortcuts you want to use. \n          We go with the default one here too. The next option is just about wether you want to use the left or right mouse button to select \n          things. And the one after that is what the space bar should activate. In the current setting when you press space bar, you will \n          play the animation. And the last thing you can choose is the theme. We go with the dark theme here. Then just save the settings. \n          We will go to the dault starting window.\n        </p>\n        <p>\n          On the default starting window you have several options again. You can either create a new file, use the resources labelled as \n          getting started or open a blender file directly if you have one. We will now create a new general file.\n        </p>\n        <p>\n          When you create a new file in Blender, a default scene will be created with it. This scene will include a camera, a cube and a light. \n        </p>\n        <p>\n          The starting configuration is the \"Layout workspace\". In there you can see four predefined regions or areas: \n          The 3D viewport is the main screen where you can see the scene and directly interact with it. Then there is the hierarchy or \n          structure region in which all the objects in the scene are displayed in kind of a tree structure. You can organize objects in \n          there as groups as a parts of packages. The area under that is the properties panel. In there you can find all of the information \n          you may need about an object or specific settings. For example can you check out and modify the object properties like the \n          transformations: location, rotation and scale. You can also see the materials used within this specific object and create new ones. \n          The last region is the one under the 3D viewer, the animation panel. Here you can play an animation that you have created. Since \n          we didn't define anything yet, we are per default on the first frame.\n        </p>\n        <p>\n          If you want to focus on one particular region than you may press <strong>CTRL + Space Bar</strong> for a fullscreen window and \n          the same again to leave it. As you see I have installed a screencast plugin for you to see which buttons I am currently pressing. \n          This should help you to remember the shortcuts we will learn over the course of the tutorials.\n        </p>\n        <p>\n          Another way of manipulating an object besides the properties pannel would be to press the <strong>N key</strong>. This will show \n          the sidebar here in which you find additional options for example the Tool, Item or View panel. You may also just click here to \n          open the panels. In the Item panel you may also inspect and manipulate some object properties. As you can see already there a \n          often several ways to achieve the same thing in Blender.\n        </p>\n        <p>\n          To finish the overview of the menus: In this corner you will find the main menu in which you have the basic functionalities of \n          saving, importing and exporting files, adjust preferences and undo the past. Specific to Blender of course the Render options \n          and a few options about workspaces. We will talk about them and what they are shortly.\n        </p>\n        <p>\n          We are currently in the \"Object Mode\" within the 3D viewer, in the next tutorial we will also see the Edit Mode which does give \n          you other options to manipulate an object. The menu in this mode will also give you some more options. We are mostly interested \n          in the \"Add\" and \"Object\" category. With \"Add\" you may add new objects to the scene e.g. 3D objects like cubes, spheres and \n          cylinders. Also 2D objects like planes and circles. You may also add curves like e.g. Bezier curves to the scene. The \"Object\" \n          category summarises again a lot of the feature we may use to manipulate an object in the scene. For most of the things we will \n          probably use shortcuts. A very convenient thing in Blender is that if you hover over an tool or option there will be an \n          explanation of what that tool or option does.\n        </p>\n        <p>\n          The last menu to know here is the menu on the right. These are all about what will be shown within the scene. The two options \n          here are about the Gizmos and Overlays in the scene and can be deactivated or refined in what they shall show right now. \n          The X-Ray option will be very important for us later when we talk about the Edit Mode because you can see through the objects \n          with it. The options after that are about Shading and will be discussed detailed later. An important overlay is the coordinate \n          system displayed here. With this you can always see the global coordinate system relative to you and thereby helps you to orientate.\n        </p>\n        <p>\n          To move within the scene you have to use the mouse. Scroll with the mouse wheel to zoom within the scene. Press the mouse \n          wheel to rotate around a point in the scene. Press <strong>Shift + mouse wheel</strong> to move around in the scene. \n          You may also use the arrows on the numpad on the right side of your keyboard to move small steps within the scene in each \n          direction. When you want to focus again on a specific object, select the object with you left mouse and press the commata on \n          the numpad. When you select an object you will also see that it will be selected within the hierarchy area.\n        </p>\n        <p>\n          We talked about work spaces before. The \"layout\" space we see currently is on of several workspaces that are predefined. \n          You may also find the workspaces Modeling, Sculpting and so on. The interesting thing to note, is that it does not matter \n          which workspace you are in. Actually you can even create your own workspace with your very own regions. To demonstrate this \n          we will create a new workspace here from the default \"Layout\" workspace and customize it as we want. You may create new regions \n          by clicking in the corner and dragging your mouse in one direction. To delete it, you do the same thing but in the other direction \n          until you see an arrow sign. We will now create multiple 3D regions and rename the workspace to \"Multiple windows\". Notice that \n          you may also change the region from the 3D view space to other region types. For example to the Image Editor or the shader Editor.\n        </p>\n        <p>\n          For now we will go back to the normal Layout workspace. We will now learn how to add and remove objects in the scene. We have \n          seen so far that we can add objects here in the \"Add\" option. Let's now add an cylinder. When we add the object, we will \n          see that it will be created at the center of the coordinate system, to be specific at the position of the 3D cursor. Let's \n          move the object out of the way for now. You can use the tool \"Move\" or the Shortcut <strong>G</strong> for this. The 3D cursor \n          is per default in the center of the world, sometimes you move it by mistake by clicking <strong>SHIFT + right click</strong>, \n          to get it back to it's position type <strong>SHIFT + S</strong> and click \"Cursor to World origin\".\n        </p>\n        <p>\n          To modify our cylinder we may use rotation, moving or scaling. Let's now scale it down with the \"Scale\" tool or the \n          shortcut <strong>S</strong>. If you use the shortcuts for these tools here, memorise that you can restrict these to a \n          specific axis by additionaly clicking <strong>X,Y or Z</strong>.\n        </p>\n        <p>\n          Scale the cylinder now down and extend the length, you may want to see it from the frontview (by clicking on X on the coordinate \n          system). It is supposed to resemble a leg of a tiny cube figure. Copy the cylinder now by clicking <strong>CRTL + C</strong> \n          and <strong>CTRL + V</strong> or <strong>SHIFT + D</strong>. If you accidently created to many legs, you may delete it by \n          selecting the object and clicking <strong>delete or X</strong>. The later one will show you an extra dialog if you are sure. \n          Add another cylinder and rotate it a bit. This will be an arm. You can copy and then mirror the object by the Z axis to \n          create the second arm. Now you can see that all new objects are listed in the hierarchy next to our initial objects. Select \n          all the objects of the cube person and then press <strong>CTRL + J</strong> to combine them. We will call the object \"cube figure\".\n        </p>\n        <p>\n          Let's now go back to our custom workspace and inspect the figure from different perspectives. Before we do anything we have to \n          apply the transformations to adjust the axis of the figure again. Press <strong>CTRL + A</strong> do apply it. By clicking \n          on the \"Local\" option here, you may see the local axis of the object. If you rotate the object you may see that it rotates \n          with the object compared to the default view. When you click on the coordinate system, you can see that the view perspective \n          changes. On default we see a perspective view, but here we will see an orthographic view of the object, which helps by modifying \n          an object from the side. Remember this custom workspace when you read the Theory part about global and local axis.\n        </p>\n        <p>Thank you for your participation.</p>\n        <p>This concludes the tutorial for this session.</p>\n      </app-collapse-component>\n    </div>\n    <div class=\"quiz\">\n      <app-quiz-component question=\"Can you remember how to toggle fullscreen on a specific area?\" \n        correctAnswer=\"Ctrl + Spacebar\" [answers]=\"['Ctrl + Spacebar','Spacebar','Alt + Spacebar']\" qId=\"QID1\"></app-quiz-component>\n      <app-quiz-component question=\"At what position will objects you add in be created?\" \n        correctAnswer=\"At the 3D cursor\" [answers]=\"['At the current mouse cursor position','At the 3D cursor',\n        'At a random position within space and time']\" qId=\"QID2\"></app-quiz-component>\n    </div>\n    <h3 id=\"toc_further_references\">Further references</h3>\n    <div class=\"ui warning message\">\n        <ul>\n          <li><a href=\"https://docs.blender.org/manual/en/latest/\" target=\"_blank\">Official Manual for User Interface</a></li>\n          <li><a href=\"https://github.com/nutti/Screencast-Keys\" target=\"_blank\">Screencast-Keys Plugin</a></li>\n        </ul>\n    </div>\n</div>";

/***/ }),

/***/ 7156:
/*!*****************************************************************************!*\
  !*** ./src/app/basics-modifiers/basics-modifiers.component.html?ngResource ***!
  \*****************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<h2 id=\"headline\">Basic Modifiers</h2>\n<div id=\"start_content\">\n    <div class=\"ui info message\">\n        <h5>In this section you will learn:</h5>\n        <ul>\n          <li>What modifiers are</li>\n          <li>How to use the following modifiers: Array, Boolean, Mirror, Screw, Curve</li>\n        </ul>\n      </div>\n    <div class=\"vdiv\">\n        <app-basic-video-component videoname=\"Video_3_Modifiers.mp4\"></app-basic-video-component>\n    </div>\n    <div class=\"collapsible-component\">\n      <app-collapse-component message=\"I want to read\" qId=\"ID1\">\n        <p>Welcome to this session.</p>\n        <p>\n          Last time we started a family of figures. Today we are going to finish it. We will learn what modifiers are and how to use them.\n        </p>\n        <p>\n          This time we will work again in the Object Mode. Before we start we will create five new standard cube figures by copying them. \n          Then we make all but the one figure we are currently working on invisible. To find the modifiers you have to select an object \n          and find the modifier properties in the properties panel. One useful thing about modifiers is, that you do not have to apply \n          them directly, but you can play around with them while modelling in a non-destructive way on an object.\n        </p>\n        <p><u>Array Modifier:</u></p>\n        <p>(See manual: <a href=\"https://docs.blender.org/manual/en/latest/modeling/modifiers/generate/array.html\">here</a>)</p>\n        <p>\n          We start with the Array Modifier. This one helps you to create an array or many of a kind of one object. For this one we create \n          a new cube, make it very small and and thin and tall. Then we add the modifier and add a high count like 15 or 20. Then we change \n          the relative offset to the Y axis. Add another array modifier and do the same thing but to the X axis. To finish this figure, \n          apply the modifiers and join all objects together.\n        </p>\n        <p><u>Boolean Modifier:</u></p>\n        <p>(See manual: <a href=\"https://docs.blender.org/manual/en/latest/modeling/modifiers/generate/booleans.html\">here</a>)</p>\n        <p>\n          The boolean modifier is suprisingly related to boolean operations. In the context of Blender this means we can use intersection, \n          union and difference between two objects. Similar to boolean operations on sets. To subtract a cylinder from the cube figure \n          and thereby make a whole. Move the cylinder on the cube in whatever position you want. Watch out that you only intersect with \n          the cube and not also the arms or legs. Then add the modifier to the cube figure and select the cylinder within the boolean \n          modifier choosing difference. Click apply and delete the cylinder to finish it.\n        </p>\n        <p><u>Mirror Modifier:</u></p>\n        <p>(See manual: <a href=\"https://docs.blender.org/manual/en/latest/modeling/modifiers/generate/mirror.html\">here</a>)</p>\n        <p>\n          For the Mirror Modifier we want to create a pair of shoes for the figure. For that we create a new cube and scale it to a \n          reasonable shoe size. For now we only have one shoes, but want to add another one on the other side. In this cas we can use \n          the Mirror to mirror it on the other side. The best usage of the modifier is to additional add a custom empty axis that we use \n          for mirroring, we call it Shoe Mirror. When we add the Mirror Modifier to the shoe we can select the Shoe Mirror and adjust the \n          axis parameter to the Y axis. Now a new shoe appears in the right position. if you want to beautify it, you can add a Bevel \n          modifier on top and adjust the settings. This modifier works similar to the Bevel tool, just on the whole object. So all \n          corners are rounded. To finish this figure apply both modifiers and join the objects after that. \n        </p>\n        <p><u>Screw Modifier:</u></p>\n        <p>(See manual: <a href=\"https://docs.blender.org/manual/en/latest/modeling/modifiers/generate/screw.html\">here</a>)</p>\n        <p>\n          For this figure we want to create a swim ring. The most easy way to do this is to build a body out of rotation. The modifier \n          we are going to use is called the Screw Modifier. First add a circle to the scene, turn it 90 degrees and scale it a bit down. \n          Similar to the mirror modifier we need an origin point where we want to rotate the object around. Therefore we create an empty \n          axis. Now we add the Screw modifier to the circle. See that a sphere will ermege since the object is currently still in the \n          center. If we now move the circle away from it we will see the ring appear. We can now scale it to the right size, move its \n          to the wanted position and apply the modifier.\n        </p>\n        <p><u>Curve Modifier:</u></p>\n        <p>(See manual: <a href=\"https://docs.blender.org/manual/en/latest/modeling/modifiers/deform/curve.html\">here</a>)</p>\n        <p>\n          The last figure we are going to create wants to have a tail. Therefore we want to use the Curve Modifier where we can model \n          something with a curve. First of all let's create a Bezier Curve. It's important that we set the origin of the local axis to \n          the start. To do this, we move it along an axis until, the start of the curve is at the center of the world. Now we can use \n          the 3D Cursor there to adjust the origin. Just right right click and use the option \"Origin to 3D cursor\". Now we can begin \n          modelling our tail in whatever position we want it. Let's first move it along to a good position and the we go into the Edit \n          Mode to adjust the Curve points and handles. If we want to add a point we can use Extrude or the shortcut <strong>E</strong>. \n          Use the orthographic views to make it more easy to follow and model the way of the curve. If you are happy with the tail, \n          we go into the second part of this. Add a cylinder and scale it down, now place it on the start of the curve. Now we have to \n          add two modifiers. First add the array modifier and adjust it accordingly so that we have a long line. Now we can add the curve \n          modifier and add our defined curve. We should now be able to move our tail along the curve. If we want to finish our model, \n          just apply both modifiers and join the figure together.\n        </p>\n        <p>\n          Now we have seen all of the relevant basic tools and modifiers we are going to need for future sessions. Also we have completed \n          our family of cube figures.\n        </p>\n        <p>\n          <u>Task:</u> If you want an extra challenge: Try to create the most interesting hat for our first figure using every modifier we \n          learned in this session.\n        </p>\n        <p>Thank you for your participation</p>\n        <p>This concludes the tutorial for this session.</p>\n      </app-collapse-component>\n    </div>\n    <div class=\"quiz\">\n        <app-quiz-component question=\"What is the main purpose of the edit mode?\" \n          correctAnswer=\"To modify an objects mesh data\" [answers]=\"['To edit the color of objects','To modify an objects mesh data',\n          'To animate an object']\" qId=\"ID1\"></app-quiz-component>\n    </div>\n    <h3 id=\"toc_further_references\">Further references</h3>\n    <div class=\"ui warning message\">\n        <ul>\n          <li><a href=\"https://docs.blender.org/manual/en/latest/editors/3dview/modes.html\" target=\"_blank\">Additional documentation on object modes</a></li>\n        </ul>\n    </div>\n</div>";

/***/ }),

/***/ 226:
/*!*********************************************************************!*\
  !*** ./src/app/basics-tools/basics-tools.component.html?ngResource ***!
  \*********************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<h2 id=\"headline\">Basic Tools</h2>\n<div id=\"start_content\">\n    <div class=\"ui info message\">\n      <h5>In this section you will learn:</h5>\n      <ul>\n        <li>The difference between operations in object and edit mode</li>\n        <li>How to toogle the X-Ray option</li>\n        <li>How to see and manipulate faces, edges and vertices manually</li>\n        <li>How to manipulate and fix meshes manually</li>\n        <li>How to hide objects</li>\n        <li>How to use the following tools and their shortcuts: Extrude, Inset, Bevel, Loop Cut, Knife, Merge</li>\n      </ul>\n    </div>\n    <div class=\"vdiv\">\n      <app-basic-video-component videoname=\"Video_2_Basics.mp4\"></app-basic-video-component>\n    </div>\n    <div class=\"collapsible-component\">\n      <app-collapse-component message=\"I want to read\" qId=\"ID1\">\n        <p>Welcome to this session.</p>\n        <p>\n          Today I want to show you some basic tools in Blender. You will learn how to use the Edit Mode and learn \n          the difference to the Object Mode we saw in the last session.\n        </p>\n        <p>\n          Let's first go into the Layout view. We will refresh some basic operations. Transform the figure back to \n          it's normal position and move it up, out of the way. Then build a little plattform for the figure and move \n          the plattform up until it's roughly standing on the XY-plane. Then place the figure on top of it. You may \n          want to stop the video and try it for yourself. The solution follows shortly.\n        </p>\n        <p><u>Solution:</u></p>\n        <p>\n          Set all transforms to zero. Use the move tool. We will build a little table as a plattform. Add a new cube \n          and scale it wide to the side and scale it small in its height. Then we add another cube and scale it in the \n          form of a tables leg. Copy the leg three times, place it at the right position and combine all the objects to \n          one. Then move both objects to its final position.\n        </p>\n        <p>\n          Now we will select the figure and inspect it inside the Edit Mode. Until now we have only transformed the whole \n          objects, now we will go inside of one object and modify it's mesh. To switch between different granularity of \n          the view, select the wanted option in the new menu in the left corner. You will notice that we can now see all \n          the vertices, edges and faces within an object and you probably can guess that we can modify each of them. \n        </p>\n        <p>\n          As stated in the last session we will now have a look at the X-Ray option again. In normal view you can select \n          each vertex,edge or face you can see. In the X-Ray mode you can select even the ones hidden on the backside or \n          inside of an object.\n        </p>\n        <p>\n          Before we will learn our new tools waiting at the left side, we will first see how we can handle the mesh and \n          even fix broken meshes. For that we go into the Face selection mode and click at the top face of the figure. \n          Than we press the right mouse button and find the option to delete the face. Now we can see the inside of our figure.\n        </p>\n        <p>\n          Go now into the vertex selection mode and select two points. This counts as the same action as selecting an \n          edge in the edge selection. Now click the right mouse button and click on subdivide, a new vertex will appear \n          between the other ones. Do the same thing on the other side. We can now create our own edge by selecting the \n          two new points and pressing <strong>F</strong>. If you would have selected at least three points or (equivalent \n          to a face) then <strong>F</strong> will create a new face. We will do this now for left and the right side here.\n        </p>\n        <p>\n          Now we have two faces at the top. To merge them together, we can just dissolve the vertices we just created, so \n          that we have the same face as it was at the beginning. With this knowledge you can fix a mesh if there are any \n          issues (for example after using some modifiers).\n        </p>\n        <p>\n          In Edit Mode you have the same \"Add\" option as before but it does not behave equally. If you add an object in \n          the Object Mode, it will be a seperate object. But if you add it in the Edit Mode, it will automatically belong \n          to this object and will be counted as part of it's mesh and local axis. If you want to merge objects together \n          into one, you can use a shortcut we used before. With <strong>CTRL + J</strong> you join objects together. This \n          is equivalent to just adding all the objects within the Edit Mode.\n        </p>\n        <p>\n          Let's now go back into the Object Mode and create six copies of our figure. Place them in front of our main figure. \n          You can make the ones invisible that you are currently not modifying by unchecking their visibility in the \n          scene collection.\n        </p>\n        <p><u>Extrude:</u></p>\n        <p>(See manual: <a href=\"https://docs.blender.org/manual/en/latest/modeling/meshes/editing/face/extrude_faces.html\">here</a>)</p>\n        <p>\n          Starting with the first figure, we want to learn the Extrude tool. To use this tool, we will first select a \n          face and then select the tool or press the shortcut <strong>E</strong>. When you now move the mouse up, you basically \n          drag the face along the normal vector of the face and create four new points. When you have the face selected you can also \n          scale it by clicking <strong>S</strong>. If you use these two tools you can easily create your first custom designs. \n          For example we will create a hat for this figure.\n        </p>\n        <p><u>Inset:</u></p>\n        <p>(See manual: <a href=\"https://docs.blender.org/manual/en/latest/modeling/meshes/editing/face/inset_faces.html\">here</a>)</p>\n        <p>\n          The next tool is the Inset tool. This one helps you to create new faces facing inwards of an face. Easier to show \n          than to explain this one, press the shortcut I after selcting the front face or the equivalent tool on the left side. \n          Than you can define how far inside you want to create a new inner face. Also here, four new points are created. \n          Combining this tool with extruding we can create an indentation. You can also do the same by insetting twice and then \n          moving the points inside.\n        </p>\n        <p><u>Bevel:</u></p>\n        <p>(See manual: <a href=\"https://docs.blender.org/manual/en/latest/modeling/meshes/editing/edge/bevel.html\">here</a>)</p>\n        <p>\n          The Bevel tool is very helpful to create rounded corners. This time we will select all cube faces or all vertices \n          of the cube. To use the Bevel tool you can use the shortcut <strong>CTRL + B</strong>. If you scroll with the mouse \n          wheel more points can be added to the corners. More points create a smoother surface.\n        </p>\n        <p><u>Loop Cut:</u></p>\n        <p>(See manual: <a href=\"https://docs.blender.org/manual/en/latest/modeling/meshes/tools/loop.html\">here</a>)</p>\n        <p>\n          Sometimes you need to make a cut around the whole object. In these cases you want to use the Loop Cut. You can use \n          it with the shortcut <strong>CRTL + R</strong>. Similar to bevel you can influence the behavior of the tool with \n          the mouse wheel. By scrolling you add more cuts to the object. For our cube figure we want to create two cuts at \n          the top and two cuts at the bottom. The should ach be very near to each other. Then we go into the ortographic \n          front view, toogle on the X-Ray and select the upper part of the cube. Move it to the side and adjust the points. \n          Do the same things but to the other side on the bottom.\n        </p>\n        <p><u>Knife:</u></p>\n        <p>(See manual: <a href=\"https://docs.blender.org/manual/en/latest/modeling/meshes/tools/knife.html\">here</a>)</p>\n        <p>\n          Watch out. This figure will be very scary. Not only do we work with the Knife tool, but also will we use the figure \n          as kind of a halloween pumpkin. The shortcut for the Knife is the <strong>key K</strong>. Contrary to the loop cut, \n          the knife only cuts one side in the dafult configuration which you can see in the Tool panel. You can now use it \n          to cut whatever you want into the front face of the cube. Press <strong>Enter</strong> to cut the drawn lines out. \n          If you want to use straight lines use the <strong>key A</strong> (* was changed to A). With the constraint mode you \n          can cut straight according to your current view. So the best option is to be in the orthographic side view when \n          using it. In the end you can use Extrude to finish your pumpkin face.\n        </p>\n        <p><u>Merge:</u></p>\n        <p>(See manual: <a href=\"https://docs.blender.org/manual/en/latest/modeling/meshes/editing/mesh/merge.html\">here</a>)</p>\n        <p>\n          The last and most easy tool is the Merge operation. For this just select any points you want to merge and press \n          <strong>M</strong>. You will have several options how you want to merge them. We will merge them at the center. \n          Sometimes its also useful to merge points by distance if they almost overlap each other. If you want you can \n          use the merge tool again on the arms of the figure.\n        </p>\n        <p>\n          You can now go back to the Object mode and see the whole family of figures we created. Next time we will extend to \n          family to their modifier cousins.\n        </p>\n        <p>\n          <u>Task:</u> If you want an extra challenge: Try to create your own figure using every tool we learned in this session.\n        </p>\n        <p>Thank you for your participation</p>\n        <p>This concludes the tutorial for this session.</p>\n      </app-collapse-component>\n    </div>\n    <div class=\"quiz\">\n      <app-quiz-component question=\"What is the shortcut for filling a face between selected edges or vertices?\" \n        correctAnswer=\"F\" [answers]=\"['F','Shift+F',\n        'Alt+F']\" qId=\"ID1\"></app-quiz-component>\n      <app-quiz-component question=\"What is the shortcut for extruding?\" \n        correctAnswer=\"E\" [answers]=\"['Depends on what you have selected','E',\n        'Strg+E']\" qId=\"ID1\"></app-quiz-component>\n      <app-quiz-component question=\"In the video I merged four vertices to create a pyramid shape. Can you remember the shortcut?\" \n        correctAnswer=\"M or Shift+M depending on the Blender version\" [answers]=\"['There is no shortcut to do this','Strg+M',\n        'M or Shift+M depending on the Blender version']\" qId=\"ID1\"></app-quiz-component>\n      <app-quiz-component question=\"What is the main reason you want to add objects in edit mode\" \n        correctAnswer=\"There is no need to join later\" [answers]=\"['There is no need to join later','To save time',\n        'To optimize the mesh']\" qId=\"ID1\"></app-quiz-component>\n    </div>\n</div>";

/***/ }),

/***/ 2329:
/*!*********************************************************************************!*\
  !*** ./src/app/collapse-component/collapse-component.component.html?ngResource ***!
  \*********************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<button type=\"button\" class=\"collapsible\" (click)=toggle()></button>\n<div class=\"collapsible-content\" [ngClass]=\"{'hidden': isHidden}\">\n    <ng-content></ng-content>\n</div> \n";

/***/ }),

/***/ 9723:
/*!*****************************************************************************************!*\
  !*** ./src/app/coloring-and-rendering/coloring-and-rendering.component.html?ngResource ***!
  \*****************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<h2 id=\"headline\">Coloring and Rendering</h2>\n<div id=\"start_content\">\n    <div class=\"ui info message\">\n      <h5>In this section you will learn:</h5>\n      <ul>\n        <li>How to use the shading workspace to detail the coloring of your objects</li>\n        <li>How to insert textures and use them</li>\n        <li>How to setup a scene by using a camera</li>\n        <li>How to play with lights</li>\n        <li>How to render an image</li>\n      </ul>\n    </div>\n    <div class=\"ui warning message\">\n      <ul>\n        <li>Idea and execution of the rust texture adapted from: <a href=\"https://www.youtube.com/watch?v=hccqcCIGGUw\" target=\"_blank\">Blender - Procedural Rust in Blender 2.8 Nodes</a></li>\n      </ul>\n    </div>\n    <div class=\"ui info message download\">\n      <h5>Please grab the material needed for this section <a href=\"./assets/files/leaf_texture.jpg\" target=\"_blank\" download=\"leaf_texture.jpg\">here</a></h5>\n    </div>\n    <div class=\"vdiv\">\n      <app-basic-video-component videoname=\"Video_9_Coloring.mp4\"></app-basic-video-component>\n    </div>\n    <div class=\"collapsible-component\">\n      <app-collapse-component message=\"I want to read\" qId=\"ID1\">\n        <p>Welcome to this session.</p>\n        <p>\n          Today we are going to learn how to use some other workspaces than Modeling, how to texture our models and finally we will \n          render a scene as a photo.\n        </p>\n        <p>\n          Also we want to finish the plant we started in the last session. As you remember we didn't yet apply the modifiers of the \n          leaf model, so that we can texture it beforehand. For this particular textur, we want to use an image as a texture I already \n          prepared. Select the leaf and go into the UV Editing workspace. There we can open the prepared leaf texture. It will we \n          opened in the left window here. Instead of painting the image on top of the model, we kind of do the exact opposite. The \n          goal is to unwrap the 3D mesh so that we have a 2D version of it, that can be placed on top of the texture image so that \n          it can be referenced back.\n        </p>\n        <p>\n          Before we can unwrap the mesh though, we have to tell Blender where we want to cut the mesh open, so that we can transform \n          it into 2D. This process is quite easy for the leaf, as we can just select the edge around the object from the side with \n          <strong>ALT select</strong>. To mark this edge for UV unwrapping, right click and chose the option \"Mark seam\", now the seam \n          is marked red in the right window. To unwrap the mesh now, select all of the points, I used the shortcut <strong>A</strong> \n          here to do this and then press the shortcut <strong>U</strong> and choose \"unwrap\" to create the 2D mesh that will be \n          displayed now on the texture image on the left.\n        </p>\n        <p>\n          Now we can begin to move the leaf front and back parts to their correct position as they are currently just placed somewhere \n          on the image. Here the brush select tool with the shortcut <strong>C</strong> helps a lot to select all the relevant points. \n          Now that we have a rough placement, we may also want to see the result of the texture editing on the final model on the right. \n          For this we have to add the texture image also to the Coloring pipeline of the model. Currently we just defined a basic green \n          color for this model, but now we want to change this. For this reason we go into the Shading workspace. As we have still \n          selected the leaf and there is only one color, the correct color is already placed inside the slot. You may remember the \n          shading options from the property panel on the right side. But in this workspace we can define it more thorough.\n        </p>\n        <p>\n          We can define the shading here via nodes and edges, this is quite similar to visual coding: the flow is from the left node \n          to the right, so the inputs of a node are on the left and the output is on the right. The basic color definition is composed \n          of the Principal BSDF and a Material output. The only thing we want to change in this shading is the base color which is \n          currently just green. Instead of this we want to add an image texture instead. So we add the node \"Image Texture\", open \n          our leaf texture and connect the color output to the base color input. In the 3D viewer above you can directly see the \n          impact of the change.\n        </p>\n        <p>\n          Let's now go back to the UV Editing workspace as we still have to properly align the mesh to the texture. A tool I find \n          pretty useful here is the Proportional Editing we used before, this time however I take the \"Smooth\" option which is more \n          fitting for the task. Then you can easily change the points by moving and scaling to align them better. The direct effect \n          can be seen on the right. Here the most important thing is to just not have white edges as they can be seen easily. Repeat \n          the same process for the back side of the leaf. In the end you can check on the right, if the texture seamingly aligns at \n          the edges.\n        </p>\n        <p>\n          As you may have noticed because we use the same color for the stem it also changed when we added the texture. If you go \n          back to the UV Editing with the stem selected you can see the reason why. It is also just randomly placed over the image. \n          Here the unwrap is automaticly done, I additonaly create a seam on the top and bottom and one along the steam to show how \n          you would cut a more complex object. For our purpose however you would not have to do this. When all seams are marked, unwrap \n          it again with the shortcut <strong>U</strong>. Then I just scaled the whole steam mesh down and placed it inside the leaf \n          texture. I do this here because I wanted the same green color with some additional variation. You may also define your \n          own color for it or use another texture image.\n        </p>\n        <p>\n          Now the plant is fully done, so we can apply our modifiers and join the objects together. The helping object like the \n          Bezier curves and empty objects can now be deleted. In the end make the vase visible again and position the plant inside.\n        </p>\n        <p>\n          Then we have a look at the vase and re-define the colors of it. As we learned before, select the vase and go into the \n          Shading workspace. To select the orange vase color, go into the slot options and find it there. This time instead of using \n          a texture we want to define a procedural color just using nodes.\n        </p>\n        <p>\n          Currently the vase looks too smooth, so we want to adjust the normals by adding a bump node. This node alone does not do \n          very much, because there is no information of where to add something. Here we use a random Noise Texture and use the color \n          information to go into the Height input of the bump node so that we generate random bumps on the vase. As you see this is \n          a bit too coarse, so I scale it a bit and also add some detail. This looks more like the right texture but still too much \n          of it, so I decrease the strength of the bump node to a more appropriate level, here roughly 0.12. Then to finish the plant \n          we have to take care of the dirt color. For this we use the same trick of using a bump node and a noise texture, this time \n          having it more coarse. Then I also increase the roughness and decrease the specular because dirt normally does not reflect \n          that much light but instead absorbs it. You may also adjust the Base color at any point.\n        </p>\n        <p>\n          Now we can scale our objects accordingly and join them together. As we are done working with the plant I set its position \n          next to our robot, so we have a better height comparison. At this point we have reached almost the finished product compared \n          with the reference image. Now want to tackle the shading of the robot.\n        </p>\n        <p>\n          To have the texturing looking better at the end, you can at this point smooth the faces of the parts that are supposed to \n          be round. Currently we still see too much of the hard edges there. Just select the relevant faces, right click and select \n          \"Shade smooth\", you will see that it significantly changes how the object looks. At the bottom corners I have noticed that \n          we have a corner still looking through. I ignored it here, but if you want you can just move the parts a bit outside to \n          cover the edges. At the neck I noticed that the points are not merged correctly at the center but overlapping, so I select \n          and merge them here by distance using the shortcut <strong>M</strong>. Then I proceed shading round faces at the neck and \n          the eye parts and then the arms. I notice that somehow the shading looks odd, so I go to the properties panel and choose \n          the auto smooth option for the normals. That normally fixes this issue. I then choose to go back to every object and also \n          use the auto smooth option there.\n        </p>\n        <p>\n          At last we also smooth the wheels at the relevant faces. This alone lets the robot look much cleaner. Here I also finally \n          realize that I positioned the upper legs part not correct and fix it.\n        </p>\n        <p>\n          Now that we have cleaned up the model, we go back to the shading. The first color we are going to finish is the normal not \n          rusty metal color. Here again we use the bump Node and a Noise texture we already know. This time however we use an additional \n          Noise Texture put into the other one to create an interesting texture here which I find quite fitting. Of course we have to \n          scale everything again to a more sane level. Here a scale of 40 for the front noise texture and roughly 10 for the back noise \n          texture worked quite well. As before we want to reduce the bump impact quite a bit. Then you can play around with the metal \n          and specular options a bit until you are happy with the result. For the last touch to make the metal look less clean I also \n          want to change the color on some parts. Here we use a ColorRamp Node to define a color gradient which is per default black \n          to white. Adding in the information of the front noise texture it already looks okay, so I just change the black color to a \n          more dirty brownish color.\n        </p>\n        <p>\n          Next we are going to tackle one of the big ones which is pretty similar: The rusty metal. Here we want to create a smiliar \n          texture like before but there are supossed to be bigger chunks in the texture where there are rusty holes inside the metal. \n          To do that we want to use a bump node again and use a noise texture. Additionally we need a texture coordinate and a mapping \n          node that helps to scale the texture. Then we want the noise to be very detailed, you will see the effect we want, if you \n          add a ColorRamp in between and change the left slider. Basically we erase most of the noisyness here, so that the noise parts \n          look like holes of damaged metal parts. To properly have the texture aligned you also have to apply the scaling transformation. \n          Just use the shortcut <strong>CTRL + A</strong> to apply it. As we have now defined the holes, we can use the same noise \n          information with a ColorRamp again to define the rust parts there. To do this we introduce some additional sliders in the \n          middle. So we have a reddish color tone on the middle left side and then immediatly a more greyish-yellowish tone right to \n          it. You may already see where this will go by looking on the 3D viewer. Left to the red-brownish tone I also use a more \n          lighter brown to create the rust effect. At last we want to add our metal texture here again, so we use another bump node \n          and some noise texture nodes as we did before.\n        </p>\n        <p>\n          The next color to tackle is the yellow rust, so you can basically copy our progress here and paste it in the yellow color \n          slot. Here you just adjust the edges again and also change the greyish-yellow to a more dark-yellow we used before for the \n          base color. I just copied the hex value and pasted it to the ColorRamp. When connecting the nodes, you can see that the \n          scale is not properly applied yet, so we have to do that now. Also don't forget to adjust the values for the Metallic and \n          Specular. Next we are going to do the same trick for the wheels and the rusty brown. You may want to stop the video and do \n          this for yourself. We will proceed in a second.\n        </p>\n        <p>\n          Again connecting the edges and adjusting the colors of the ColorRamp to a more brownish color. Applying the scale and then \n          adjusting the values in the end. The wheels are supossed to be much rougher and less specular. I also adjusted the noise a \n          bit to make it even rougher.\n        </p>\n        <p>\n          Next we have only some little color adjustments to make. Starting with the display, making it more reflecting and less rough, \n          same for the black display color behind it. Then the red button which can be a bit rougher but not so specular. Then we also \n          have the other red color at the back which can be made a bit more metallic and also smooth.\n        </p>\n        <p>\n          The detail at the arms should also be a bit more reflective and less rough. Then make sure to apply also all the scaling at \n          the hands. At last I focused on the eye colors. Here we can use again a bit of a rough shading with the bump and noise \n          texture and also make the white a bit more dirty as we did before. For the iris you may choose any color we want the robot \n          to have. I have gone with a dark purple. The pupil we make black and also non-reflective.\n        </p>\n        <p>\n          Now you may remember that we left out a part of the eyes, we made invisible before. Now we can finally prepare the see-trough \n          glass texture of the lenses. For this we can just use a glass BSDF instead of a the Principled BSDF. Here you can see one \n          difference in the the rendering engine. You can select the engine in the properties panel. Blender supports both Eevee and \n          Cycles. For now we have only worked inside the real-time rendering engine Eevee to have a fast preview, for the glass to \n          work properly we have to use Cycles and wait for it to generate a picture. Not only do we now see through the glass but \n          also the shadows are more correct now.\n        </p>\n        <p>\n          You may also mix in a glossy shader if you want to have not a perfectly clean glass. Just use a very small effect value \n          here though. In the end also shade the lenses smooth.\n        </p>\n        <p>\n          Here I also add another bump and noise texture for the dark metal I forgot.\n        </p>\n        <p>\n          Comparing our objects to the refrence image, we seem to be done. So now we focus on creating a little scene that we can \n          then render as a photo. Select the robot and move it above the green y-axis which we are going to use as a ground height. \n          Do the same for the plant.\n        </p>\n        <p>\n          Then we add three white planes, maybe scale them to like 100, use one as the ground and the other one as the back wall. \n          Select them all and join them together. Now their points should roughly align, so we can use merging by distance again to \n          connect the vertices together. We do this so that we can bevel the edges in the next step. At the end shade the whole thing \n          smooth. Now we have a neutral background to render our photo.\n        </p>\n        <p>\n          Next we want to position the camera. You can either move it manually or use the shortcut <strong>CTRL + ALT</strong> and \n          the <strong>Numpad Zero</strong> to position the camera right where you currently look at. You may also change the focal \n          length of the camera if you want to have more things in the picture. When the camera is positioned we want to change back to \n          Cycles again to see how an image might look. Currently there is just one point light in the scene. We can add another point \n          light to have the display look like it's emitting it. Here of course the power should be decreased quite a bit and the color \n          adjusted to yellow. Finally we add another light for the ambience, which simulates a sun light so that we don't have too \n          much dark shadows at the back of objects.\n        </p>\n        <p>\n          Now we can prepare the rendering process. I will just go over some rough ideas what is possible to be selected here in the \n          properties panel. First we check that we have a PNG as the output selected and either RGB or RGBA on. Then you can go into \n          the light paths option and increase the values if you want glass textures to be improved. Toggle on denoising and heighten \n          up the value to 30 for now. As you may see in the sampling options, we currently have 32 iterations in the viewport for the \n          path tracing, the denoising now starts at the 30th iteration. The denoising is important to remove the noise generated by \n          the path tracing. For the final render you want a higher number for the render iterations, I choose 500 and selected the \n          denoising accordingly. The higher the iterations the longer the rendering will take but the more precise the final result \n          is. All left to do is to render the image with the menu above. A new rendering window will be created but I only recorded \n          one window here. You may then save the picture in the end. \n        </p>\n        <p>\n          This is the final result for the rendering process. Next time we are going to see how to rig a character and how to make \n          an animation.\n        </p>\n        <p>Thank you for your participation.</p>\n        <p>This concludes the tutorial for this session.</p>\n      </app-collapse-component>\n    </div>\n    <h3 id=\"toc_further_references\">Further references</h3>\n    <div class=\"ui warning message\">\n        <ul>\n          <li><a href=\"https://cgcookie.com/articles/blender-cycles-vs-eevee-15-limitations-of-real-time-rendering\" target=\"_blank\">Limitations of real-time rendering</a></li>\n        </ul>\n    </div>\n</div>";

/***/ }),

/***/ 5947:
/*!*****************************************************************!*\
  !*** ./src/app/conclusion/conclusion.component.html?ngResource ***!
  \*****************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<h2 id=\"headline\">Where to go from here?</h2>\n<div id=\"start_content\">\n    <p>You have now completed a few different sections learning about the basics you need to get started in Blender. You can now make \n        your first scenes and create some complex models. But this little tutorial was only meant as an introduction. There is a lot more\n        you can explore to really push your Blender skills. What you should do next really depends on what your goals are. Let me give\n        you some suggestions on what you could follow up.\n    </p>\n    <h3>Increase your modelling repertoire</h3>\n    <p>What we did is we touched the surface on what is possible with Blender. We learned a simple way to create bigger models by \n        box modelling our objects. But there is other techniques you could use as an alternative or even together to achieve more stunning\n        results. In the following I will introduce a few techniques you could follow up on.\n    </p>\n    <h4>Metaballs</h4>\n    <figure class=\"center\">\n        <img src=\"./assets/images/metaballs.PNG\" alt=\"Image of Metaballs\" width=\"60%\">\n        <figcaption>\n            Some basic Metaballs\n        </figcaption>\n    </figure>\n    <p>\n        Metaballs are a different approach to creating an object. Instead of adding objects and then modifying their mesh like we did \n        with the fire truck, here you insert primitives like cubes or spheres, like you can see above. Those so called Metaballs then \n        depending on their distance to each other build a connection. Metaballs incluence each other and are especially usefull for \n        modelling more organic models. The image above I created using a sphere, a cube and four different capsules. This can be seen \n        as a rough outline for a human body for example. As you can see, when placed correctly they build up nice connections. You can \n        also use negative Metaballs, e.g. to cut in holes for eyes.\n    </p>\n    <h4>Sculpting</h4>\n    <figure class=\"center\">\n        <img src=\"./assets/images/sculpting.PNG\" alt=\"Image of Sculpting\" width=\"60%\">\n        <figcaption>\n            Sculpting workspace in Blender\n        </figcaption>\n    </figure>\n    <p>\n        In the image above you can see the sculpting workspace of Blender. Sculpting is an alternative way to model your object. There is \n        a set of different tools available you can think of as similar to pencils. You can then simply draw on your object to modify the \n        underlying mesh data. For the image above I started with a simple sphere but then added some details by drawing onto the mesh. \n        The technique of sculpting is especially usefull when dealing with high poly models where you want to add in some extra details, \n        for example when modelling a human face or in general human bodies or animals. This can also be combined with Metaballs pretty \n        effectively. You could first lay out the basic structure using Metaballs, then convert them to a mesh and start shaping them with \n        the sculpt tools.\n    </p>\n    <h4>Scripting</h4>\n    <p>\n        Another advanced topic to look into would be scripting. Blender comes with built in support for Python scripts. This is also \n        the way how addons can be implemented that extend Blender, e.g. the one I used in my videos to display the keystrokes in the \n        bottom left corner. With scripting you can basically achieve everything you can do with the UI as well. You can edit any part \n        of the model in an automated manner, modify your Blender setting or create completely new tools that may help you or others \n        to do their tasks more effectively.\n    </p>\n    <h4>Videogame assets</h4>\n    <p>\n        If you want to create assets for your own video game you have to take a look at some advanced techniques that help you optimize \n        your object, e.g. by reducing the poly count. The workflow is also slightly different when creating such objects. You might \n        want to take a more detailed look into the topic of unwrapping to learn how to unwrap more effectively by marking correct seems \n        to make it easier to place parts of your model in a texture.\n    </p>\n    <p>\n        Another thing you could take a look into is the process of retopology. Retopology is needed to reduce the poly count when going \n        from a very high poly model to one that could potentially be used in a video game engine. While there are some automatic tools \n        built into Blender to assist you, e.g. a modifier to reduce the count for a vertex group (a part of your model), you can also \n        have a look at manual retopology that can for example be used when designing a character.\n    </p>\n    <p>\n        The last thing I suggest you to take a look at is whats called baking. Baking is a process mainly used for textures. When baking \n        textures you can for example reduce the details from a high poly model, i.e. the details that were previously modelled as polygons \n        for example a scar added by sculting, are now baked onto a texture that could be applied to a low poly model to achieve a very \n        similar effect by drastically reducing poly count. baking requires you to be familiar with UV maps.\n    </p>\n    <h3>Go the artistic way</h3>\n    <p>\n        You could also go more into a artistic direction by teaching yourself some skills in refining your model. This could not be part \n        of this E-Learning for time reasons, but if you are really looking for nice assets probably nothing is more important than \n        beautiful textures.\n    </p>\n    <h4>Create stunning Materials</h4>\n    <p>\n        Find some tutorials online to learn how the differnt nodes on materials really work together and how you can use them to create \n        stunning materials that can be used in visually appealing scenes. You can also learn how to create procedural materials in Blender. \n        Think about what you want to display and step by step learn how to do specific textures, e.g. for creating fabric materials. You \n        can also have a look at Substance Painter which is often used in combination with Blender and can be easily integrated into the \n        workflow.\n    </p>\n    <h4>Animate humans</h4>\n    <p>\n        If you want to step up your game and create some smooth animations try it with a human. There are several standard animation that \n        are typically used in movies or video games. Model yourself a human like character or grab one from MakeHuman, a program that lets \n        you easily create humans and import them into Blender ready for animation. There is even a plugin for direct integration into Blender. You could for \n        example start by creating a smooth walk cycle. I would recommend you to start of simple and slowly aim for more complex animations.\n    </p>\n    <h3>Do what you want</h3>\n    <p>\n        Try new things. Anything new you do will bring you some progress in using Blender. Thank you for completing this E-Learning. \n        I really hope you learned something by completing this E-Learning. Check out the references below to follow up on the topics \n        I just mentioned.\n    </p>\n    <h3 id=\"toc_further_references\">Further references</h3>\n    <div class=\"ui warning message\">\n        <ul>\n          <li><a href=\"https://docs.blender.org/manual/en/latest/modeling/metas/index.html\" target=\"_blank\">More on Metaballs</a></li>\n          <li><a href=\"https://docs.blender.org/manual/en/latest/sculpt_paint/sculpting/index.html\" target=\"_blank\">More on Sculpting</a></li>\n          <li><a href=\"https://docs.blender.org/manual/en/latest/advanced/scripting/introduction.html\" target=\"_blank\">More on Scripting</a></li>\n          <li><a href=\"https://docs.blender.org/api/current/info_quickstart.html\" target=\"_blank\">Scripting Quick Start</a></li>\n          <li><a href=\"https://docs.blender.org/manual/en/latest/modeling/meshes/uv/unwrapping/introduction.html#about-uvs\" target=\"_blank\">More on Unwrapping</a></li>\n          <li><a href=\"https://docs.blender.org/manual/en/latest/modeling/meshes/retopology.html\" target=\"_blank\">More on Retopology</a></li>\n          <li><a href=\"https://docs.blender.org/manual/en/latest/render/cycles/baking.html\" target=\"_blank\">More on Baking</a></li>\n          <li><a href=\"https://oldetinkererstudio.com/materials-and-textures-blender-2-8-tutorial-cycles/\" target=\"_blank\">More on Materials</a></li>\n          <li><a href=\"https://www.substance3d.com/substance/\" target=\"_blank\">More on Substance Painter</a></li>\n          <li><a href=\"http://www.makehumancommunity.org/\" target=\"_blank\">More on MakeHuman</a></li>\n          <p><u>On YouTube:</u></p>\n          <li><a href=\"https://www.youtube.com/c/BlenderGuruOfficial\" target=\"_blank\">Blender Guru</a></li>\n          <li><a href=\"https://www.youtube.com/channel/UCuNhGhbemBkdflZ1FGJ0lUQ\" target=\"_blank\">Ducky 3D</a></li>\n          <li><a href=\"https://www.youtube.com/c/BlenderFoundation\" target=\"_blank\">Blender (Official Account)</a></li>\n          <p><u>3D Asset Libraries:</u></p>\n          <li><a href=\"https://polyhaven.com/\" target=\"_blank\">Poly Haven</a></li>\n        </ul>\n    </div>\n</div>";

/***/ }),

/***/ 8757:
/*!*************************************************************************************************!*\
  !*** ./src/app/modelling-chapter-overview/modelling-chapter-overview.component.html?ngResource ***!
  \*************************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<h2 id=\"headline\">Modelling chapter overview</h2>\n<div id=\"start_content\">\n    <p>\n        While the first chapter was all about exploring Blender and playing around with it, in this chapter we will focus on one \n        complex model to add a set of new skills and techniques to work on bigger models. For this purpose I picked the Wall-E robot \n        and a little plant that will be modelled over several lections. Using some reference material I will show you all the steps to \n        go from a simple model made from simple geometries to a more detailed one. We will be learning how to use modifiers and tools in \n        Blender appropriatly and how they can help us to achieve complex tasks relatively easy. As the chapter progresses you will also \n        learn more about the inner structure of models and how they are build up. Furthermore we will also talk about the basics of adding \n        in materials and textures in the third part and how they can help us to make our model look more realistic. Below you can see an \n        image of the Wall-E robot and the little plant we are building during this chapter.\n    </p>\n    <figure class=\"center\">\n        <img src=\"./assets/images/render-wall-e.png\" alt=\"Rendered picture of the Wall-E robot\" width=\"60%\">\n        <figcaption>\n            The Wall-E robot we will be modelling\n        </figcaption>\n    </figure>\n    <p>\n        This chapter is meant to be more of a follow along session. In the different chapters I will show you the different steps I took \n        starting from scratch to build the model you see in this image. At the top of each chapter you will find a brief description \n        of what you can expect to see in the video. At any time during this section feel free to spend some more time on the model. Reflect \n        what I just showed and think about other ways of achieving what was done in the video. Add in some more details or shape. In \n        general the model is kept as simple as possible to reduce the video time.\n    </p>\n</div>";

/***/ }),

/***/ 6504:
/*!***************************************************************************!*\
  !*** ./src/app/modelling-plant/modelling-plant.component.html?ngResource ***!
  \***************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<h2 id=\"headline\">Vase and Plant</h2>\n<div id=\"start_content\">\n    <div class=\"ui info message\">\n      <h5>In this section you will learn:</h5>\n      <ul>\n        <li>What Proportional Editing is and how to use it</li>\n        <li>How to use the screw modifier in a complex model</li>\n        <li>How to combine the screw and array modifier to create complex shapes</li>\n        <li>How to use the subdivision surface modifier and what it does</li>\n      </ul>\n    </div>\n    <div class=\"ui warning message\">\n      <ul>\n        <li>Idea and execution of the plant model adapted from: <a href=\"https://www.youtube.com/watch?v=JoW1XWi4Lw0\" target=\"_blank\">Blender 2.8 modular plant creation with modifiers</a></li>\n      </ul>\n    </div>\n    <div class=\"vdiv\">\n      <app-basic-video-component videoname=\"Video_8_Plant.mp4\"></app-basic-video-component>\n    </div>\n    <div class=\"collapsible-component\">\n      <app-collapse-component message=\"I want to read\" qId=\"ID1\">\n        <p>Welcome to this session.</p>\n        <p>\n          Today we are going to create a plant for our project, consisting of a vase and the plant part. Let's start by making our robot \n          invisible and adding a new collection. Then we can build everything in the center.\n        </p>\n        <p>\n          To create the vase, we are adding a new bezier curve which is going to be the outer contur of the object. Rotate the curve by 90 \n          degree than go into the orthographic side view. We will use a new modifier today which is called the Screw Modifier. You can \n          build a rotation object with it by rotating the curve around a center point for which I created a new empty axis called \n          \"Plant_Origin\". Set the axis in the Modifier to Z and you can see that half the work is almost done for the vase. Just choose a \n          form which you would like to have. I try to re-do the reference vase here. Instead of applying the modifier we have to convert \n          it to a mesh which will automatically apply it. Now you just have to add a bottom face to our object by selecting the bottom \n          edges and pressing <strong>F</strong>. To finalize the vase, use the solidify Modifier on the object to create a more realistic \n          thickness to the current 2D mesh, you may also add a subdivision surface modifier to make our object more round. Applying all \n          modifiers we are almost done here. I additionally add a circle, and use the Screw Modifier again to create the detail from the \n          reference, you may just duplicate the ring then, apply all modifiers and join the objects together.\n        </p>\n        <p>\n          I created a new color for the orange-brownish vase. Then select one circular edge from the inside of the vase by using \n          <strong>ALT</strong> select again and create a new face there. This is supposed to be the dirt for the plant, so we create a \n          new dirt color and assign it on there. Don't worry about the coloring too much, we will re-define the colors in the next \n          session. For now the vase is done.\n        </p>\n        <p>\n          Now we can concentrate on the plant. Specifically we will start by adding a circle which we will use to create a model for \n          the leaves. For this we go into the orthographic top view. For the first time we are now using proportional editing. To \n          activate this, use the last menu option from the top center, we want to use \"Sharp\" here. Then select only the front \n          vertice of the leaf and move it to the side, you can see that there is a big circle around the point and that the points \n          around the selected vertice are moving with it. You can adjust the impact of the editing by scrolling, which you can see by \n          the size of the impact circle increasing or decreasing. We want to select the point at the back of the leaf now and adjusting \n          it too, this time using a smaller impact. You can already see the leaf taking its shape.\n        </p>\n        <p>\n          For now we only have vertices and edges but are still missing a face. This time instead of just selecting all vertices and \n          pressing <strong>F</strong>, we use <strong>CTRL + F</strong> which will give us the option to use \"Grid fill\", this will \n          create a nicer mesh to work with. Then adjust the Span and Offset so that we have a line going through the middle of our object. \n          For me it worked with 10 for the Span and 3 for the Offset. Next we want to use the Loop cut two times close to the middle \n          line, later we will use them to indent the middle.\n        </p>\n        <p>\n          Then we want to create a stem for the leaf. To do this select the three points at the bottom of the leaf and extrude them a \n          few times along the X-Axis. The last extrusion should be very short as it is suposed to be the connection to the big plant \n          stem. We scale these points a bit, to create a fitting shape.\n        </p>\n        <p>\n          Now we are selecting the inner points of the leaf, you may use the brush selection with <strong>C</strong>, then use right \n          click and the option \"smooth vertices\" and repeat this for 4 or 5 times, so that we have a better distribution of the points. \n          As the leaf is still very flat and 2D right now we may want to change that. To do that we are going to select the point at \n          the front and the points at the end, switching into the side view and turning proportional editing on again. If we now move \n          the points down, we can see that it creates a curve shape for our object. I additionally adjusted the front point to be even more \n          curved down. Then to get a more realistic shape we want to indent the middle part. So select the center lines up until the \n          stem and then move them downwards. The rough shape for the leaf is now finished, we are just adding again the Solidify and \n          Subsurface Modifier to finalize it. Apply both of them.\n        </p>\n        <p>\n          Now that the single leaf is done, we somehow want to use it to create all of the other ones with low effort. To prepare this, \n          we want to first adjust the origin point of the leaf. Either by manually setting the origin point or going into the Edit Mode \n          and moving the whole structure accordingly so that the stem ends at the origin.\n        </p>\n        <p>\n          For our next trick we want to add an empty sphere, scale it down and apply the scale again. This sphere is going to be our \n          control object to create all the other leaves. Now you can select the leaf again and add an Array Modifier choosing a count \n          like 20 or so. Than select the empty sphere as the object offset. If you now change the rotation, scale or position of the \n          sphere object you can see how it will affect all of the leaves. Don't apply these modifiers before we have talked about the \n          coloring in the next session. For now I make the objects invisible as we are just quickly creating a stem for the plant to \n          define how high it will be. To do this I just added a cylinder, made it very small and scaled it quite high. Then I scaled \n          the face at the top smaller so that it looks more like a plant stem. Later we want to bend it too. To make this easier for \n          us, we are adding a few loop Cuts now with <strong>CTRL + R</strong>. Use the scroll feature to create many cuts here, in \n          the end I created roughly 30. Then add a new Color for the plant, which i just called \"Plant_Green\".\n        </p>\n        <p>\n          Since the stem is done for now, we go back to the leaf. If we rotate the sphere enough you can quickly see that we already \n          have quite a nice plant shape. You may want to scale it down too so that the upper leaves are smaller than the bottom ones.\n        </p>\n        <p>\n          One detail left to do, is to bend the plant a bit so that it looks more realistic and less stiff. To do that we are going to \n          use the Curve modifier and therefore need a new Bezier Curve.\n        </p>\n        <p>\n          As before we have to adjust the origin point of the curve, for this you can go into Edit Mode and move the whole curve. I \n          made a mistake here by choosing the wrong end of the curve which led to me defining the plant upside down and being a bit \n          confused. In the end I had to change the origin point again to have the expected behavior. For now this should conclude the \n          modelling. Next time we will texture the leaves of the plant and construct the plant as a whole object. Then we are also \n          coloring our robot, lighting the scene and creating our first rendered picture.\n        </p>\n        <p>Thank you for your participation</p>\n        <p>This concludes the tutorial for this session.</p>\n      </app-collapse-component>\n    </div>\n    <div class=\"quiz\">\n      <app-quiz-component question=\"You add in a mirror modifier but nothing seems to happen. What is a possible root cause?\" \n        correctAnswer=\"The object is mirrored along a symmetry axis\" [answers]=\"['The object is mirrored along a symmetry axis','Modifiers must be applied before we can see them',\n        'Modifiers are only visible in rendered images']\" qId=\"ID1\"></app-quiz-component>\n  </div>\n</div>";

/***/ }),

/***/ 2528:
/*!***************************************************************************************!*\
  !*** ./src/app/modelling-wall-e-arms/modelling-wall-e-arms.component.html?ngResource ***!
  \***************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<h2 id=\"headline\">Wall-E Arms</h2>\n<div id=\"start_content\">\n    <div class=\"ui info message\">\n      <h5>In this section you will learn:</h5>\n      <ul>\n        <li>How to create complex custom shapes</li>\n      </ul>\n    </div>\n    <div class=\"vdiv\">\n      <app-basic-video-component videoname=\"Video_7_Arms.mp4\"></app-basic-video-component>\n    </div>\n    <div class=\"collapsible-component\">\n      <app-collapse-component message=\"I want to read\" qId=\"ID1\">\n        <p>Welcome to this session.</p>\n        <p>\n          Today we are going to finish the model of the robot and build some arms and hands. Let's start by going into the side view \n          and creating some kind of rectangular connecting piece, which is supossed to follow the track path of the Body. So we place \n          it in there. Then we are going to add a cylinder which will connect to it. You may place it back to the center of the world \n          if you want to quickly detail it and then mirror it to the other side. If you are done with the circulare faces, place it back \n          to the final position. Then add two cuts around the object with the Loop Cut tool or the shortcut <strong>CTRL + R</strong>. \n          Similar to the technique used with the binoculars detail, we can select the faces around the cylinder with <strong>ALT</strong> \n          and left mouse click and then scale it outwards. Since we are scaling in every direction here, I adjusted the form after \n          that by scaling on the Z-axis, so that we don't have a concave shape here. Then just color the faces accordingly yellow \n          and in the metal color.\n        </p>\n        <p>\n          Next we are adding the rectangular arm which is just a long-sided cube with some details drawn on one side. I tried to match \n          roughly the size of the metal plate behind it here. After done positioning the cube, just add some lines with the knife tool, \n          making sure just to select and cut on the outer side of the arm. Then we want to color it alternating between a white and black \n          color. Before adding the metal pole connecting to the hand of the robot I add another little circular ring that I bevel, this \n          time even with the bevel modifier. This just makes the look more realistic. Then as mentioned before we add a cylindric pole \n          connecting to the arm and having the standard rust Metal color. For the detail ring before I used the dark metal color to have \n          some variance in there. Also to differentiate a bit here, I want to use a metal and rusty metal color for the hand, using the \n          rust parts for the connecting cylindric parts and the metal parts for the finger parts. For the cylinder parts here you can \n          just use duplication and then readjust the objects a bit. Basically we will have two fingers in the front and one thumb-like \n          finger in the back. To simplify our robot I assumed that the robot can only move his front fingers together as one, so we don't \n          have too much independent objects in the end. Also we differentiate between an upper and lower part of the fingers. \n        </p>\n        <p>\n          If you are done preparing the cylinders, we are going to have to create a few a little bit more complicated finger parts before \n          we are finally done. At this point if the rotation of the reference picture is confusing you too much, you can always just \n          rotate it to match your current work again.\n        </p>\n        <p>\n          First we start with the connecting piece at the back of the hand. For this we start by adding a cube and scaling it to our needs. \n          I oriented myself here by looking at the cylinder which will end up being somewhere in the center of our new object. \n          After positioning we just select two of the outer edges and bevel them so that we have an almost similar shape to the reference. \n          For detailing purposes we are now going to cut out a piece from the middle of the object, so that the cylinder can be seen \n          fully. Here I just extruded the inner face a bit because I realised I need more space. When you are happy with your positioning \n          of your connector object and the cut-out object, you can use the Boolean Modifier on the connector object, choosing difference \n          and applying the cut. You may delete the cut-out object. I just made it invisible to use it again for the next few cut-outs we \n          are going to need.\n        </p>\n        <p>\n          Basically we are going to repeat the process now for the rest of the parts, each having a bit of a different shape. For the \n          first upper finger part: Adding a cube, scaling and positoning it. Here I used bevel to create some more vertices to create \n          the appropriate form, you could also just use Extrude and scaling here which would probably be a bit easier. At the finger \n          start again, we use bevel to round the corners accordingly to the reference. Then the last part is to cut out a tiny pice \n          at the inner upper side. here I use again my cut-out cube which I rotated accordingly. After creating the first finger part, \n          you can just mirror it to the other side. Then you may also already join the upper hand half to one object, as this all may \n          move together in the end.\n        </p>\n        <p>\n          For the lower finger part we add again a cube and adjust the points. Then just mirror it again, and coloring it with the \n          metal color. In the end you may just join the lower parts together too.\n        </p>\n        <p>\n          The only thing left now, is the thumb part in the back. As we are going to repeat the same process, you can try to test your \n          skills practically and stop the video for now. We will proceed in a second.\n        </p>\n        <p>\n          For the thumb, you can just duplicate the lower part of the finger as this is practically identical. Then for the upper half, \n          we have to assume a fitting shape. I decided to make it even simpler than the front ones by sticking to the four vertices and \n          then bevel the upper half accordingly. In the end we have to repeat a similar cut-out as before but on the outer sides of the \n          object. You may add the cut-out in the boolean modifier and make it invisible so that you can see how the cut-out would look \n          without having it applied yet. If you are satisfied apply the modifiers, join all parts that should move togther together and \n          then proceed by naming your objects accordingly. The right arm is done now.\n        </p>\n        <p>\n          Then we are selecting all of the objects and duplicating them to the left side, mirroring it again by the Y axis. Then clean \n          your project by naming and structuring it again. \n        </p>\n        <p>\n          A last look and see, we have finished the Wall-e model. Next time we create the plant standing next to the robot and then we \n          can start texturing in the session after that.\n        </p>\n        <p>Thank you for your participation</p>\n        <p>This concludes the tutorial for this session.</p>\n      </app-collapse-component>\n    </div>\n</div>";

/***/ }),

/***/ 39:
/*!***************************************************************************************!*\
  !*** ./src/app/modelling-wall-e-body/modelling-wall-e-body.component.html?ngResource ***!
  \***************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<h2 id=\"headline\">Wall-E Body</h2>\n<div id=\"start_content\">\n    <div class=\"ui info message\">\n      <h5>In this section you will learn:</h5>\n      <ul>\n        <li>How to import reference material into your scene</li>\n        <li>How to set up your workspace with the reference images</li>\n        <li>How to add materials to your objects and assign it to specific faces</li>\n        <li>How to use the knife modifier in a complex model</li>\n        <li>How to use the mirror modifier in a complex model</li>\n        <li>How to use the bevel modifier in a complex model</li>\n        <li>How to use the inset modifier in a complex model</li>\n        <li>How to use the extrude modifier in a complex model</li>\n        <li>How to create complex custom shapes</li>\n      </ul>\n    </div>\n    <div class=\"ui info message download\">\n      <h5>Please grab the material needed for this section <a href=\"./assets/files/reference_material.zip\" target=\"_blank\" download=\"reference_materials.zip\">here</a></h5>\n    </div>\n    <div class=\"vdiv\">\n      <app-basic-video-component videoname=\"Video_4_Body.mp4\"></app-basic-video-component>\n    </div>\n    <div class=\"collapsible-component\">\n      <app-collapse-component message=\"I want to read\" qId=\"ID1\">\n        <p>Welcome to this session.</p>\n        <p>\n          Today we will start to work on our main project in this learning environment. For this project we will create one of the cutest \n          robots from a computer-animated science fiction film: WALL-E. You can find the necessary ressources, the reference images, \n          attached. We will use them shortly.\n        </p>\n        <p>\n          First we start a new project in Blender, starting with the default scene prepared for us. The first thing we are going to do is \n          to add the reference images so that we have a good idea on what to expect from our modeling. To do that there are basically \n          three ways and it does not matter which one you choose: You can either go to <strong>Add->Image</strong> and add your image as \n          a reference image from a folder, or do the same thing as a background image. The third way that I am going to take is to just \n          drag the image from the folder to the scene. The only difference between these approaches are the default settings they will \n          start with. Since we are going to look at them soon and change them to our needs, it does not matter how you include it in \n          the project. One thing to note is that the image will always be included in the scene parallel to your current view, so make \n          sure to go into the orthographic view before including the image. You can also rotate,move and scale it afterwards if you want to.\n        </p>\n        <p>\n          The first picture to include is the front of WALL-E, as you can see the main body is almost prepared for us with the starting \n          cube. The settings I talked about before can be found withing the property panel in the image tab. We can choose wether we \n          want the image to be like an object or always in front or always in the back. I will go with \"always front\" and later change \n          the opacity and visibility as needed. You can also decide wether you want the image to be seen from only the front or also the \n          back, and in which perspectives it is seen. I think the easiest workflow is to just see the side pictures in the orthographic \n          view and only from the front, since I have prepared pictures for all sides. In the end I set the opcaity on, so that I can see \n          our cube trough the picture. Now I will add the side pictures for all orthographic views and scale them so that they will fit \n          to the bottom side of the cube. Prepare the workspace as it seems easiest to you, maybe you will find it easier to have the \n          images next to your cube instead than on top of it. The last image I want to add is a perspective one, so we can also add it \n          in a perspective view so that we can later compare the reference to the model if necessary.\n        </p>\n        <p>\n          Now that we prepared our workspace to our needs, we can start working on the WALL-E Body. First we want to move the points \n          from the top a bit lower since the robots cube is a bit wider than it is tall. To make our modeling easier we want to add a \n          color to our cube, so that we can later separate different regions better. The colours are just a substitute for now and we \n          will redefine them later when we talk about shading and texturing, however please make sure that you use your defined colors \n          consistently and name them appropriatly so that you dont have to adjust them manually later. We will name the first color \n          \"Rust_Yellow\" which will be the main color of our robot. For now you can choose a brownish yellow for that or even use the \n          eye dropper to just copy the color from the reference image.\n        </p>\n        <p>\n          Now we want to seperate the metallic part on top from the bottom part. Since we need the same line also on the sides we can \n          use the Loop-Cut tool here or respectivally the shortcut <strong>CTRL + R</strong>. If you want a closed circle the loop-cut \n          is good for making a cut around the whole object. To move the line click the mouse button down and keep it pressed until \n          your are satisfied with the position. I accidently misclicked and added another horizontal line which is not necesarry here. \n          Since we now have a seperate area, we add another color, name it \"Metal\" and make it grey and a bit metallic in the settings. \n          To add it to the region, select the face and assign the color you just created to it.  To indent the upper area we can use \n          the Extrude tool with the shortcut <strong>E</strong>. A problem you will notice is that it will create walls that should not \n          be there, to prevent that go to the options after you used the shortcut and click on \"dissolve orthogonal edges\". \n        </p>\n        <p>\n          Here I noticed that our scene structure is a bit chaotic, so I named the images appropriatly and moved them inside a new \n          collection.\n        </p>\n        <p>\n          If you now look closely at the front, you can see that the middle upper part is yellow again, so one way of fixing this is \n          to create a new area there. For this I am using the knife tool to cut from one edge to another one. Here you have to look \n          closely at the settings in the tool bar. There are three options: If \"Occlude geometry\" is on the knife will only cut the \n          front-most geometry. If we want to cut here from the orthographic front there are two edges before each other, so this \n          setting will not work as expected. Another way is to tick the second option \"Only Selected\" and then select the face you want \n          to cut. Then you will always cut through the correct face. To make a straight cut, use the shortcut <strong>C</strong> while \n          having the knife selected (* Note here: The shortcut changed to C). To make the cut final press <strong>Enter</strong> to \n          confirm it. If you created the new area, assign the yellow color to it.\n        </p>\n        <p>\n          To finish the front side for now, we add a new cube in the Object Mode, move it to the front and scale it to the right size. \n          We can use the upper front edge to set the slope. Adjust the edge or the two vertices. Also assign the metal color to the \n          cube. You can now join the objects together. We call the resulting object the \"Body\" for now.\n        </p>\n        <p>\n          After finishing the first part of the front side, we will now take care of the sides. Analysing the image we can see that the \n          upper metal part of the front extends further to the back, the yellow main body has an indentation at the upper half seperated \n          by a skewed line. There is a brown track drawn with an indentation where the arm can move along later.\n        </p>\n        <p>\n          To model the side we use a similar trick as before. Select the knife tool and trace the lines from the image. First we want \n          to cut out the metal part. Don't forget to select the face first and check your tool settings. Press <strong>Enter</strong> \n          if you want to finalize the cut. Next we do the same thing for the brown track. Try to be careful at the last cut line since \n          we want the vertices to connect and the edges to form a circle. Now select the yellow face and add the skewed line. We are \n          now finished with cutting and can now fill in the colors. Again we use the same \"Metal\" color and assign it to the two faces. \n          For the brown track we have to create a new color we want to call \"Rust_Brown\". To finish the rough shape we use the shortcut \n          <strong>E</strong> for extrude again and indend the upper yellow part, then we do the same for the brown track. At the end \n          we add a cylinder, color it yellow, scale it to the correct size and move it to the right spot. Join the objects to the \"Body\". \n        </p>\n        <p>\n          And then we are half finished. Since we have only done one side yet. For this instance we can use another trick. We are \n          going to halve our \"Body\" object in two and mirror our progress to the other side. To do the split we could use either the \n          loop cut tool twice, since the box in the front is not directly connected to the main part or we can use the knife tool again. \n          This time we do want to cut trough all objects, so adjust the settings in the tool menu. Make sure to cut it from the \n          ortographic front side to get a straight cut. After cutting the object we can now delete the side that we have not yet manipulated. \n          Just delete the edges and vertices, you don't have to worry about them. To mirror our progress to the other side, we want to \n          create an empty axis object and add it to WALL-E, I will call it the \"Wall-E Origin\". It has to be in the center point. Now that \n          we have defined this point we can go to our Body half and add the mirror modifier, select the Origin point as the mirror object \n          and select the Y axis to mirror. If you want to make sure that both of the sides will merge together you can go into the \n          edit mode, select the according view option in the modifier selection and increase the merge value until both halves met at \n          the center. If your object is done, go into the object mode again and apply the modifier. Now we have finished both sides.\n        </p>\n        <p>\n          Before we are going to have a look at the back, we want to add some details at the corners of the Body. Therefore we add a cube, \n          scale it tiny and color it with the \"Metal\" color. Try to place the cube so that roughly a quarter of it is placed inside the \n          yellow Body. After placing it we want to extend the three sides to cover the Body according to the images of the orthographic \n          views. Select each face individually and extrude it. To get some round corners we want to use the bevel tool now. Select the \n          edges at the outside of our detail object and use the shortcut <strong>CTRL + B</strong> to add beveling. You can scroll with \n          the mouse wheel to get a finer partitioning. Click with the left mouse button to finalize it.\n        </p>\n        <p>\n          Now that we have finished this corner, we can use our mirroring trick again. Go into the object mode and select the mirror \n          modifier for our detail, you can use the same Origin point we defined before. This time we want to mirror two times, along \n          the X and Y axis to get our four details at the bottom.\n        </p>\n        <p>\n          For the details at the top of the Body we can use a similar strategy as we just did. You may want to pause the video now and \n          try it for yourself to test your learned skills. We will proceed in a second.\n        </p>\n        <p>\n          The only difference at the top detail is that we want to create a slightly different form and only mirror it once. Create a \n          new cube and repeat the same steps as before to position it at one of the corners. Now we want to select the faces again and \n          extrude them according to the images. This time the line we see at the side view is connecting the front corner with the back. \n          Extrude the detail at the end twice so that we have a new cube-shaped end at the other corner. This will make it easier to \n          extrude the remaining directions. You can move the points manually with the XRay option on if you want to position them more \n          accuratly. At the end we use the same bevel technique as before and mirror our detail again with the Origin point. At the end \n          you can apply all modifiers and join the objects together.\n        </p>\n        <p>\n          Now we turn our attention to the back side. We can see that the middle parts are just basic shapes of cylinders and cubes. \n          The most detailed pieces are the side objects which we are going to start with. Again we use cubes as the base object, scale \n          it and position it roughly on top of where we want to create our model piece. If we now go into the side view we can move the \n          points of the cube in the positions we want. make sure to have the X-Ray option on to select and move the points at the front \n          and back of the cube together. One way to achieve this rounded shape is to use the bevel tool again on the one vertice that \n          lies between the sharp points. Bascially we are using this point as a control point to create a curve shape. If you are not \n          happy with your shape you can move the control point around until you roughly macth the reference image. For the bottom line \n          we want to do the same thing, but we are missing a control point. To create a new one you can either manually divide the edges \n          or just use the knife or loop cut tool, I decided on the loop cut here. Since we now have a new control point, we can do the \n          same thing as before, moving our control point and then using bevel to create our curve shape. At this point I already mirror \n          our object, you don't have to do it now but you may. I just wanted to see how it looks here.\n        </p>\n        <p>\n          Looking at the reference image we have achieved the outer shape, now we want to concentrate on the inner details. The first \n          thing we want to create is the inner curve which is parallel to the outer one. In this instance we can use the Inset tool \n          with the shortcut <strong>I</strong> after selcting the face we want to modify, this will create the inner shape we are \n          interested in. Don't worry about the weird looking shape it will create for now. This probably occurs here because of the \n          sharp edges which make problems. At this point I checked to apply all transformations to our object with <strong>CTRL+A</strong> \n          because sometimes the scaling interfers with the Inset tool. Since this didn't help I accepted the weird shape and fixed the \n          object manually. All the edges and vertices we do not need and were created extra, we can dissolve by selecting the vertices, \n          clicking the right mouse button and click on dissolve. So the only thing remaining is the shape we are interest in. Then I \n          finished the curve manually by using the knife tool again. The only thing left to do now is to use the knife tool for the \n          rest of the object, cutting the straight lines according to the reference image. Always select the relevant faces before and \n          check the tool menu so that we only cut on the one side of the object. If you do not want to select the faces individually \n          each time, you can use <strong>C</strong> to use a round selection tool. So you can basically draw a selection. When you \n          finished cutting the lines, we can color the faces accordingly by assigning the \"Metal\" color again, and then using Extrude \n          in the end to move the yellow faces inwards. After applying a mirror this object is done.\n        </p>\n        <p>\n          All left to to on the back is to create the missing cubes and cylinders according to the images. For the cylinder object we \n          introduce a new red color and using the \"Metal\" color for the end parts again. You can use the mirror modifier here again \n          or just copy the object to the other side. Watch out when copying: All the colors attached to it we be copied too, so you \n          have to manually select the original color again. The safer way would be to duplicate the object with <strong>Shift + D</strong>, \n          then the colors should remain the same. In the end you can join everything together again.\n        </p>\n        <p>\n          At the end of this session we have a look again at the front side of the object to add some missing details. We want to create \n          the interface on the metal chest piece and the indentations on the middle part. Starting with the display we can create a new \n          cube, scale it down and create a new color for it, the \"Rust_Metal\" which I will for now just color a bit darker than the normal \n          \"Metal\", you can mirror it to the other side here or duplicate it. For all the pieces here make sure that the objects overlap \n          inside of the objects behind it so that there will be no space in between. For the display I also make sure that the display \n          is really flat, so that you can not see it from the side. The next details will be the black display parts for which we \n          introduce a new color \"Display_black\". Here again you should use duplicate with <strong>Shift + D</strong> instead of copying \n          like me because than I have to make sure that I check the colors again. For the yellow parts we do the same thing as before \n          but introducing the new color \"Display_Yellow\", for the bottom parts you may want to use the Array Modifier, so you don't \n          have to duplicate each item individually. You only want to offset the items hower on the Z axis so that they will all stick \n          to the display.\n        </p>\n        <p>\n          Then we want to to create the circular parts: First create a  new cylinder for the red button, you can introduce the new color \n          \"Display_Red\". The button should stick out however compared to the items before. After that we create a yellow display part, \n          not sticking out. However you will notice that there is a difference to the reference, we still have to cut out a hole in the \n          middle. To do that we want to create a new cylinder and place it where we want to cut out, than we use the Boolean modifier \n          on the outer circle to subtract the inner one. After applying the modifier you can delete the inner cylinder again to make \n          the hole visible. Now the display part is done.\n        </p>\n        <p>\n          Now we only want to introduce some indentations on the front of the Body. For that we can use a cube again and use the same \n          technique as with the cylinders just now. You want to use the Array modifier to create three similar cubes at once. Here \n          again is a chance to try this part yourself as we have seen all relevant techniques before. We will proceed in a second.\n        </p>\n        <p>\n          The solution can be seen now. After applying the modifiers, and deleting the cubes you have to assign the yellow color again \n          to the holes as they may be painted white now.\n        </p>\n        <p>\n          Now you can combine all the remaining objects within the robot together via join so that it is finished for now. Next time \n          we are going to prepare the wheels of the robot.\n        </p>\n        <p>Thank you for your participation.</p>\n        <p>This concludes the tutorial for this session.</p>\n      </app-collapse-component>\n    </div>\n    <div class=\"quiz\">\n      <app-quiz-component question=\"Can an object have multiple materials applied to it?\" \n        correctAnswer=\"Yes\" [answers]=\"['No','Depends on the object',\n        'Yes']\" qId=\"ID1\"></app-quiz-component>\n      <app-quiz-component question=\"After editing an object a tool you want to use does not behave like expected. What can you do?\" \n        correctAnswer=\"Check my objects properties. I might have missed to apply rotation or scale.\" [answers]=\"['Restart Blender. Restart always helps.','Update to a newer version of Blender. This must be a bug.',\n        'Check my objects properties. I might have missed to apply rotation or scale.']\" qId=\"ID1\"></app-quiz-component>\n      <app-quiz-component question=\"Why should you always join objects as late as possible? (here: at the end of a session)\" \n        correctAnswer=\"It is easier to make modifications to smaller parts\" [answers]=\"['It is easier to make modifications to smaller parts','Joining takes a long time',\n        'Once you join you cannot separate parts again']\" qId=\"ID1\"></app-quiz-component>\n  </div>\n</div>";

/***/ }),

/***/ 2033:
/*!***************************************************************************************!*\
  !*** ./src/app/modelling-wall-e-head/modelling-wall-e-head.component.html?ngResource ***!
  \***************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<h2 id=\"headline\">Wall-E Head</h2>\n<div id=\"start_content\">\n    <div class=\"ui info message\">\n      <h5>In this section you will learn:</h5>\n      <ul>\n        <li>How to create complex custom shapes</li>\n      </ul>\n    </div>\n    <div class=\"vdiv\">\n      <app-basic-video-component videoname=\"Video_6_Head.mp4\"></app-basic-video-component>\n    </div>\n    <div class=\"collapsible-component\">\n      <app-collapse-component message=\"I want to read\" qId=\"ID1\">\n        <p>Welcome to this session.</p>\n        <p>\n          Our robot model is half finished now and it's starts to get into shape. Today we are going to create the head of the robot. \n          Let's begin with analyzing the relevant parts: For the neck we are going to need some cylinders again that we may detail a bit. \n          For the inner eyes we are also going to need circular shapes again, similar to the creation of the wheels. The outer eye part \n          has a binoculars shape which we probably have to manually model to have it look like this.\n        </p>\n        <p>\n          First of all we now go into the orthographic side view and create our simple cylinder shapes for the neck. In the end we want \n          to have a bottom neck part and a top part, which can move independently, so be aware when joining objects. Because the reference \n          pictures are not totally aligned in my case and the reference model is not in it's default position, we have to estimate the \n          positioning for our model a bit. This makes the process a bit more difficult but is probably more realistic compared to normal \n          reference images.\n        </p>\n        <p>\n          The bottom cylinder does not really need details, since we don't see the most part. The upper cylinder can be modelled again \n          similar to the wheels with some Insetting with the approrpiate tool or the shortcut <strong>I</strong> and then extruding \n          inwards with <strong>E</strong> and moving the inner circle out again with <strong>G</strong> and Y-axis alignment. You can \n          use the Mirror Modifier here to mirror the progress on the other side.\n        </p>\n        <p>\n          The cylinder part in the middle has some detailed top end, so we are going to first align the default cylinder and then extrude \n          the upper face a bit, scale it down and extrude again. Coloring every object with our standard yellow color, and the neck is \n          mostly done.\n        </p>\n        <p>\n          Before we go to the binoculars, we are going to create some connecting objects in the head center, which can be a bit more \n          difficult to see. For the upper part, we want to create a black triangle shape but with the edges beveled. For this we are \n          adding a cube, positioning it roughly where we want it and then merge the lower points together at the center with the \n          shortcut <strong>M</strong>. To bevel the edges, just select all of the relevant ones at the side and then use the Bevel tool \n          or the shortcut <strong>CTRL + B</strong> to adjust them accordingly, here again just scroll with the mouse wheel until you \n          have enough subdividing edges. Create a new Color, I called it \"Metal_Dark\".\n        </p>\n        <p>\n          Now we have to add another connector bit, this time yellow. Here we create another cube and scale it accordingly, here we only \n          have the front image as reference. You may just assume a shape that you find fitting for this part or go along with the tutorial \n          version. I started with a direct connecting part, loop cutted trough the middle and then positioning the inner points so that we \n          create a more interesting shape. You may already join the upper parts together and the lower parts so that we have a Neck_Top \n          and Neck_bottom part.\n        </p>\n        <p>\n          Now that the neck is done, we want to create the shape of the binoculars. As with the back of the Body before we have many options \n          to create such a custom shape. One of the ways presented here is to use a cube or cylinder and then either position the points \n          manually or using the beveling tool as we did before. I used a cube here and tried this option as we did before. Using the \n          vertices of the cube to position the outer form, and then using control points and the Bevel tool, to create a fitting curve. \n          Watch out that you have the X-Ray toggled on if you want to model a 3D shape. Another option would also be to model the form with \n          a 2D plane first and then extrude it in the end. Repeat the process of beveling and adjusting a few times and then you have a good \n          approximation of the form quite fast. If you are happy with the front view of the object, we are going to have a look at the side. \n          As you can see the first part is a bit bigger and then there is some indentation or insetting inwards. As we already now, that \n          means we want to use the Insetting tool for the inner part. As you may see at the sharp corner, if we inset it too much the new \n          vertices will overlap. Either you may stop before or just adjust or merge them at the end to get a consistent shape. In the end \n          just extrude the shape until the end. To have a bit of detail we add four Loop cuts using the tool or the shortcut \n          <strong>CTRL + R</strong>. If you have added them, you want to select the circle of faces around the object. To do this quite \n          simply, you can use The <strong>ALT key</strong> and clicking with the left mouse. This may take some tries sometimes. When \n          selected you can use the scale tool to move the faces inwards a bit. In the end we just color it with our default Metal \n          color, the outer shape is done.\n        </p>\n        <p>\n          Our next focus is the front eye part. First select the front face and inset it again this time just minimally. After that you can \n          extrude the inner face inwards and create a new Color for it, for example Eye_White, then assign it to the face. For the circular \n          shape of the iris the easiest approach is to just add another cylinder and then detail it. Here again we will use the Metal color \n          for the outer base. If you have placed the cylinder accordingly, use the Boolean modifier on the binoculars and choose difference \n          here. We do that so that we can detail the iris part beyond the white face. You may apply it already since we don't move the iris \n          later on. Now look at the reference image and create the contours of the eye with the inset tool. The outer and inner metal ring \n          are supposed to be at the front, so we can also just extrude the faces in between them inwards. Especially the black pupil can be \n          set wider inside. For the colored iris you may want to have the inner part more in front than the outer part so that it doesn't \n          look too flat. For the iris and the pupil I created two new colors here. \n        </p>\n        <p>\n          To finish the binoculars we want to add a glass lens at the front of the eye. To do this we use for the first time a sphere \n          geometry. We move it to the front side of the eye and scale quite thin on the X-axis so that is also looks like a convex lense. \n          You may already add a new color for this lense. For now I don't add the objects together because we will take care of the \n          see-through glass texture later and for now I just make it invisible. Since we are done with the binoculars, we should now prepare \n          for duplicating everything, therefore I clean up the names and structure of the project, naming the objects appropriatly. \n          Like the wheels, we will have a left and a right side, which we want to move indepently and therefore need the objects also \n          independently. Before mirroring it, I select all the objects and rotate them, so that we start at a straight position. Also \n          make sure that there is a bit of space left to the center. Finally we duplicate and mirror the objects again at the y-axis \n          like the wheels before so that they are directly independent objects. Like before we could also use the mirror modifier like \n          we used to, but then we would have to seperate the objects again manually. After adding the left side, re-name the objects \n          accordingly.\n        </p>\n        <p>\n          A detail we finally want to add to the head are the tubes from the binoculars at the back to the neck part. We will use a \n          similar technique we already used for the wheeltracks. As you might already see we are going to start by adding a bezier \n          curve, this time we don't want a closed circle but really a curve. One thing to pay attention to is that we have to fix the \n          origin point of the curve which is right now somewhere in the center. As we want the origin to be at the start of the curve, \n          we have to correct it. Either you can go into the Edit Mode and just move it over or the more difficult way I did: Move the \n          curve so that the center point with the 3D cursor is at the start or end of the curve and then right click and set the origin \n          of the geometry to the 3D cursor.\n        </p>\n        <p>\n          Then just adjust the bezier curve so that it follows the tube from the reference images. Since the curve is defined in 3D \n          space it will take some time to adjust all points and control points in a reasonable manner. If you need more points to \n          adjusting just subdivide the curve again. Also try to check from a 3D perspective if your tube shape makes sense. If you are \n          finished with it, we want to add a tiny cylinder from which the tube will be created. Place it at the start of the curve. \n          Then we want to use the Array and Curve modifier again. This time the relative offset should be exactly 1 so that there is no \n          gap between the individual parts. If you are done with this part, you can apply the modifiers and color the tube. I used the \n          dark Metal here. Then just mirror it to the other side. Since we are going to just add the parts to the top neck, it can all \n          be joined together as one object called \"Neck_top\" here.\n        </p>\n        <p>\n          Now the head is already done and there is only one session left to finish the model part of the robot where we are going to \n          create the arms and hands part of it.\n        </p>\n        <p>Thank you for your participation</p>\n        <p>This concludes the tutorial for this session.</p>\n      </app-collapse-component>\n    </div>\n    <div class=\"quiz\">\n      <app-quiz-component question=\"You will sometimes need loop cuts to add more edges to your object. What is the shortcut?\" \n        correctAnswer=\"Strg+R\" [answers]=\"['R','Alt+Z',\n        'Strg+R']\" qId=\"ID1\"></app-quiz-component>\n  </div>\n</div>";

/***/ }),

/***/ 3281:
/*!*******************************************************************************************!*\
  !*** ./src/app/modelling-wall-e-wheels/modelling-wall-e-wheels.component.html?ngResource ***!
  \*******************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<h2 id=\"headline\">Wall-E Wheels</h2>\n<div id=\"start_content\">\n    <div class=\"ui info message\">\n      <h5>In this section you will learn:</h5>\n      <ul>\n        <li>How to quickly detail circular shapes with Inset, Extrude and Move</li>\n        <li>How to quickly create small objects (here: Legs) by using Extrude with Transformations</li>\n        <li>How to move the origin point within an object with the 3D cursor</li>\n        <li>How to use the curve modifier in a complex model</li>\n        <li>How to use the array modifier in a complex model</li>\n        <li>How to manually mirror objects by the global axis</li>\n        <li>How to combine the curve and array modifier to create complex shapes</li>\n      </ul>\n    </div>\n    <div class=\"comment\">\n      <p class=\"ui red message\">Small spoiler: I forgot to move the upper legs of the robot to its final position. As already said in the video\n        this will be fixed in a later video.\n      </p>\n    </div>\n    <div class=\"vdiv\">\n      <app-basic-video-component videoname=\"Video_5_Wheels.mp4\"></app-basic-video-component>\n    </div>\n    <div class=\"collapsible-component\">\n      <app-collapse-component message=\"I want to read\" qId=\"ID1\">\n        <p>Welcome to this session.</p>\n        <p>\n          Today we are going to have a look at the Wheels part of our robot. Similar to the Body before, the structure looks more \n          complicated than it really is. For the most part we are going to use basic shapes again and re-define them afterwards. For \n          instance you may already see that the wheel track is made out of several cubes and the inner individual wheels are probably \n          made out of cylinders.\n        </p>\n        <p>\n          This said we are going to start placing some cylinders in the exact locations of the circles ignoring the details for now. \n          Again you can just rotate the cylinder by 90 degrees on the x-axis (either manually or typing it in) and then scale it down \n          to cover our reference image. The rest of the cylinders can just be duplicated with <strong>SHIFT + D</strong> or \n          <strong>CTRL + C</strong> and <strong>CTRL + V</strong> from the first one and scaled accordingly. Watch out that you only \n          scale with the blue rectangle symbol, so that the local X and Y-coordinates are scaled but not the local Z-coordinates. \n          Otherwise the cylinders will have different widths when looking from the front of the robot.\n        </p>\n        <p>\n          Now that the cylinders are defined, we are detailing them. For the wheels I have used two quite similar but different designs, \n          you may also create your own if you want. Since we won't really look at the inside part of the wheel, we are just focusing on \n          detailing one side. First select the outer face of the first cylinder and use the Inset tool with <strong>I</strong> to create \n          two inner circles. Make the second one quite small. Then select all of the inner faces, remember that you can use the select \n          brush with <strong>C</strong> to easily help you do that. With <strong>E</strong> we are extruding the faces inwards to create \n          an indentation. Then we move the inner circle a bit outwards using <strong>G</strong> to move and <strong>Z</strong> to fix the \n          axis. Then extrude the small circle a tiny bit. The first wheel is done and can be colored with the already defined Rust_Brown \n          color. Repeat the same process for the next two wheels. You can also just duplicate the second one to create the third. For \n          the last two wheels we are going to use a different design but the same methods again. Here I make sure that the larger wheel \n          is behind the smaller one, so that we have some 3D variety.\n        </p>\n        <p>\n          For the next wheels which are also going to be the wheels that will be able to rotate later on, we create three inner circles \n          with the Inset tool. The inner circle will be a bit larger this time. Extrude the first inner ring a bit, then repeat the \n          process we used before for the inner faces by extruding them inwards and moving the inner part a bit outside along the local \n          Z axis.\n        </p>\n        <p>\n          The only detail missing on the dynamic wheels now are the spikes. To create them we first create a new tiny cube and place it \n          on top of the wheel. Then we are moving the upper inner points with X-Ray toggled on to the inside to create a sharp slope, \n          repeat this for the side view too. Coloring it with Rust_Brown we almost are done already.\n        </p>\n        <p>\n          The easiest way of creating the spiked around the wheel is to use the Array Modifier we have seen before. But this time we \n          want to move the array also around a curve, specifically a curve in the shape of a circle. To do this we first have to create \n          a Bezier Circle, by adding it to the scene. Save yourself half an hour by choosing the correct object, we want the circle \n          from the curve menu, not the 2D circle from the geometries. They are not the same.\n        </p>\n        <p>\n          When you aligned the Bezier Circle with the wheel you can go back to the Spike object and go to the modifier selection. Add \n          the Array Modifier first, selecting roughly 16 as the count and then add the Curve Modifier. Here you have to select our \n          Bezier Curve. Then you only have to adjust your settings and maybe move the spikes a bit to locate them to their final position. \n          To make sure that your spikes are distributed equally one trick is to try to overlap the first and last spike and then toggling \n          on the Merge-option so that they merge together.\n        </p>\n        <p>\n          Before applying the modifiers as we usually do, duplicate the two objects we just used to define the spike ring: The spike and \n          the circle. Then move them to the other wheel where we also want to use this design. I also duplicated it again to have the \n          spikes on the back half of the first wheel because that looked nicer. If you have placed all the objects accordingly, you \n          can apply the modifiers. If you have done that, you may also want to delete the circles since we won't need them anymore. \n          You can now also join the spike rings with their according wheel, but leave the spiked wheels as individual objects since we \n          want to rotate them in the animation later. The static not-spiked wheels also can be joined together.\n        </p>\n        <p>\n          To finish the inner wheel part, we only have to connect the wheel parts so that they don't look like seperate objects. For this \n          we can just use a cube and create some kind of rail. Here I just extruded both sides of a cube and than moved the outer \n          points a bit to match the reference. Color the object acordingly to the wheels and combine the static wheel part.\n        </p>\n        <p>\n          Now we go to the front view and take care of what can be considered the legs of the robot. Therefore we Inset the face of the \n          first cylinder facing inwards and then extruding the circle until the first edge. We extrude again until the next edge, this \n          time we also scale the resulting circle smaller and move it up a bit, then we extrude it again to finish the first leg part.\n        </p>\n        <p>\n          The second part has to be a new object since we want to move them independently afterwards. We can start with a cylinder again \n          for this one and then just extrude and scale the circle again. Here I missed to move the second leg part to the front on top \n          of the other one, so that they connect to each other. I will notice this later on.\n        </p>\n        <p>\n          Only thing missing now is the Wheel track that is going to move around the whole thing. To create the first track part I want \n          to use the Mirror modifier. For this reason I make the rest of the scene invisible so that I can work in the center of the world. \n          First I create another cube and scale it roughly in the form that the tracks should have: rectangular with a small depth. Then I \n          am using the mirror modifier from the start to model the object. So I don't have to draw the pattern I am going to use twice. \n          I want to create something like a W-looking shape for the pattern with indentations on the side. To create the lines I am going \n          to use Loop-Cuts and for the finer details and non-straight lines the Knife tool. First we want to create an indentation on the \n          end of the face. After creating two lines use the Extrude tool to indent inwards, toggling \"dissolving orthogonal edges\" again \n          to clear unwanted fragments. Then we use four straight vertical lines, two  diagonal lines and two straight lines to cut out \n          a symbol roughly looking like a wheel track pattern. Then select the pattern and extrude it outwards a bit. Apply the modifier, \n          add the Rust_brown color and the wheel track part is done. Now we only have to duplicate it around the inner wheel mechanism.\n        </p>\n        <p>\n          For this we are going to use the same trick as we did before with the spikes and the wheel. You may want to pause the video now \n          and try it for yourself to test your learned skills. We will proceed in a second.\n        </p>\n        <p>\n          As before we create a Bezier Circle and move it roughly around the inner wheel parts. The only difference to before is that now \n          we have to adjust the curve to fit  our reference. Go into the Edit mode and try to adjust the points of the curve along with \n          the according control points. You may want to subdivide some of the lines to get another point to work with.\n        </p>\n        <p>\n          When you are happy with your curve, you can go into the modifier menu of the track part and add the Array and the Curve Modifier. \n          In the end I used roughly 20 parts with a very tiny offset just over 1. This time we don't want to apply the modifiers since we \n          need them to turn our wheeltrack. You can try it now for yourself: By moving the track along the X-axis the wheeltrack is \n          rotating around the curve achieving the effect we want. \n        </p>\n        <p>\n          One side is finished now. At this point make sure to properly name all of the objects, I added \"Right\" at the end of the name, \n          to make the seperation clear for later.  Here we could use the mirror modifier again for every object, but then we would have to \n          manually seperate each object again if we want to seperate the Left and the Right side. Another option, the one I choose, is to \n          select all the objects that have to be mirrored, duplicate them and then mirror them directly on the global axis. Clicking with \n          the right mouse button and choosing Mirror: Global Y-Axis, then just move them to their correct position. In the end make sure \n          to name everything properly and use collections to order your project to have a good overview. As you can see the wheels are \n          now done. Next time we will prepare the Head of the Wall-e robot.\n        </p>\n        <p>Thank you for your participation.</p>\n        <p>This concludes the tutorial for this session.</p>\n      </app-collapse-component>\n    </div>\n</div>";

/***/ }),

/***/ 6410:
/*!*************************************************************************!*\
  !*** ./src/app/quiz-component/quiz-component.component.html?ngResource ***!
  \*************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<div class=\"quiz\" id=\"quiz\"></div>\n<button id=\"submit\" (click)=checkAnswers()>Check answer</button>\n<div class=\"result\" id=\"result\"></div>\n";

/***/ }),

/***/ 9972:
/*!***************************************************************************************!*\
  !*** ./src/app/rigging-and-animation/rigging-and-animation.component.html?ngResource ***!
  \***************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<h2 id=\"headline\">Rigging and Animation</h2>\n<div id=\"start_content\">\n    <div class=\"ui info message\">\n      <h5>In this section you will learn:</h5>\n      <ul>\n        <li>The different properties of an armature</li>\n        <li>How to add bones to your object to create a rig</li>\n        <li>How to make a bone a parent for individual parts of your object</li>\n        <li>How to connect distinct bones</li>\n        <li>How to restrict the movement of individual bones</li>\n        <li>How to work with the animation workspace</li>\n        <li>How to insert keyframes</li>\n      </ul>\n    </div>\n    <div class=\"vdiv\">\n      <app-basic-video-component videoname=\"Video_10_Animation.mp4\"></app-basic-video-component>\n    </div>\n    <div class=\"collapsible-component\">\n      <app-collapse-component message=\"I want to read\" qId=\"ID1\">\n        <p>Welcome to this final session.</p>\n        <p>\n          Today we are going to rig our Wall-E robot and create an animation. Let's start by selecting our robot collection and adding \n          an armature. This will automatically create a bone with it from the start. We now want to display the bone in front of \n          everything to make the rig easier to work with. This can be changed in the viewport display options.\n        </p>\n        <p>\n          The current bone we use as the starting point for our rig, the parent bone which controls all the others. Specifically here \n          it will be used to control the Body. Because we want to add the neck bone in the next step, we are now going to extend the \n          bone by moving the joint upwards. Similar to before we can just use the Extrude tool or the shortcut <strong>E</strong> to \n          create another bone from the current joint and place it again in the center. Repeat this again for the top neck part. \n          Automatically the new bones are always attached to their parent bone, so if you move the parent bone the children are \n          moving with it. This behavior is called forward kinematics.\n        </p>\n        <p>\n          As discussed before we also want to create a bone for each of the eyes so we can move them independently. Currently the bones \n          are not attached to the mesh. So if you move them nothing happens. We will change that after defining the rest of the rig.\n        </p>\n        <p>\n          Now that we are done with the head we want to create some new bones that are not directly attached to the other bones. Just \n          add another bone manually, we will take care of the parenting in the next step. For now we create the bone for the arm. If \n          you want to make sure that everything is aligned horizontally you can adjust the values of the head and tail joints directly. \n          Here I already duplicated the arm bone before I realized that I can also just create all the bones necessary and then duplicate \n          the whole arm and hand. Since we wanted to only differentiate between the back finger or thumb and the front fingers, we only \n          need two bone threads coming from the main arm joint. The finger joints can be placed on top of the cylinders.\n        </p>\n        <p>\n          Now that I realize that I can duplicate my process I delete the arm on the right again and just use <strong>SHIFT + D</strong> \n          on the whole arm selected and move the new arm over to the other side. To connect the arms to our main bone, select the main \n          arm bone first and then the main bone, then use the shortcut <strong>CTRL + P</strong> to make a parent or like me who forgot \n          the shortcut use right click and click on <strong>Parent->Make</strong> and keep the offset. You can now see the dotted line \n          signaling the connection and the offset. If you want to test if your rig is correctly set up so far, you may go into the Pose \n          Mode and move the main bone. If the bones are set up correctly they should all move with it.\n        </p>\n        <p>\n          Now we want to take care of the wheels. You may want to pause and test if you can do this yourself already. We proceed in a second.\n        </p>\n        <p>\n          We add a new bone like before and set the tail joint to the upper leg beginning, the head joint at the end of the cylinder. \n          Then we can extrude another bone to the wheel which will hold all the main parts of the wheel. Then we only have to add two \n          more bones for the two wheels that we want to rotate later. These ones have to be seperate bones again and will be then \n          attached to the wheel bone we just created. Like before select the child first and then the parent before making the parent \n          connection, again choose to keep the offset. For the wheel on the left side, we can just duplicate the whole frame again. \n          Just mirror it by the global Y axis again and move it to its location. Now we are finished with the rig. The next step will \n          be to attach it to the mesh.\n        </p>\n        <p>\n          To do this select the relevant object which you want to add to a bone, here I forgot to also add our display light along with \n          the body. Then select the rig and change your mode from the object mode to the pose mode. Select the relevant bone in the \n          Pose mode and use the shortcut <strong>CTRL + P</strong> to set the bone as the parent for the mesh. You can test if it worked \n          correctly by moving the bone. Now the Body should move with our main bone. We now repeat this process for every object and \n          bone which we want to connect. So the bottom neck to the bottom neck bone the upper neck to the upper neck bone and so on. \n          You should test your model while connecting to make sure everything is set up correctly. For the wheel part watch out that you \n          attach the static wheel parts, the wheel track and the bezier curve of the track to the wheel bone so that everything will move \n          with it. The rotating wheels will be connected to the according bones which are already attached to the wheel bone, so you \n          don't have to attach them directly. Repeat the same for the left wheel.\n        </p>\n        <p>\n          One thing which can be useful for animating later is to create a pose library, so I quickly show how to use that. Select the \n          amature and go to the Pose Library, create a new one. Select all the relevant bones when adding a new pose, the current \n          positioning will be the pose. So this one can be called the \"Default\". For another pose we could create a sad Wall-E face by \n          rotating the eye bones. Select the relevant bones after changing them and create a new Pose for them, I called it \"Sad\". If \n          you want to apply a pose use the magnifying glass on the right of the Pose Library. We won't use them for our animation but \n          this can be a powerful tool to work with.\n        </p>\n        <p>\n          One thing you don't necessarily have to to, but can help very much in animating your figure is to use constraints to limit \n          certain transformations of the bones. For example the eyes should not be able to rotate around the whole axis but only at \n          a limited angle. So we can add a bone constraint similar to the modifiers we are used to. Make sure to work in the local \n          space otherwise things behave weird really fast. On the eyes I limited the X axis rotation to -15 up to 15 degrees the other \n          rotations I constrained to zero, so I can not use them at all. I now constrain most of the bones rotations here, this is \n          mostly a process of try and error. Another constraint you may want to use on the upper neck is the Copy rotation constraint \n          which can be inverted. So the rotation of the bottom neck is always automatically adjusted on the top. I will later delete \n          this again here because it prevents the robot from looking up which I want to use in the animation.\n        </p>\n        <p>\n          I then left out the arms on purpose because we won't use them for our animation. If you want to set them up too, you may \n          want to use a path constraint for the arm so that it follows the track. The constraint for the moving wheels is very easy, \n          it is only allowed to move in one axis rotation and the other wheel can then just copy the rotation from it. Here I forgot \n          to set the owner to local space which I will notice later on, please use the local space here. For the wheel and leg bone \n          you can use the same trick with the inverted copy rotation again if you want to use that. Now the rig is set up for us and \n          all that is left to do is to create our animation.\n        </p>\n        <p>\n          For our animation I want to use the perspective to trick the viewer. First the robot should drive into the scene and see a \n          really big plant, then it goes out of the frame and when it comes back we see that it was actually just far away and is now \n          as big or bigger as the plant. Here I am trying to figure out how far away the robot has to be placed and in which angle the \n          camera should be placed for a good effect. I want the robot to be on a similar height to the plant when he drives to it.\n        </p>\n        <p>\n          If you are happy with your positioning you may also want to go to the Animation workspace wich is much more ideal to work \n          with for animations. Now we have to define what our first frame should look like. Here the robot is suposed to be out of \n          frame. To set the first keyframe of the animation select all the bones and press the shortcut <strong>I</strong> to insert \n          a keyframe. Here you can specifically choose what transformation you are changing, for our purpose we can just always \n          choose selected bones because we mostly only use one form of transformation.\n        </p>\n        <p>\n          You can now see that you created some points in the dope sheet below. Here all keyframes are listed and you can see which \n          bones and which transforms are affected by it. For example if you have a keyframe of a bone in one position and then a \n          second one further in the future at another position the bone will interpolate between the keyframes so a moving animation \n          is created. For our first scene we want the robot to move inside the camera view and then stop, so we have to insert a new \n          keyframe at the stop. Then you can already watch what the animation would look like. Here I am ignoring the wheels for now \n          on purpose those will be the last thing for us to animate.\n        </p>\n        <p>\n          When the robot stopped we want it to look at the plant, kind of scanning it from bottom to top, confused by how large it is. \n          So first we want to adjust the neck bones so that the robot is looking down. here I delete the copy rotation constraint \n          which I talked about before because it was preventing the robot to look down. With our neck bones selected we insert new \n          keyframes with I then again a new position where the robot looks up, inserting another keyframe. When there is no movement \n          between two keyframes this is shown in the dope sheet by marking a dark connection between the two. For example I duplicated \n          the keyframes from the middle of the animation because there was a pause missing after looking down. With the pause the \n          animation seemed more reasonable to how a human or animal would behave. Here i tried to figure out why one of the keyframes \n          did not move with thes rest until I realised that this marked a bone that I had not selected at the moment. After I \n          duplicated the keyframes again the animation worked as expected. Also note that if you need more frames for the animation \n          go to the Properties Panel and adjust the number that represents the end frame number.\n        </p>\n        <p>\n          After looking at the plant the robot should look at the viewer and break the 4th wall. Here I wanted to have the robot \n          look sad or confused by rotating the eyes a bit down. After that the robot should just drive out of the scene. The whole \n          process basically is always the same. Sometimes you have to adjust some keyframes because you forgot to select the according \n          bones or suddenly you move a bone that you didn't keyframe before so the animation does not begin where you expect it to. \n          Now that we defined the first scene, we want to have the next scene where the robot is suddenly big.\n        </p>\n        <p>\n          Basically you could now appruply translate the robot to the new position and keyframe it because it is outside of the \n          camera view. For no reason whatsover I decided to have a realistic turn around a driving sequence here.\n        </p>\n        <p>\n          After having the robot at the starting point of the next scene, we want it to drive into the view of the camera, stop, \n          look at the plant again, then to the viewer and then we try to let the robot communicate that its happy or amused. This \n          is almost the same process as before so you may want to try it yourself. For the amused animation at the end I tried to do \n          something like a wink with the eyes by moving them down and the up in a quick manner. This then marks the end of the \n          animation. For the rest I just added the moving parts of the wheel. For the wheels itself I used a -360 degree rotation \n          from start to stop for all two scenes. I repeated that on the other side. Then for the wheel track we have to go into the \n          object mode when editing because we have not defined a bone. The animation will use our modifiers that are still defined \n          in the object. We can just move the wheel track along the bezier circle we defined and it will look like it is rotating in \n          a circle while we actually move the position of the track along one axis. Like before we define the keyframes after moving. \n          Just try to match the start and stop points of the robot moving.\n        </p>\n        <p>\n          When happy with the animation we only have to adjust our output format, here choosing FFmpeg Video, defining a folder to \n          save the video and depending on how long you want to wait for the result, you may want to turn down the amount of render \n          iterations. Then just use the menu on top to render the animation and wait until Blender is finished.\n        </p>\n        <p>Here you can see the final result.</p>\n        <p>Thank you for your participation.</p>\n        <p>This concludes the blender tutorial.</p>\n      </app-collapse-component>\n    </div>\n    <div class=\"quiz\">\n      <app-quiz-component question=\"For some reason one arm is left behind when moving the main bone. What can be wrong here?\" \n        correctAnswer=\"The bones were not parented correctly\" [answers]=\"['The bones were not parented correctly','Scale is not applied',\n        'I have to move each bone individually']\" qId=\"ID1\"></app-quiz-component>\n  </div>\n</div>";

/***/ }),

/***/ 250:
/*!***************************************************************************************!*\
  !*** ./src/app/setup-about-elearning/setup-about-elearning.component.html?ngResource ***!
  \***************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<h2 id=\"headline\">About this E-Learning</h2>\n<div id=\"start_content\">\n    <h3 id=\"ae1\">Important notes up front</h3>\n    <p>Blender has a steep learning curve. While you can expect to achieve first results relatively quickly it will take a lot of practice\n        to achieve visually appealing results. You will do lots of errors during your first steps and often see yourself restarting a model from\n        scratch. This should however not discourage you. Every start is difficult especially when dealing with a complex programm like Blender.\n    </p>\n    <h3>What will you achieve by following this E-Learning?</h3>\n    <p>By following this E-Learning you will get a solid understanding of the overall task of modelling and animating simple 3D models.\n        Maybe you already took a look at the outline to see what's coming up. The E-Learning consists of 4 main chapters to guide you\n        through most parts of a modern 3D production pipeline. With the example of Blender you will learn about the layout of scenes, \n        the modelling task itself, rigging and animation.\n    </p>\n    <p>\n        In the modelling part of this E-Learning you will create the robot from the movie \"Wall-E\" with all kinds of different details which will teach you the \n        foundation you need to create small and large scale 3D models on your own. The animation part of this E-Learning will give you guidance\n        on how to bring the small robot to life by animating it.\n    </p>\n    <h3>What this E-Learning will not cover</h3>\n    <p>This E-Learning serves as an introduction into the topic. This also means that there are several aspects that can not be covered\n        within the demonstrated lectures. To answer a question many of you will have: No, you will not be able to create high class\n        3D models that can (or maybe rather should) be used in video game engines. To get production ready assets for video games a lot of\n        advanced topics need to be covered that are not in the scope of this E-Learning. This includes:\n    </p>\n    <ul>\n        <li>Sculpting</li>\n        <li>Game ready rigs</li>\n        <li>Conversion of high poly models into low poly ones</li>\n        <li>Physics Simulation</li>\n        <li>Scripting</li>\n    </ul>\n    <p>\n        However I will give you guidance in appropriate places on where to follow up if you are interested in these topics. If you have no experience\n        in 3D modelling and you don't even understand what all this stuff above is about, no problem! This E-Learning will teach you all the foundations\n        you need.\n    </p>\n    <h3>How can I get the most out of this E-Learning?</h3>\n    <p>During this E-Learning I will be demonstrating different techniques you can use to get into using Blender. This is however not the only\n        way to do certain things. Often you will find yourself wondering if your way of doing it is also fine, you may even find a way that you find\n        a lot easier compared to what I am doing and this is absolutely fine! There are always alternative solutions and where I am able to I will\n        also guide you to them or even demonstrate them.\n    </p>\n    <p>\n        There are also a couple of theory lessons. You should give them a chance even if they are not as appealing to you and you just want to continue\n        working on your model. The theory lessons will give you background knowledge you will need to understand why certain things work and others don't.\n        They are also not related to Blender in specific which means you can also apply them when working with other 3D programs.\n    </p>\n    <p>\n        With the following visual clue that you will find above the sections I will display what you can expect to learn within this section:\n    </p>\n    <div class=\"ui info message\">\n        <h5>In this section you will learn:</h5>\n        <ul>\n          <li>How to get most out of this E-Learning</li>\n        </ul>\n      </div>\n    <p>\n        Using the following visual clue I will guide you to additional resources which  are mentioned during the videos or provide additional information you\n        might find useful in order to learn more:\n    </p>\n    <p class=\"ui warning message\">This will guide you to additional resources:\n        <a href=\"https://www.blender.org/about/\" target=\"_blank\">Find out more about Blender!</a>\n    </p>\n    <p>\n        I will also give some visual clue about crucial things I need to stress. This will look like this:\n    </p>\n    <p class=\"ui red message\">You must not quit this E-Learning before you finished it! ;)</p>\n    <h3>Key components of this E-Learning</h3>\n    <p>An important part of this E-Learning are videos. To make it easier to follow along the provided videos I will always display the shortcuts within \n        the videos in the bottom left corner\n    <p>\n        Additionally there sometimes are small control questions after chapters. These are meant to test yourself if you understand the key parts I found to be important.\n        I recommend you to answer each question to make sure you remember everything that is important.\n    </p>\n</div>\n";

/***/ }),

/***/ 7633:
/*!*************************************************************************************!*\
  !*** ./src/app/setup-required-tools/setup-required-tools.component.html?ngResource ***!
  \*************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<h2 id=\"headline\">Required Tools</h2>\n<div id=\"start_content\">\n    <h3 id=\"rt1\">Blender</h3>\n    <p>Before we start our journey to learn the foundations of modelling you will need exactly one thing: Blender</p>\n    <p>You can simply grab you version of Blender on the <a href=\"https://www.blender.org/download/lts/\" target=\"_blank\">official Blender website</a>.\n        For all of the content created during this E-Learning Blender Version 2.93 was used. Version 2.93 is a long-term support version which ensures\n        that the version is stable and only critical fixes are getting integrated. You may also be able to follow along with a newer version of Blender, e.g. 3.1.2,\n        but be prepared for:\n    </p>\n        <ul>\n            <li>Differences in the UI</li>\n            <li>Different functionality (added features, moved to other menus, etc.)</li>\n            <li>Bugs, Crashes, ...</li>\n        </ul>\n    <p>\n        Furthermore for Windows you have the choice between an installer and a portable .zip file containing everthing needed to run Blender without installation.\n        Feel free to pick whatever you prefer, there is not difference between them.\n    </p>\n    <h3 id=\"rt2\">Why do we use Blender?</h3>\n    <p>Blender is a powerful and complex tool we decided to use here because it's main advantage over competitors: It's free!</p>\n    <p>However Blender is not limited in any way because of it's price tag. Blender can perform all the steps needed during the entire 3D pipeline.\n        Also since it is open-source there are a lot of free (and of course also paid) addons you can integrate to speed up your process or interact with other\n        tools that could possibly make use of Blender like EpicGames famous UnrealEngine 5. \n    </p>\n    <h3 id=\"rt3\">Grab your cheat sheet!</h3>\n    <p>If you have little to no experience using Blender the beginning can be quite overwhelming. There are loads of different functions\n        and a fluid workflow requires to use shortcuts to call those. While there are different options to download a cheat sheet containing\n        the most important shortcuts online, I created a reduced version with the most important ones that will be used during this introduction to\n        modelling with Blender. Feel free to download it <a href=\"./assets/files/Blender-Cheat-Sheet.pdf\" target=\"_blank\" download=\"cheat_sheet.pdf\">here</a>!\n    </p>\n</div>\n";

/***/ }),

/***/ 1057:
/*!*********************************************************************************************!*\
  !*** ./src/app/theory-coordinate-system/theory-coordinate-system.component.html?ngResource ***!
  \*********************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<h2 id=\"headline\">Theory: Coordinate systems</h2>\n<div id=\"start_content\">\n    <p>This is our first theory chapter in which I will explain the key difference between global and local coordinates and why they matter \n        when working with Blender.\n    </p>\n    <p>Take a look at the following image:</p>\n    <figure class=\"center\">\n        <img src=\"./assets/images/global_and_local_coords.gif\" alt=\"Global and local coordinates\">\n        <figcaption>\n            Global vs. local coordinates\n            <a href=\"https://docs.bentley.com/LiveContent/web/STAAD.Pro%20Help-v7/en/GUID-939CA8EE-F497-491D-93D9-DE0D750503B7.html\" target=\"_blank\">\n                (source)\n            </a>\n        </figcaption>\n    </figure>\n    <p>\n        What you can see on the image above are several coordinate systems. There is one big central coordinate system with the y-axis facing\n        the upwards direction. This from now on will be refered to as our <strong>global</strong> coordinate system. No matter what happens, \n        the different axes will always stay in this exact same spot.\n    </p>\n    <p>\n        Now think of all those other smaller coordinate systems you see here as all the objects you add to your scene in Blender. All those\n        objects are placed in Blender's global coordinate system, just at different positions. No matter how you scale or rotate an object, its\n        position will always stay the same. In addition each of these objects also has a <strong>local</strong> coordinate system. As you can \n        see in the image, all those small coordinate systems are somehow rotated versions of the big coordinate system. No matter how you rotate\n        those, their position in the global coordinate system will always stay the same.\n    </p>\n    <h3>A Blender example</h3>\n    <p>\n        The following Blender example will clarify what this means in our 3D viewport. Look at the first picture that displays a cylinder\n        that was just added without any rotation:\n    </p>\n    <figure class=\"center\">\n        <img src=\"./assets/images/local-coords-unrotated.PNG\" alt=\"unrotated cylinder\">\n        <figcaption>\n            Unrotated cylinder\n        </figcaption>\n    </figure>\n    <p>\n        As you can see the global coordinate system of Blender (the red, green and blue line running out of the image) and the local\n        coordinate system displayed by those small colored arrows face in the exact same direction. If we now rotate the cylinder by\n        90 degree we get the following result:\n    </p>\n    <figure class=\"center\">\n        <img src=\"./assets/images/local-coords-rotated.PNG\" alt=\"rotated cylinder\">\n        <figcaption>\n            Rotated cylinder\n        </figcaption>\n    </figure>\n    <p>\n        As you can see the local z-axis is now facing where the global y-axis of Blender is facing. The local z-axis of the cylinder\n        is still facing along the \"top\" of the object. Now just to make sure you understood the basics answer this small question:\n    </p>\n    <div class=\"quiz\">\n        <app-quiz-component question=\"If we rotate an object, what coordinate system changes?\" correctAnswer=\"Only the local coordinate system\" [answers]=\"['Only the global coordinate system','Only the local coordinate system','Both the global and the local coordinate system']\" qId=\"ID1\"></app-quiz-component>\n    </div>\n</div>\n\n";

/***/ }),

/***/ 3872:
/*!***********************************************************************!*\
  !*** ./src/app/theory-curves/theory-curves.component.html?ngResource ***!
  \***********************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<h2 id=\"headline\">Theory: Curves</h2>\n<div id=\"start_content\">\n    <p>In this theory chapter we will briefly talk about the theory of curves to get a basic understanding on what they are, how they \n        could be created in Blender in specific and what they can be used for. There are two types of curves available in Blender that \n        can also be found in any other 3D modelling tool, namely Bezier Curves and Nurbs which are both heavily used for CGI and CAD \n        applications.\n    </p>\n    <h3 id=ae1>Bezier Curves</h3>\n    <figure class=\"center\">\n        <img src=\"./assets/images/bezier_curve.png\" alt=\"Bezier curve\" width=\"30%\">\n        <figcaption>\n            Image of a Bezier Curve\n            <a href=\"https://www.pythoninformer.com/python-libraries/pycairo/bezier-curves/\" target=\"_blank\">\n                (source)\n            </a>\n        </figcaption>\n    </figure>\n    <p>The image above displays a very simple Bezier Curve. As you can see the curve consists of two endpoints. In addition there \n        can be multiple control points between them which are used to determine the overall shape of the curve. For each of those points \n        there are handles that are used for editing the curve. I will not go into the mathematical details here. In case you are \n        interested please take a look <a href=\" https://mathworld.wolfram.com/BezierCurve.html\" target=\"_blank\">\n        here</a>.\n    </p>\n    <h3>NURBS(Non-Uniform Rational B-Splines)</h3>\n    <figure class=\"center\">\n        <img src=\"./assets/images/NURBS.png\" alt=\"NURBS\" width=\"30%\">\n        <figcaption>\n            NURBS\n            <a href=\"https://en.wikipedia.org/wiki/Non-uniform_rational_B-spline\" target=\"_blank\">\n                (source)\n            </a>\n        </figcaption>\n    </figure>\n    <p>\n        On the first sight they look pretty similar. In fact NURBS curves can be seen as a generalisation of Bezier curves. \n        They are especially good for the creation of organic models since they can be used for surfaces. The shape of these curves \n        is determined by multiple control vertices to which the curve is pulled. By for example extruding one curve along another, \n        surfaces can be created which then at render time will be converted into polygons. Their points are therefore determined by \n        the weighted sum of control points.\n    </p>\n    <h3 id=\"toc_further_references\">Further references</h3>\n    <div class=\"ui warning message\">\n        <ul>\n          <li><a href=\"https://docs.blender.org/manual/en/latest/modeling/curves/index.html\" target=\"_blank\">Documentation</a></li>\n          <li><a href=\"https://www.3dbiology.com/nurbs-vs-bezier-whats-the-difference/\" target=\"_blank\">Difference NURBS and Bezier</a></li>\n          <li><a href=\"https://mathworld.wolfram.com/BezierCurve.html\" target=\"_blank\">Bezier mathematical</a></li>\n          <li><a href=\"https://www.rgb-labs.com/blender-218-curves-in-blender-1-2/\" target=\"_blank\">Curves (german)</a></li>\n          <li><a href=\"https://www.rgb-labs.com/blender-162-bezier-nurbs-curves-pfade/\" target=\"_blank\">Handle types (german)</a></li>\n        </ul>\n    </div>\n</div>\n\n";

/***/ }),

/***/ 8061:
/*!*******************************************************************************************************!*\
  !*** ./src/app/theory-materials-and-textures/theory-materials-and-textures.component.html?ngResource ***!
  \*******************************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<h2 id=\"headline\">Theory: Materials and Textures</h2>\n<div id=\"start_content\">\n    <p>\n        In this section I will give you a little bit of a background to working with materials and textures before we start using them\n        in the upcoming session. I will only be able to scratch the surface here since setting up complex materials is a topic worth \n        a complete own section probably the length of this complete tutorial. \n    </p>\n    <h3 id=\"ae1\">The Basics</h3>\n    <figure class=\"center\">\n        <img src=\"./assets/images/node_editor.PNG\" alt=\"Node editor in Blender\" width=\"60%\">\n        <figcaption>\n            Node editor as part of Blenders Shading Workspace\n        </figcaption>\n    </figure>\n    <p>\n        The standard way to set up materials in 3D modelling tools or also game engines is to use nodes as a way to create materials. \n        You can access them easily in Blender by using the default shading workspace. The basic functionality here is that a node \n        processes an image or texture and then passes the result on to the next node. \n        While the following description is based on Blender, most of the stuff described can also be found in every other node editor.\n    </p>\n    <div>\n        <p>There are different node types that are typically used:</p>\n        <ul>\n            <li>Input Nodes like RGB nodes offering color or image nodes for texture import</li>\n            <li>Processing Nodes that change value of import nodes, e.g. RGB curves like a color ramp</li>\n            <li>Output Nodes like the material output to show final results</li>\n        </ul>\n    </div>\n    <p>\n        In general a material has multiple properties depending on the shader used. A shader determines the color of the material when \n        light shines. There are multiple different ones available ranging from realistic ones to toon style shaders. To achieve specific\n        materials like mirrors a specific shader might be needed. The standard Principled BSDF Shader has multiple properties like a\n        base color, metallic, specular or roughness\n    </p>\n    <p>\n        You can also set up Texture nodes as Input which then again have properties on their own, e.g. the offset or color. \n        Typically you want to use textures and have different types like normal maps or roughness maps as well that make the illusion \n        that there is geometry even though there isn’t. This is especially useful if you think about optimization. If you can achieve \n        a reduction of the poly count by using a texture instead this can be useful, e.g. when modelling for video games.\n    </p>\n    <h3>UV Unwrapping</h3>\n    <figure class=\"center\">\n        <img src=\"./assets/images/uv_unwrap.PNG\" alt=\"Unwrap of the plant texture\" width=\"60%\">\n        <figcaption id=\"uncentered_cap\">\n            The plant texture UV unwrapped\n        </figcaption>\n    </figure>\n    <p>\n        To improve how your material is mapped to your object you often will need what's called UV unwrapping. Basically what this \n        process does is the following: Like the name suggests it takes an object (or multiple objects at once) and unwraps its surface. \n        What you then get is a 2D representation of the surface of an object. From this you can now exactly determine, which parts of \n        your surface sits on which part of an image texture. As already mentioned in the beginning this is quite a complex topic that \n        could very well deserve it’s own chapter. I hope you got a basic understanding of how things play together. Please check the \n        additional resources linked below if you need a deeper look.\n    </p>\n    <h3 id=\"toc_further_references\">Further references</h3>\n    <div class=\"ui warning message\">\n        <ul>\n          <li><a href=\"https://docs.blender.org/manual/en/latest/render/materials/introduction.html\" target=\"_blank\">Material Doc Entry</a></li>\n          <li><a href=\"https://docs.blender.org/manual/en/latest/render/shader_nodes/introduction.html#shaders\" target=\"_blank\">More info on shaders</a></li>\n          <li><a href=\"https://www.youtube.com/watch?v=PCuVNF5RQHg\" target=\"_blank\">Quick Photo Realism In Blender</a></li>\n        </ul>\n    </div>\n</div>\n\n\n";

/***/ }),

/***/ 3573:
/*!*****************************************************************************!*\
  !*** ./src/app/theory-modifiers/theory-modifiers.component.html?ngResource ***!
  \*****************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<h2 id=\"headline\">Theory: Modifiers</h2>\n<div id=\"start_content\">\n    <p>Modifiers make up an important part of modelling. We will be using some of them in future sections, in fact we start in the next \n        one. I will not be able to explain all of them at this point in time because some of them are pretty specific and will only be \n        applied on rare occasions. Furthermore each modifier also comes along with some properties that can be changed. \n        In general modifiers are part of one of four categories:</p>\n    <div>\n        <ul>\n            <li>Modify (they modify the vertex groups of objects)</li>\n            <li>Generate (they affect the topology by adding or removing geometry)</li>\n            <li>Deform (change the shape of an object without changing the topology)</li>\n            <li>Simulate (physical simulations)</li>\n        </ul>\n    </div>\n    <p>\n        You will often have to apply multiple modifiers together to achieve the desired result. The most important thing to remember \n        here is that the order of the modifiers matters. They should always be applied from top to bottom.\n    </p>\n    <div>\n        <p>\n            In the following lectures we will take a look at the following modifiers that already cover most of the use cases you will need:\n        </p>\n        <ul>\n            <li>Array modifier: Generate additional geometry based on adjustable properties by repeating an object, e.g. along an axis</li>\n            <li>Boolean modifier: Alter the shape of an object, e.g. by cutting holes into objects</li>\n            <li>Mirror modifier: Used to add geometry by mirroring an object across a specific point like the origin</li>\n            <li>Screw modifier: Rotate an object around a point in space to create a new mesh</li>\n            <li>Solidify modifier: Used to add thickness to a plane surface or curve</li>\n            <li>Subdivision surface: Add topology to smooth out an object. Details can be found \n                <a href=\"https://en.wikipedia.org/wiki/Catmull%E2%80%93Clark_subdivision_surface\" target=\"_blank\">here</a></li>\n            <li>Curve modifier: Most often applied together with array modifier to repeat an object along a curve</li>\n        </ul>\n    </div>\n    <figure class=\"center\">\n        <img src=\"./assets/images/modifiers.png\" alt=\"Rendered picture of all the basic modifiers and tools we will be using\" width=\"60%\">\n        <figcaption>\n            The modifiers and tools we will be using visualized\n        </figcaption>\n    </figure>\n    <h3 id=\"toc_further_references\">Further references</h3>\n    <div class=\"ui warning message\">\n        <ul>\n          <li><a href=\"https://docs.blender.org/manual/en/latest/modeling/modifiers/introduction.html\" target=\"_blank\">Documentation</a></li>\n          <li><a href=\"https://artisticrender.com/top-10-blender-modifiers-and-how-they-work/\" target=\"_blank\">Top 10 modifiers</a></li>\n        </ul>\n    </div>\n</div>\n\n";

/***/ }),

/***/ 1100:
/*!*************************************************************************!*\
  !*** ./src/app/theory-rigging/theory-rigging.component.html?ngResource ***!
  \*************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<h2 id=\"headline\">Theory: Rigging</h2>\n<div id=\"start_content\">\n    <p>Rigging is a type of 3D animation technique that will be used in order to animate our character in the following sections. \n        It stands next to other animation techniques like Physically based animations or Morph target animation. \n        Rigging means that a skeleton is created that controls how an object moves. \n        The most obvious application is to build up a skeleton used for human animations but it can also be used in other cases, \n        e.g. to animate the movement of trees that are moved in the wind. The skeleton itself is not visible in the final render. \n        Probably the most important part of rigging is the difference between forward and inverse kinematics that can both be used \n        in Blender. See the description below to get a basic understanding of the differences. The workflow is basically transferable \n        to other 3D programs like Maya.</p>\n    <h3>Forward kinematics vs. Inverse Kinematics</h3>\n    <figure class=\"center\">\n        <img src=\"./assets/images/kinematics.png\" alt=\"FK vs. IK\" width=\"60%\">\n        <figcaption>\n            FK vs. IK\n            <a href=\"https://www.creativebloq.com/features/3d-rigging-all-you-need-to-know-to-get-started\" target=\"_blank\">\n                (source)\n            </a>\n        </figcaption>\n    </figure>\n    <p>\n        To explain the difference between the two approaches take a look at the image above. Image the bone chain displayed as an arm\n         you want to animate. The first bone can be your upper arm, the second the lower arm and the final bone the hand. \n         Now imagine you want to animate from a straight arm to a bent arm, so basically from the first chain in the image to the \n         second one.\n    </p>\n    <p>\n        Using forward kinematics what you would now have to do is to start with the upper arm and rotate it clockwise. After that \n        you would need to rotate the lower arm counter clockwise to bring it up again before you can finally rotate the hand counter\n         clockwise to reach the final state. When using inverse kinematics instead all you would have to do is you move the hand bone\n          to the desired position and rotation. The rest of its bone chain would then automatically rotate to the correct position \n          since the bones are connected.\n    </p>\n    <p>\n        You now might wonder why you should use the obviously more work intense way of forward kinematics. The answer is that inverse\n         kinematics can become unpredictable pretty fast. Imagine a big bone chain where multiple bones influence each other. If you need\n          a very explicit way to set up a precise animation you might have difficulty achieving such with inverse kinematics.\n    </p>\n    <h3 id=\"toc_further_references\">Further references</h3>\n    <div class=\"ui warning message\">\n        <ul>\n          <li><a href=\"https://en.wikipedia.org/wiki/Skeletal_animation\" target=\"_blank\">Skeletal Animation</a></li>\n          <li><a href=\"https://www.creativebloq.com/features/3d-rigging-all-you-need-to-know-to-get-started\" target=\"_blank\">Rigging basics</a></li>\n          <li><a href=\"https://blenderartists.org/t/whats-the-difference-between-inverse-kinematics-forward-kinematics/585349\" target=\"_blank\">FK vs. IK</a></li>\n        </ul>\n    </div>\n</div>\n\n";

/***/ }),

/***/ 542:
/*!***********************************************************!*\
  !*** ./src/app/welcome/welcome.component.html?ngResource ***!
  \***********************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<div id=\"start_content\">\n    <p id=\"welcome_msg\">\n        Welcome to this E-Learning on Blender! This E-Learning is designed to guide you through your first steps with Blender and teach \n        you anything you need to know to get started. This includes the basics of Blender itself, a chapter about how to model objects \n        and of course how to animate them. Simply follow the lectures in the navigation \n        bar to the left. Without wasting any time get started and have fun! \n    </p>\n    <figure class=\"center\">\n        <img src=\"./assets/images/blender_logo.png\" alt=\"blender Logo\">\n        <figcaption>\n            Blender Logo\n            <a href=\"https://www.blender.org/about/logo/\" target=\"_blank\">\n                (source)\n            </a>\n        </figcaption>\n    </figure>\n</div>\n";

/***/ }),

/***/ 3765:
/*!***********************************************************************************!*\
  !*** ./src/app/xml-video-component/xml-video-component.component.html?ngResource ***!
  \***********************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<div>\n    <video autoplay controls class=\"video\" #video>\n        <source src=\"{{videopath}}\" type=\"video/mp4\">\n        Your browser does not support the video tag.\n    </video>\n</div>\n<div>\n    <div id=\"tableContainer\" class=\"tableContainer\">\n        <table class=\"keystrokeTable\" width=\"100%\" class=\"scrollTable\">\n            <colgroup>\n                <col span=\"1\" style=\"width: 8%\"/>\n                <col span=\"1\" style=\"width: 10%\"/>\n                <col span=\"1\" style=\"width: 82%\"/>\n            </colgroup>\n            <thead class=\"fixedHeader\">\n                <tr>\n                    <th>Video time</th>\n                    <th>Key pressed</th>\n                    <th>Additional information</th>\n                </tr>\n            </thead>\n            <tbody class=\"keystrokeAnchor scrollContent\" #keystrokeAnchor></tbody>\n        </table>\n    </div>\n    <label class=\"switch\">\n        <input type=\"checkbox\" (change)=\"toggleChanged()\">\n        <span class=\"slider round\"></span>\n    </label>\n</div>\n";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(4431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map