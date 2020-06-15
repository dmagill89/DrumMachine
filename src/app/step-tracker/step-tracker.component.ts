import { Component, OnInit } from '@angular/core';
import { BaseStep } from '../interfaces/base-step';

@Component({
  selector: 'app-step-tracker',
  templateUrl: './step-tracker.component.html',
  styleUrls: ['./step-tracker.component.scss']
})
export class StepTrackerComponent extends BaseStep implements OnInit {

  constructor() { 
    super();
  }

  ngOnInit(): void {
    this.initStepArray();
  }

}
