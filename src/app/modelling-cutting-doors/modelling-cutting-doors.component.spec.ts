import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuttingDoorsComponent } from './modelling-cutting-doors.component';

describe('CuttingDoorsComponent', () => {
  let component: CuttingDoorsComponent;
  let fixture: ComponentFixture<CuttingDoorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuttingDoorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuttingDoorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
