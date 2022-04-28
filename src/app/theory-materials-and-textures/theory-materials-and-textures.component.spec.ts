import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheoryMaterialsAndTexturesComponent } from './theory-materials-and-textures.component';

describe('TMaterialsAndTexturesComponent', () => {
  let component: TheoryMaterialsAndTexturesComponent;
  let fixture: ComponentFixture<TheoryMaterialsAndTexturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheoryMaterialsAndTexturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheoryMaterialsAndTexturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
