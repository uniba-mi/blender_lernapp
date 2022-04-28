import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheoryCoordinateSystemComponent } from './theory-coordinate-system.component';

describe('TCoordinateSystemComponent', () => {
  let component: TheoryCoordinateSystemComponent;
  let fixture: ComponentFixture<TheoryCoordinateSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheoryCoordinateSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheoryCoordinateSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
