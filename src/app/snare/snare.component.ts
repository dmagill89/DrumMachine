import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { BaseStep } from '../interfaces/base-step';

@Component({
  selector: 'app-snare',
  templateUrl: './snare.component.html',
  styleUrls: ['./snare.component.scss']
})
export class SnareComponent extends BaseStep implements OnInit, OnChanges {

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
