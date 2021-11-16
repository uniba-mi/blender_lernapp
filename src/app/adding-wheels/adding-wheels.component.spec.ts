import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingWheelsComponent } from './adding-wheels.component';

describe('AddingWheelsComponent', () => {
  let component: AddingWheelsComponent;
  let fixture: ComponentFixture<AddingWheelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingWheelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingWheelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
