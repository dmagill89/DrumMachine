import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { BaseStep } from '../interfaces/base-step';

@Component({
  selector: 'app-step-tracker',
  templateUrl: './step-tracker.component.html',
  styleUrls: ['./step-tracker.component.scss']
})
export class StepTrackerComponent extends BaseStep implements OnInit, OnChanges {

  constructor() { 
    super();
  }

  ngOnInit(): void {
    this.initStepArray();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.initStepArray();
  }
}
