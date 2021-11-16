import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrictingBonesComponent } from './restricting-bones.component';

describe('RestrictingBonesComponent', () => {
  let component: RestrictingBonesComponent;
  let fixture: ComponentFixture<RestrictingBonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestrictingBonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestrictingBonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
