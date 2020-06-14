import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedHatComponent } from './closed-hat.component';

describe('ClosedHatComponent', () => {
  let component: ClosedHatComponent;
  let fixture: ComponentFixture<ClosedHatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosedHatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedHatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
