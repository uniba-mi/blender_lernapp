import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupSceneComponent } from './animation-setup-scene.component';

describe('SetupSceneComponent', () => {
  let component: SetupSceneComponent;
  let fixture: ComponentFixture<SetupSceneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupSceneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
