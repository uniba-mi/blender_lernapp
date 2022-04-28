import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingMaterialsComponent } from './modelling-adding-materials.component';

describe('AddingMaterialsComponent', () => {
  let component: AddingMaterialsComponent;
  let fixture: ComponentFixture<AddingMaterialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingMaterialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
