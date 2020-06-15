import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {

  @Output() play = new EventEmitter();
  @Output() stop = new EventEmitter();

  public sequences = [
    {
      id: 'id1',
      name: 'sequence 1'
    },
    {
      id: 'id2',
      name: 'sequence 2'
    },
    {
      id: 'id3',
      name: 'sequence 3'
    }];

  constructor() { }

  ngOnInit(): void {
  }

}
