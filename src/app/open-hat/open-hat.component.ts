import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { BaseStep } from '../interfaces/base-step';

@Component({
  selector: 'app-open-hat',
  templateUrl: './open-hat.component.html',
  styleUrls: ['./open-hat.component.scss']
})
export class OpenHatComponent extends BaseStep implements OnInit, OnChanges {

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
