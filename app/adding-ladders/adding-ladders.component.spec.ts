import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingLaddersComponent } from './adding-ladders.component';

describe('AddingLaddersComponent', () => {
  let component: AddingLaddersComponent;
  let fixture: ComponentFixture<AddingLaddersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingLaddersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingLaddersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
