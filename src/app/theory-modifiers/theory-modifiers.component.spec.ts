import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheoryModifiersComponent } from './theory-modifiers.component';

describe('TModifiersComponent', () => {
  let component: TheoryModifiersComponent;
  let fixture: ComponentFixture<TheoryModifiersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheoryModifiersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheoryModifiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
