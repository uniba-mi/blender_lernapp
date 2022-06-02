import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormsModule } from '@angular/forms';

import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AboutComponent } from './about/about.component'; 

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BasicVideoComponentComponent } from './basic-video-component/basic-video-component.component';
import { XmlVideoComponentComponent } from './xml-video-component/xml-video-component.component';
import { QuizComponent } from './quiz-component/quiz-component.component';
import { CollapseComponent } from './collapse-component/collapse-component.component';
import { RequiredToolsComponent } from './setup-required-tools/setup-required-tools.component';
import { AboutElearningComponent } from './setup-about-elearning/setup-about-elearning.component';
import { BlenderUiComponent } from './basics-blender-ui/basics-blender-ui.component';
import { BasicToolsComponent } from './basics-tools/basics-tools.component';
import { TheoryCoordinateSystemComponent } from './theory-coordinate-system/theory-coordinate-system.component';
import { BasicModifiersComponent } from './basics-modifiers/basics-modifiers.component';
import { AnimationChapterOverviewComponent } from './animation-chapter-overview/animation-chapter-overview.component';
import { AnimationComponent } from './rigging-and-animation/rigging-and-animation.component';
import { ModellingChapterOverviewComponent } from './modelling-chapter-overview/modelling-chapter-overview.component';
import { ModelBodyComponent } from './modelling-wall-e-body/modelling-wall-e-body.component';
import { ModelWheelsComponent } from './modelling-wall-e-wheels/modelling-wall-e-wheels.component';
import { ModelHeadComponent } from './modelling-wall-e-head/modelling-wall-e-head.component';
import { ModelArmsComponent } from './modelling-wall-e-arms/modelling-wall-e-arms.component';
import { ModelPlantComponent } from './modelling-plant/modelling-plant.component';
import { TheoryRiggingComponent } from './theory-rigging/theory-rigging.component';
import { TheoryMaterialsAndTexturesComponent } from './theory-materials-and-textures/theory-materials-and-textures.component';
import { TheoryModifiersComponent } from './theory-modifiers/theory-modifiers.component';
import { TheoryCurvesComponent } from './theory-curves/theory-curves.component';
import { ColoringComponent } from './coloring-and-rendering/coloring-and-rendering.component';
import { ConclusionComponent } from './conclusion/conclusion.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    BasicVideoComponentComponent,
    XmlVideoComponentComponent,
    QuizComponent,
    CollapseComponent,
    RequiredToolsComponent,
    AboutElearningComponent,
    BlenderUiComponent,
    BasicToolsComponent,
    TheoryCoordinateSystemComponent,
    BasicModifiersComponent,
    AnimationChapterOverviewComponent,
    AnimationComponent,
    ModellingChapterOverviewComponent,
    ModelBodyComponent,
    ModelWheelsComponent,
    ModelHeadComponent,
    ModelArmsComponent,
    ModelPlantComponent,
    TheoryRiggingComponent,
    TheoryMaterialsAndTexturesComponent,
    TheoryModifiersComponent,
    TheoryCurvesComponent,
    ColoringComponent,
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
