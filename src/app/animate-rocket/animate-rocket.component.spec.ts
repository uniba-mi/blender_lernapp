import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimateRocketComponent } from './animate-rocket.component';

describe('AnimateRocketComponent', () => {
  let component: AnimateRocketComponent;
  let fixture: ComponentFixture<AnimateRocketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimateRocketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimateRocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
