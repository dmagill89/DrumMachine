import { Input, OnInit } from '@angular/core';
import { Sequence } from './drum-machine.state.models';

export class BaseStep {

  @Input() currentSequence: Sequence;

  public stepArray: number[];
  public offset: number = 1;
  public gutterSize: string = '5';
  public rowHeight: string = '70';

  constructor() {

  }

  init(): void {
    
  } 

  initStepArray(): void {
    const steps = this.currentSequence.steps;
    this.stepArray = new Array(steps).fill(0).map((x, index) => index + 1);
  }
}