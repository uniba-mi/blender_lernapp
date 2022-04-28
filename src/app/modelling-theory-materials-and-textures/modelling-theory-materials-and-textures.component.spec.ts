import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TMaterialsAndTexturesComponent } from './modelling-theory-materials-and-textures.component';

describe('TMaterialsAndTexturesComponent', () => {
  let component: TMaterialsAndTexturesComponent;
  let fixture: ComponentFixture<TMaterialsAndTexturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TMaterialsAndTexturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TMaterialsAndTexturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
