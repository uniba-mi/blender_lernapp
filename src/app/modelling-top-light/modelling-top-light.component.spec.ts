import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingTopLightComponent } from './modelling-top-light.component';

describe('AddingTopLightComponent', () => {
  let component: AddingTopLightComponent;
  let fixture: ComponentFixture<AddingTopLightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingTopLightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingTopLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
