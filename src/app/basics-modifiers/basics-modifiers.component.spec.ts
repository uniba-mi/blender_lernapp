import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicModifiersComponent } from './basics-modifiers.component';

describe('EditModeComponent', () => {
  let component: BasicModifiersComponent;
  let fixture: ComponentFixture<BasicModifiersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicModifiersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicModifiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
