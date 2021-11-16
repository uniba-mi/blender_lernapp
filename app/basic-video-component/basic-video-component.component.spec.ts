import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicVideoComponentComponent } from './basic-video-component.component';

describe('BasicVideoComponentComponent', () => {
  let component: BasicVideoComponentComponent;
  let fixture: ComponentFixture<BasicVideoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicVideoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicVideoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
