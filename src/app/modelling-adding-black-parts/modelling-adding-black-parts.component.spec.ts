import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingBlackPartsComponent } from './modelling-adding-black-parts.component';

describe('AddingBlackPartsComponent', () => {
  let component: AddingBlackPartsComponent;
  let fixture: ComponentFixture<AddingBlackPartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingBlackPartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingBlackPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
