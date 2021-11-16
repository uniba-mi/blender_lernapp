import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockingOutComponent } from './blocking-out.component';

describe('BlockingOutComponent', () => {
  let component: BlockingOutComponent;
  let fixture: ComponentFixture<BlockingOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockingOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockingOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
