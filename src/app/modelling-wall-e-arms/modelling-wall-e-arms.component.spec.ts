import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelArmsComponent } from './modelling-wall-e-arms.component';

describe('ShapingUpTwoComponent', () => {
  let component: ModelArmsComponent;
  let fixture: ComponentFixture<ModelArmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelArmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelArmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
