import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishingModelComponent } from './finishing-model.component';

describe('FinishingModelComponent', () => {
  let component: FinishingModelComponent;
  let fixture: ComponentFixture<FinishingModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishingModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishingModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
