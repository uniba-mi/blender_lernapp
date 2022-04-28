import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PocComponent } from './poc/poc.component';
import { AboutComponent } from './about/about.component';
import { RequiredToolsComponent } from './setup-required-tools/setup-required-tools.component';
import { AboutElearningComponent } from './setup-about-elearning/setup-about-elearning.component';
import { FirstStartupComponent } from './basics-first-startup/basics-first-startup.component';
import { BlenderUiComponent } from './basics-blender-ui/basics-blender-ui.component';
import { ViewportComponent } from './basics-viewport/basics-viewport.component';
import { TCoordinateSystemComponent } from './basics-theory-coordinate-system/basics-theory-coordinate-system.component';
import { EditModeComponent } from './basics-edit-mode/basics-edit-mode.component';
import { FirstSceneComponent } from './basics-first-scene/basics-first-scene.component';
import { ModellingChapterOverviewComponent } from "./modelling-chapter-overview/modelling-chapter-overview.component";
import { AddingReferenceMaterialComponent } from "./modelling-reference-material/modelling-reference-material.component";
import { BlockingOutComponent } from "./modelling-blocking-out/modelling-blocking-out.component";
import { ShapingUpOneComponent } from "./modelling-shaping-up-one/modelling-shaping-up-one.component";
import { ShapingUpTwoComponent } from "./modelling-shaping-up-two/modelling-shaping-up-two.component";
import { AddingWheelsComponent } from "./modelling-adding-wheels/modelling-adding-wheels.component";
import { AddingBlackPartsComponent } from "./modelling-adding-black-parts/modelling-adding-black-parts.component";
import { CuttingDoorsComponent } from "./modelling-cutting-doors/modelling-cutting-doors.component";
import { AddingDetailsComponent } from "./modelling-adding-details/modelling-adding-details.component";
import { AddingLaddersComponent } from "./modelling-adding-ladders/modelling-adding-ladders.component";
import { UsingCurvesComponent } from "./modelling-using-curves/modelling-using-curves.component";
import { AddingTexturesComponent } from "./modelling-adding-textures/modelling-adding-textures.component";
import { AddingExtinguisherComponent } from "./modelling-adding-extinguisher/modelling-adding-extinguisher.component";
import { AddingWindowsComponent } from "./modelling-adding-windows/modelling-adding-windows.component";
import { AddingStairsFrontComponent } from "./modelling-adding-stairs-front/modelling-adding-stairs-front.component";
import { AddingLightsComponent } from "./modelling-adding-lights/modelling-adding-lights.component";
import { AddingTopLightComponent } from "./modelling-top-light/modelling-top-light.component";
import { FinishingModelComponent } from "./modelling-finishing-model/modelling-finishing-model.component";
import { AnimationChapterOverviewComponent } from "./animation-chapter-overview/animation-chapter-overview.component";
import { CreatingRobotPartOneComponent } from "./animation-creating-robot-part-one/animation-creating-robot-part-one.component";
import { CreatingRobotPartTwoComponent } from "./animation-creating-robot-part-two/animation-creating-robot-part-two.component";
import { CreatingRocketComponent } from "./animation-creating-rocket/animation-creating-rocket.component";
import { FinishRobotComponent } from "./animation-finish-robot/animation-finish-robot.component";
import { ImportingObjectsComponent } from "./animation-importing-objects/animation-importing-objects.component";
import { CreatingRigComponent } from "./animation-creating-rig/animation-creating-rig.component";
import { ParentingRigComponent } from "./animation-parenting-rig/animation-parenting-rig.component";
import { RestrictingBonesComponent } from "./animation-restricting-bones/animation-restricting-bones.component";
import { SetupSceneComponent } from "./animation-setup-scene/animation-setup-scene.component";
import { AnimateRobotComponent } from "./animation-robot/animation-robot.component";
import { AnimateRocketComponent } from "./animation-rocket/animation-rocket.component";
import { AnimateRotatorComponent } from "./animation-rotator/animation-rotator.component";
import { AddingMaterialsComponent } from "./modelling-adding-materials/modelling-adding-materials.component";
import { RenderingComponent } from "./modelling-rendering/modelling-rendering.component";
import { TCurvesComponent } from "./modelling-theory-curves/modelling-theory-curves.component";
import { TModifiersComponent } from "./modelling-theory-modifiers/modelling-theory-modifiers.component";
import { TMaterialsAndTexturesComponent } from "./modelling-theory-materials-and-textures/modelling-theory-materials-and-textures.component";
import { TRiggingComponent } from "./animation-t-rigging/animation-t-rigging.component";
import { ConclusionComponent } from "./conclusion/conclusion.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'poc', component: PocComponent},
  { path: 'about', component: AboutComponent},
  { path: 'required-tools', component: RequiredToolsComponent},
  { path: 'about-elearning', component: AboutElearningComponent},
  { path: 'first-startup', component: FirstStartupComponent},
  { path: 'blender-ui', component: BlenderUiComponent},
  { path: 'viewport', component: ViewportComponent},
  { path: 't-coordinate-system', component: TCoordinateSystemComponent},
  { path: 'edit-mode', component: EditModeComponent},
  { path: 'first-scene', component: FirstSceneComponent},
  { path: 'modelling-chapter-overview', component: ModellingChapterOverviewComponent},
  { path: 'adding-reference-material', component: AddingReferenceMaterialComponent},
  { path: 'blocking-out', component: BlockingOutComponent},
  { path: 'shaping-up-one', component: ShapingUpOneComponent},
  { path: 'shaping-up-two', component: ShapingUpTwoComponent},
  { path: 'adding-wheels', component: AddingWheelsComponent},
  { path: 'adding-materials', component: AddingMaterialsComponent},
  { path: 'adding-black-parts', component: AddingBlackPartsComponent},
  { path: 'cutting-doors', component: CuttingDoorsComponent},
  { path: 'adding-details', component: AddingDetailsComponent},
  { path: 'adding-ladders', component: AddingLaddersComponent},
  { path: 'using-curves', component: UsingCurvesComponent},
  { path: 'adding-textures', component: AddingTexturesComponent},
  { path: 'adding-extinguisher', component: AddingExtinguisherComponent},
  { path: 'adding-windows', component: AddingWindowsComponent},
  { path: 'adding-stairs-front', component: AddingStairsFrontComponent},
  { path: 'adding-lights', component: AddingLightsComponent},
  { path: 'adding-top-light', component: AddingTopLightComponent},
  { path: 'finishing-model', component: FinishingModelComponent},
  { path: 'animation-chapter-overview', component: AnimationChapterOverviewComponent},
  { path: 'creating-robot-part-one', component: CreatingRobotPartOneComponent},
  { path: 'creating-robot-part-two', component: CreatingRobotPartTwoComponent},
  { path: 'creating-rocket', component: CreatingRocketComponent},
  { path: 'finish-robot', component: FinishRobotComponent},
  { path: 'importing-objects', component: ImportingObjectsComponent},
  { path: 'creating-rig', component: CreatingRigComponent},
  { path: 'parenting-rig', component: ParentingRigComponent},
  { path: 'restricting-bones', component: RestrictingBonesComponent},
  { path: 'setup-scene', component: SetupSceneComponent},
  { path: 'animate-robot', component: AnimateRobotComponent},
  { path: 'animate-rocket', component: AnimateRocketComponent},
  { path: 't-curves', component: TCurvesComponent},
  { path: 't-mat-tex', component: TMaterialsAndTexturesComponent},
  { path: 't-modifiers', component: TModifiersComponent},
  { path: 't-rigging', component: TRiggingComponent},
  { path: 'rendering', component: RenderingComponent},
  { path: 'animate-rotator', component: AnimateRotatorComponent},
  { path: 'conclusion', component: ConclusionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {onSameUrlNavigation: "reload"}
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
