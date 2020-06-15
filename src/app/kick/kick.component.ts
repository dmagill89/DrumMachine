import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BaseStep } from '../interfaces/base-step';

@Component({
  selector: 'app-kick',
  templateUrl: './kick.component.html',
  styleUrls: ['./kick.component.scss']
})
export class KickComponent extends BaseStep implements OnInit, OnChanges  {

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
