import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TCurvesComponent } from './t-curves.component';

describe('TCurvesComponent', () => {
  let component: TCurvesComponent;
  let fixture: ComponentFixture<TCurvesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TCurvesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TCurvesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
