import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeatTrackerComponent } from './beat-tracker.component';

describe('BeatTrackerComponent', () => {
  let component: BeatTrackerComponent;
  let fixture: ComponentFixture<BeatTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeatTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeatTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
