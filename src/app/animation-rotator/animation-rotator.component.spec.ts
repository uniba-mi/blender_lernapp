import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimateRotatorComponent } from './animation-rotator.component';

describe('AnimateRotatorComponent', () => {
  let component: AnimateRotatorComponent;
  let fixture: ComponentFixture<AnimateRotatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimateRotatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimateRotatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
