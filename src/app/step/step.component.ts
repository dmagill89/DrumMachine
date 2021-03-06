import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {

  @Input() active: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  public toggleStep(): void {
    this.active = !this.active;
  }
}
