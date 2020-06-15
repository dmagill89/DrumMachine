import { State, Selector } from '@ngxs/store';
import { DrumMachineStateModel } from '../interfaces/drum-machine.state.models';
import { Injectable } from '@angular/core';

@State<DrumMachineStateModel>({
  name: 'DrumMachine',
  defaults: {
    bpm: 128,
    currentSequence: null,
    savedSequences: [],
    steps: 8
  }
})
@Injectable()
export class DrumMachineState {

  @Selector()
  static getSteps(state: DrumMachineStateModel) {
    return state.steps;
  }
}