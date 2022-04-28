import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimateRobotComponent } from './animation-robot.component';

describe('AnimateRobotComponent', () => {
  let component: AnimateRobotComponent;
  let fixture: ComponentFixture<AnimateRobotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimateRobotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimateRobotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
