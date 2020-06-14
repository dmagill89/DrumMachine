import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnareComponent } from './snare.component';

describe('SnareComponent', () => {
  let component: SnareComponent;
  let fixture: ComponentFixture<SnareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
