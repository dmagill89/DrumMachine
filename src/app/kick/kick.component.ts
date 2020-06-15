import { Component, OnInit, Input } from '@angular/core';
import { BaseStep } from '../interfaces/base-step';

@Component({
  selector: 'app-kick',
  templateUrl: './kick.component.html',
  styleUrls: ['./kick.component.scss']
})
export class KickComponent extends BaseStep  {

  constructor() {
    super();
   }

  ngOnInit(): void {
    this.initStepArray();
  }

}
