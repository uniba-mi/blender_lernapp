import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingReferenceMaterialComponent } from './modelling-reference-material.component';

describe('AddingReferenceMaterialComponent', () => {
  let component: AddingReferenceMaterialComponent;
  let fixture: ComponentFixture<AddingReferenceMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingReferenceMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingReferenceMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
