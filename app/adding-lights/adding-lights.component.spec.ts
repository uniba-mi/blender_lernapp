import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingLightsComponent } from './adding-lights.component';

describe('AddingLightsComponent', () => {
  let component: AddingLightsComponent;
  let fixture: ComponentFixture<AddingLightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingLightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingLightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
