import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelPlantComponent } from './modelling-plant.component';

describe('AddingWheelsComponent', () => {
  let component: ModelPlantComponent;
  let fixture: ComponentFixture<ModelPlantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelPlantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
