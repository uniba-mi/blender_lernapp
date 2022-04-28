import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelWheelsComponent } from './modelling-wall-e-wheels.component';

describe('BlockingOutComponent', () => {
  let component: ModelWheelsComponent;
  let fixture: ComponentFixture<ModelWheelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelWheelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelWheelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
