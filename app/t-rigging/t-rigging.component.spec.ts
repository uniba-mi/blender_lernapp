import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TRiggingComponent } from './t-rigging.component';

describe('TRiggingComponent', () => {
  let component: TRiggingComponent;
  let fixture: ComponentFixture<TRiggingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TRiggingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TRiggingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
