import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PocComponent } from './poc/poc.component';
import { AboutComponent } from './about/about.component';
import { RequiredToolsComponent } from './required-tools/required-tools.component';
import { AboutElearningComponent } from './about-elearning/about-elearning.component';
import { FirstStartupComponent } from './first-startup/first-startup.component';
import { BlenderUiComponent } from './blender-ui/blender-ui.component';
import { ViewportComponent } from './viewport/viewport.component';
import { TCoordinateSystemComponent } from './t-coordinate-system/t-coordinate-system.component';
import { EditModeComponent } from './edit-mode/edit-mode.component';
import { FirstSceneComponent } from './first-scene/first-scene.component';
import { ModellingChapterOverviewComponent } from "./modelling-chapter-overview/modelling-chapter-overview.component";
import { AddingReferenceMaterialComponent } from "./adding-reference-material/adding-reference-material.component";
import { BlockingOutComponent } from "./blocking-out/blocking-out.component";
import { ShapingUpOneComponent } from "./shaping-up-one/shaping-up-one.component";
import { ShapingUpTwoComponent } from "./shaping-up-two/shaping-up-two.component";
import { AddingWheelsComponent } from "./adding-wheels/adding-wheels.component";
import { AddingBlackPartsComponent } from "./adding-black-parts/adding-black-parts.component";
import { CuttingDoorsComponent } from "./cutting-doors/cutting-doors.component";
import { AddingDetailsComponent } from "./adding-details/adding-details.component";
import { AddingLaddersComponent } from "./adding-ladders/adding-ladders.component";
import { UsingCurvesComponent } from "./using-curves/using-curves.component";
import { AddingTexturesComponent } from "./adding-textures/adding-textures.component";
import { AddingExtinguisherComponent } from "./adding-extinguisher/adding-extinguisher.component";
import { AddingWindowsComponent } from "./adding-windows/adding-windows.component";
import { AddingStairsFrontComponent } from "./adding-stairs-front/adding-stairs-front.component";
import { AddingLightsComponent } from "./adding-lights/adding-lights.component";
import { AddingTopLightComponent } from "./adding-top-light/adding-top-light.component";
import { FinishingModelComponent } from "./finishing-model/finishing-model.component";
import { AnimationChapterOverviewComponent } from "./animation-chapter-overview/animation-chapter-overview.component";
import { CreatingRobotPartOneComponent } from "./creating-robot-part-one/creating-robot-part-one.component";
import { CreatingRobotPartTwoComponent } from "./creating-robot-part-two/creating-robot-part-two.component";
import { CreatingRocketComponent } from "./creating-rocket/creating-rocket.component";
import { FinishRobotComponent } from "./finish-robot/finish-robot.component";
import { ImportingObjectsComponent } from "./importing-objects/importing-objects.component";
import { CreatingRigComponent } from "./creating-rig/creating-rig.component";
import { ParentingRigComponent } from "./parenting-rig/parenting-rig.component";
import { RestrictingBonesComponent } from "./restricting-bones/restricting-bones.component";
import { SetupSceneComponent } from "./setup-scene/setup-scene.component";
import { AnimateRobotComponent } from "./animate-robot/animate-robot.component";
import { AnimateRocketComponent } from "./animate-rocket/animate-rocket.component";
import { AnimateRotatorComponent } from "./animate-rotator/animate-rotator.component";
import { AddingMaterialsComponent } from "./adding-materials/adding-materials.component";
import { RenderingComponent } from "./rendering/rendering.component";
import { TCurvesComponent } from "./t-curves/t-curves.component";
import { TModifiersComponent } from "./t-modifiers/t-modifiers.component";
import { TMaterialsAndTexturesComponent } from "./t-materials-and-textures/t-materials-and-textures.component";
import { TRiggingComponent } from "./t-rigging/t-rigging.component";
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
