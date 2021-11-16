import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModellingChapterOverviewComponent } from './modelling-chapter-overview.component';

describe('ModellingChapterOverviewComponent', () => {
  let component: ModellingChapterOverviewComponent;
  let fixture: ComponentFixture<ModellingChapterOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModellingChapterOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModellingChapterOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
