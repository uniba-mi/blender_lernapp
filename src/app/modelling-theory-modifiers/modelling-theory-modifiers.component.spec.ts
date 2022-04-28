import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TModifiersComponent } from './modelling-theory-modifiers.component';

describe('TModifiersComponent', () => {
  let component: TModifiersComponent;
  let fixture: ComponentFixture<TModifiersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TModifiersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TModifiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
