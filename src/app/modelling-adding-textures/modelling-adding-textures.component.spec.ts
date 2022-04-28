import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingTexturesComponent } from './modelling-adding-textures.component';

describe('AddingTexturesComponent', () => {
  let component: AddingTexturesComponent;
  let fixture: ComponentFixture<AddingTexturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingTexturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingTexturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
