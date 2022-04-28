import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TCoordinateSystemComponent } from './basics-theory-coordinate-system.component';

describe('TCoordinateSystemComponent', () => {
  let component: TCoordinateSystemComponent;
  let fixture: ComponentFixture<TCoordinateSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TCoordinateSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TCoordinateSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
