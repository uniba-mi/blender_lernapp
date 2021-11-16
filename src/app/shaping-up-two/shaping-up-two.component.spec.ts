import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapingUpTwoComponent } from './shaping-up-two.component';

describe('ShapingUpTwoComponent', () => {
  let component: ShapingUpTwoComponent;
  let fixture: ComponentFixture<ShapingUpTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShapingUpTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShapingUpTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
