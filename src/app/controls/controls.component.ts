import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DrumMachineState } from '../state/drum-machine.state';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { UpdateBeatsPerMinute, LoadSequence } from '../actions/drum-machine.actions';
import { Sequence } from '../interfaces/drum-machine.state.models';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {

  @Input() currentSequence: Sequence;
  @Input() sequences: Sequence[];

  @Output() play = new EventEmitter();
  @Output() stop = new EventEmitter();

  public selectedSequence: string;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.selectedSequence = this.currentSequence.name;
  }

  bpmChange(event: Event) {
    const newBpm = parseInt((<HTMLInputElement> event.currentTarget).value);

    this.store.dispatch(new UpdateBeatsPerMinute(newBpm));
  }

  changeSequence(event: MatSelectChange) {
    this.store.dispatch(new LoadSequence(event.value));
  }
}
