import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingRobotPartTwoComponent } from './animation-creating-robot-part-two.component';

describe('CreatingRobotPartTwoComponent', () => {
  let component: CreatingRobotPartTwoComponent;
  let fixture: ComponentFixture<CreatingRobotPartTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatingRobotPartTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatingRobotPartTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
