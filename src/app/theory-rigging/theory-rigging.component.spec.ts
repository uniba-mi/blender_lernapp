import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheoryRiggingComponent } from './theory-rigging.component';

describe('TRiggingComponent', () => {
  let component: TheoryRiggingComponent;
  let fixture: ComponentFixture<TheoryRiggingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheoryRiggingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheoryRiggingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
