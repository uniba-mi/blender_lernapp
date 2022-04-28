import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingRobotPartOneComponent } from './animation-creating-robot-part-one.component';

describe('CreatingRobotPartOneComponent', () => {
  let component: CreatingRobotPartOneComponent;
  let fixture: ComponentFixture<CreatingRobotPartOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatingRobotPartOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatingRobotPartOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
