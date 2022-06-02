import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequiredToolsComponent } from './setup-required-tools.component';

describe('RequiredToolsComponent', () => {
  let component: RequiredToolsComponent;
  let fixture: ComponentFixture<RequiredToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequiredToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequiredToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
