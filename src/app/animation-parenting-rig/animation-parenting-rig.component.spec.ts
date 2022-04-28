import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentingRigComponent } from './animation-parenting-rig.component';

describe('ParentingRigComponent', () => {
  let component: ParentingRigComponent;
  let fixture: ComponentFixture<ParentingRigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentingRigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentingRigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
