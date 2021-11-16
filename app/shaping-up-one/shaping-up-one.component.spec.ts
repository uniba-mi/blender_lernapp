import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapingUpOneComponent } from './shaping-up-one.component';

describe('ShapingUpOneComponent', () => {
  let component: ShapingUpOneComponent;
  let fixture: ComponentFixture<ShapingUpOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShapingUpOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShapingUpOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
