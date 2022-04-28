import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingExtinguisherComponent } from './modelling-adding-extinguisher.component';

describe('AddingExtinguisherComponent', () => {
  let component: AddingExtinguisherComponent;
  let fixture: ComponentFixture<AddingExtinguisherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingExtinguisherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingExtinguisherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
