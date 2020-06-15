import { State } from '@ngxs/store';
import { DrumMachineStateModel } from '../interfaces/drum-machine.state.models';
import { Injectable } from '@angular/core';

@State<DrumMachineStateModel>({
  name: 'DrumMachine',
  defaults: {
    bpm: 128,
    currentSequence: null,
    savedSequences: []
  }
})
@Injectable()
export class DrumMachineState {

}