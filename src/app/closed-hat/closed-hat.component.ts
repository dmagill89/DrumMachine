import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { BaseStep } from '../interfaces/base-step';

@Component({
  selector: 'app-closed-hat',
  templateUrl: './closed-hat.component.html',
  styleUrls: ['./closed-hat.component.scss']
})
export class ClosedHatComponent extends BaseStep implements OnInit, OnChanges {

  constructor() { 
    super();
  }

  ngOnInit(): void {
    this.initStepArray();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.initStepArray();
  }

}
