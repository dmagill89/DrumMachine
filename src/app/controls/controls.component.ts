import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DrumMachineState } from '../state/drum-machine.state';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { UpdateBeatsPerMinute } from '../actions/drum-machine.actions';
import { Sequence } from '../interfaces/drum-machine.state.models';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {

  @Input() currentSequence: Sequence;
  // @Input() sequences: Sequence[];

  @Output() play = new EventEmitter();
  @Output() stop = new EventEmitter();

  public selectedSequence: string;
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

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.selectedSequence = this.currentSequence.name;
  }

  bpmChange(event: Event) {
    const newBpm = parseInt((<HTMLInputElement> event.currentTarget).value);

    this.store.dispatch(new UpdateBeatsPerMinute(newBpm));
  }
}
