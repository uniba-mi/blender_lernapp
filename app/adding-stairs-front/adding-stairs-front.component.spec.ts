import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingStairsFrontComponent } from './adding-stairs-front.component';

describe('AddingStairsFrontComponent', () => {
  let component: AddingStairsFrontComponent;
  let fixture: ComponentFixture<AddingStairsFrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingStairsFrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingStairsFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
