import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingRocketComponent } from './animation-creating-rocket.component';

describe('CreatingRocketComponent', () => {
  let component: CreatingRocketComponent;
  let fixture: ComponentFixture<CreatingRocketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatingRocketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatingRocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
