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
import { RequiredToolsComponent } from './required-tools/required-tools.component';
import { AboutElearningComponent } from './about-elearning/about-elearning.component';
import { FirstStartupComponent } from './first-startup/first-startup.component';
import { BlenderUiComponent } from './blender-ui/blender-ui.component';
import { ViewportComponent } from './viewport/viewport.component';
import { TCoordinateSystemComponent } from './t-coordinate-system/t-coordinate-system.component';
import { EditModeComponent } from './edit-mode/edit-mode.component';
import { FirstSceneComponent } from './first-scene/first-scene.component';
import { AnimationChapterOverviewComponent } from './animation-chapter-overview/animation-chapter-overview.component';
import { CreatingRobotPartOneComponent } from './creating-robot-part-one/creating-robot-part-one.component';
import { CreatingRobotPartTwoComponent } from './creating-robot-part-two/creating-robot-part-two.component';
import { CreatingRocketComponent } from './creating-rocket/creating-rocket.component';
import { FinishRobotComponent } from './finish-robot/finish-robot.component';
import { ImportingObjectsComponent } from './importing-objects/importing-objects.component';
import { CreatingRigComponent } from './creating-rig/creating-rig.component';
import { ParentingRigComponent } from './parenting-rig/parenting-rig.component';
import { RestrictingBonesComponent } from './restricting-bones/restricting-bones.component';
import { SetupSceneComponent } from './setup-scene/setup-scene.component';
import { AnimateRobotComponent } from './animate-robot/animate-robot.component';
import { AnimateRocketComponent } from './animate-rocket/animate-rocket.component';
import { AnimateRotatorComponent } from './animate-rotator/animate-rotator.component';
import { ModellingChapterOverviewComponent } from './modelling-chapter-overview/modelling-chapter-overview.component';
import { AddingReferenceMaterialComponent } from './adding-reference-material/adding-reference-material.component';
import { BlockingOutComponent } from './blocking-out/blocking-out.component';
import { ShapingUpOneComponent } from './shaping-up-one/shaping-up-one.component';
import { ShapingUpTwoComponent } from './shaping-up-two/shaping-up-two.component';
import { AddingWheelsComponent } from './adding-wheels/adding-wheels.component';
import { AddingBlackPartsComponent } from './adding-black-parts/adding-black-parts.component';
import { CuttingDoorsComponent } from './cutting-doors/cutting-doors.component';
import { AddingDetailsComponent } from './adding-details/adding-details.component';
import { AddingLaddersComponent } from './adding-ladders/adding-ladders.component';
import { UsingCurvesComponent } from './using-curves/using-curves.component';
import { AddingTexturesComponent } from './adding-textures/adding-textures.component';
import { AddingExtinguisherComponent } from './adding-extinguisher/adding-extinguisher.component';
import { AddingWindowsComponent } from './adding-windows/adding-windows.component';
import { AddingStairsFrontComponent } from './adding-stairs-front/adding-stairs-front.component';
import { AddingLightsComponent } from './adding-lights/adding-lights.component';
import { AddingTopLightComponent } from './adding-top-light/adding-top-light.component';
import { FinishingModelComponent } from './finishing-model/finishing-model.component';
import { AddingMaterialsComponent } from './adding-materials/adding-materials.component';
import { TRiggingComponent } from './t-rigging/t-rigging.component';
import { TMaterialsAndTexturesComponent } from './t-materials-and-textures/t-materials-and-textures.component';
import { TModifiersComponent } from './t-modifiers/t-modifiers.component';
import { TCurvesComponent } from './t-curves/t-curves.component';
import { RenderingComponent } from './rendering/rendering.component';
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
