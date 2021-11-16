import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutElearningComponent } from './about-elearning.component';

describe('AboutElearningComponent', () => {
  let component: AboutElearningComponent;
  let fixture: ComponentFixture<AboutElearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutElearningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutElearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
