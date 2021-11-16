import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportingObjectsComponent } from './importing-objects.component';

describe('ImportingObjectsComponent', () => {
  let component: ImportingObjectsComponent;
  let fixture: ComponentFixture<ImportingObjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportingObjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportingObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
