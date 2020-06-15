import { Input, OnInit } from '@angular/core';

export class BaseStep {

  @Input() numSteps: number;
  @Input() steps: any;

  public stepArray: number[];
  public offset: number = 1;
  public gutterSize: string = '5';

  constructor() {

  }

  initStepArray(): void {
    this.stepArray = new Array(this.numSteps).fill(0).map((x, index) => index + 1);
  }
}