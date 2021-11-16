import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XmlVideoComponentComponent } from './xml-video-component.component';

describe('XmlVideoComponentComponent', () => {
  let component: XmlVideoComponentComponent;
  let fixture: ComponentFixture<XmlVideoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XmlVideoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XmlVideoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
