import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlenderUiComponent } from './blender-ui.component';

describe('BlenderUiComponent', () => {
  let component: BlenderUiComponent;
  let fixture: ComponentFixture<BlenderUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlenderUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlenderUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
