import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishRobotComponent } from './finish-robot.component';

describe('FinishRobotComponent', () => {
  let component: FinishRobotComponent;
  let fixture: ComponentFixture<FinishRobotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishRobotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishRobotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
