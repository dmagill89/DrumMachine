import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-tracker',
  templateUrl: './step-tracker.component.html',
  styleUrls: ['./step-tracker.component.scss']
})
export class StepTrackerComponent implements OnInit {

  public beats: number[];

  constructor() { }

  ngOnInit(): void {

    this.beats = new Array(15);

    for (let i = 0; i <= 15; i++) {
      this.beats[i] = i + 1;
    }
  }

}
