import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenHatComponent } from './open-hat.component';

describe('OpenHatComponent', () => {
  let component: OpenHatComponent;
  let fixture: ComponentFixture<OpenHatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenHatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenHatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
