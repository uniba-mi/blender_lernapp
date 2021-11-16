import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingWindowsComponent } from './adding-windows.component';

describe('AddingWindowsComponent', () => {
  let component: AddingWindowsComponent;
  let fixture: ComponentFixture<AddingWindowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingWindowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingWindowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
