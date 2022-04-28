import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingCurvesComponent } from './modelling-using-curves.component';

describe('UsingCurvesComponent', () => {
  let component: UsingCurvesComponent;
  let fixture: ComponentFixture<UsingCurvesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsingCurvesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingCurvesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
