import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicToolsComponent } from './basics-tools.component';

describe('ViewportComponent', () => {
  let component: BasicToolsComponent;
  let fixture: ComponentFixture<BasicToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
