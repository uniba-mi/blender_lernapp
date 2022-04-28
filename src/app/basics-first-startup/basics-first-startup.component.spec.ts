import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstStartupComponent } from './basics-first-startup.component';

describe('FirstStartupComponent', () => {
  let component: FirstStartupComponent;
  let fixture: ComponentFixture<FirstStartupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstStartupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstStartupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
