import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationChapterOverviewComponent } from './animation-chapter-overview.component';

describe('AnimationChapterOverviewComponent', () => {
  let component: AnimationChapterOverviewComponent;
  let fixture: ComponentFixture<AnimationChapterOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationChapterOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationChapterOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
