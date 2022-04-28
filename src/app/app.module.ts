import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PocComponent } from './poc/poc.component';
import { FormsModule } from '@angular/forms';

import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AboutComponent } from './about/about.component'; 

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BasicVideoComponentComponent } from './basic-video-component/basic-video-component.component';
import { XmlVideoComponentComponent } from './xml-video-component/xml-video-component.component';
import { QuizComponentComponent } from './quiz-component/quiz-component.component';
import { RequiredToolsComponent } from './setup-required-tools/setup-required-tools.component';
import { AboutElearningComponent } from './setup-about-elearning/setup-about-elearning.component';
import { FirstStartupComponent } from './basics-first-startup/basics-first-startup.component';
import { BlenderUiComponent } from './basics-blender-ui/basics-blender-ui.component';
import { ViewportComponent } from './basics-viewport/basics-viewport.component';
import { TCoordinateSystemComponent } from './basics-theory-coordinate-system/basics-theory-coordinate-system.component';
import { EditModeComponent } from './basics-edit-mode/basics-edit-mode.component';
import { FirstSceneComponent } from './basics-first-scene/basics-first-scene.component';
import { AnimationChapterOverviewComponent } from './animation-chapter-overview/animation-chapter-overview.component';
import { CreatingRobotPartOneComponent } from './animation-creating-robot-part-one/animation-creating-robot-part-one.component';
import { CreatingRobotPartTwoComponent } from './animation-creating-robot-part-two/animation-creating-robot-part-two.component';
import { CreatingRocketComponent } from './animation-creating-rocket/animation-creating-rocket.component';
import { FinishRobotComponent } from './animation-finish-robot/animation-finish-robot.component';
import { ImportingObjectsComponent } from './animation-importing-objects/animation-importing-objects.component';
import { CreatingRigComponent } from './animation-creating-rig/animation-creating-rig.component';
import { ParentingRigComponent } from './animation-parenting-rig/animation-parenting-rig.component';
import { RestrictingBonesComponent } from './animation-restricting-bones/animation-restricting-bones.component';
import { SetupSceneComponent } from './animation-setup-scene/animation-setup-scene.component';
import { AnimateRobotComponent } from './animation-robot/animation-robot.component';
import { AnimateRocketComponent } from './animation-rocket/animation-rocket.component';
import { AnimateRotatorComponent } from './animation-rotator/animation-rotator.component';
import { ModellingChapterOverviewComponent } from './modelling-chapter-overview/modelling-chapter-overview.component';
import { AddingReferenceMaterialComponent } from './modelling-reference-material/modelling-reference-material.component';
import { BlockingOutComponent } from './modelling-blocking-out/modelling-blocking-out.component';
import { ShapingUpOneComponent } from './modelling-shaping-up-one/modelling-shaping-up-one.component';
import { ShapingUpTwoComponent } from './modelling-shaping-up-two/modelling-shaping-up-two.component';
import { AddingWheelsComponent } from './modelling-adding-wheels/modelling-adding-wheels.component';
import { AddingBlackPartsComponent } from './modelling-adding-black-parts/modelling-adding-black-parts.component';
import { CuttingDoorsComponent } from './modelling-cutting-doors/modelling-cutting-doors.component';
import { AddingDetailsComponent } from './modelling-adding-details/modelling-adding-details.component';
import { AddingLaddersComponent } from './modelling-adding-ladders/modelling-adding-ladders.component';
import { UsingCurvesComponent } from './modelling-using-curves/modelling-using-curves.component';
import { AddingTexturesComponent } from './modelling-adding-textures/modelling-adding-textures.component';
import { AddingExtinguisherComponent } from './modelling-adding-extinguisher/modelling-adding-extinguisher.component';
import { AddingWindowsComponent } from './modelling-adding-windows/modelling-adding-windows.component';
import { AddingStairsFrontComponent } from './modelling-adding-stairs-front/modelling-adding-stairs-front.component';
import { AddingLightsComponent } from './modelling-adding-lights/modelling-adding-lights.component';
import { AddingTopLightComponent } from './modelling-top-light/modelling-top-light.component';
import { FinishingModelComponent } from './modelling-finishing-model/modelling-finishing-model.component';
import { AddingMaterialsComponent } from './modelling-adding-materials/modelling-adding-materials.component';
import { TRiggingComponent } from './animation-t-rigging/animation-t-rigging.component';
import { TMaterialsAndTexturesComponent } from './modelling-theory-materials-and-textures/modelling-theory-materials-and-textures.component';
import { TModifiersComponent } from './modelling-theory-modifiers/modelling-theory-modifiers.component';
import { TCurvesComponent } from './modelling-theory-curves/modelling-theory-curves.component';
import { RenderingComponent } from './modelling-rendering/modelling-rendering.component';
import { ConclusionComponent } from './conclusion/conclusion.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PocComponent,
    AboutComponent,
    BasicVideoComponentComponent,
    XmlVideoComponentComponent,
    QuizComponentComponent,
    RequiredToolsComponent,
    AboutElearningComponent,
    FirstStartupComponent,
    BlenderUiComponent,
    ViewportComponent,
    TCoordinateSystemComponent,
    EditModeComponent,
    FirstSceneComponent,
    AnimationChapterOverviewComponent,
    CreatingRobotPartOneComponent,
    CreatingRobotPartTwoComponent,
    CreatingRocketComponent,
    FinishRobotComponent,
    ImportingObjectsComponent,
    CreatingRigComponent,
    ParentingRigComponent,
    RestrictingBonesComponent,
    SetupSceneComponent,
    AnimateRobotComponent,
    AnimateRocketComponent,
    AnimateRotatorComponent,
    ModellingChapterOverviewComponent,
    AddingReferenceMaterialComponent,
    BlockingOutComponent,
    ShapingUpOneComponent,
    ShapingUpTwoComponent,
    AddingWheelsComponent,
    AddingBlackPartsComponent,
    CuttingDoorsComponent,
    AddingDetailsComponent,
    AddingLaddersComponent,
    UsingCurvesComponent,
    AddingTexturesComponent,
    AddingExtinguisherComponent,
    AddingWindowsComponent,
    AddingStairsFrontComponent,
    AddingLightsComponent,
    AddingTopLightComponent,
    FinishingModelComponent,
    AddingMaterialsComponent,
    TRiggingComponent,
    TMaterialsAndTexturesComponent,
    TModifiersComponent,
    TCurvesComponent,
    RenderingComponent,
    ConclusionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    NgbModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
