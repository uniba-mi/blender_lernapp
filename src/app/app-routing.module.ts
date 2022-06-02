import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { RequiredToolsComponent } from './setup-required-tools/setup-required-tools.component';
import { AboutElearningComponent } from './setup-about-elearning/setup-about-elearning.component';
import { BlenderUiComponent } from './basics-blender-ui/basics-blender-ui.component';
import { BasicToolsComponent } from './basics-tools/basics-tools.component';
import { TheoryCoordinateSystemComponent } from './theory-coordinate-system/theory-coordinate-system.component';
import { BasicModifiersComponent } from './basics-modifiers/basics-modifiers.component';
import { ModellingChapterOverviewComponent } from "./modelling-chapter-overview/modelling-chapter-overview.component";
import { ModelBodyComponent } from "./modelling-wall-e-body/modelling-wall-e-body.component";
import { ModelWheelsComponent } from "./modelling-wall-e-wheels/modelling-wall-e-wheels.component";
import { ModelHeadComponent } from "./modelling-wall-e-head/modelling-wall-e-head.component";
import { ModelArmsComponent } from "./modelling-wall-e-arms/modelling-wall-e-arms.component";
import { ModelPlantComponent } from "./modelling-plant/modelling-plant.component";
import { AnimationChapterOverviewComponent } from "./animation-chapter-overview/animation-chapter-overview.component";
import { AnimationComponent } from "./rigging-and-animation/rigging-and-animation.component";
import { ColoringComponent } from "./coloring-and-rendering/coloring-and-rendering.component";
import { TheoryCurvesComponent } from "./theory-curves/theory-curves.component";
import { TheoryModifiersComponent } from "./theory-modifiers/theory-modifiers.component";
import { TheoryMaterialsAndTexturesComponent } from "./theory-materials-and-textures/theory-materials-and-textures.component";
import { TheoryRiggingComponent } from "./theory-rigging/theory-rigging.component";
import { ConclusionComponent } from "./conclusion/conclusion.component";

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'required-tools', component: RequiredToolsComponent},
  { path: 'about-elearning', component: AboutElearningComponent},
  { path: 'blender-ui', component: BlenderUiComponent},
  { path: 'basic-tools', component: BasicToolsComponent},
  { path: 'basic-modifiers', component: BasicModifiersComponent},
  { path: 'modelling-chapter-overview', component: ModellingChapterOverviewComponent},
  { path: 'model-body', component: ModelBodyComponent},
  { path: 'model-wheels', component: ModelWheelsComponent},
  { path: 'model-head', component: ModelHeadComponent},
  { path: 'model-arms', component: ModelArmsComponent},
  { path: 'model-plant', component: ModelPlantComponent},
  { path: 'coloring-and-rendering', component: ColoringComponent},
  { path: 'animation-chapter-overview', component: AnimationChapterOverviewComponent},
  { path: 'rigging-and-animation', component: AnimationComponent},
  { path: 'theory-coordinate-system', component: TheoryCoordinateSystemComponent},
  { path: 'theory-curves', component: TheoryCurvesComponent},
  { path: 'theory-mat-tex', component: TheoryMaterialsAndTexturesComponent},
  { path: 'theory-modifiers', component: TheoryModifiersComponent},
  { path: 'theory-rigging', component: TheoryRiggingComponent},
  { path: 'conclusion', component: ConclusionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {onSameUrlNavigation: "reload"}
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
