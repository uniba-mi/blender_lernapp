import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheoryCurvesComponent } from './theory-curves.component';

describe('TCurvesComponent', () => {
  let component: TheoryCurvesComponent;
  let fixture: ComponentFixture<TheoryCurvesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheoryCurvesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheoryCurvesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
