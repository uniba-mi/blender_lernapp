import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingRigComponent } from './creating-rig.component';

describe('CreatingRigComponent', () => {
  let component: CreatingRigComponent;
  let fixture: ComponentFixture<CreatingRigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatingRigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatingRigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
