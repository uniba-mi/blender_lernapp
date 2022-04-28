import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelBodyComponent } from './modelling-wall-e-body.component';

describe('AddingReferenceMaterialComponent', () => {
  let component: ModelBodyComponent;
  let fixture: ComponentFixture<ModelBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
