import { State, Selector, Action, StateContext } from '@ngxs/store';
import { DrumMachineStateModel } from '../interfaces/drum-machine.state.models';
import { Injectable } from '@angular/core';
import { UpdateBeatsPerMinute } from '../actions/drum-machine.actions';

@State<DrumMachineStateModel>({
  name: 'DrumMachine',
  defaults: {
    currentSequence: {
      bpm: 128,
      steps: 16,
      name: 'Sequence 1',
      sequence: {
        kickSequence: [],
        snareSequence: [],
        openHatSeuence: [],
        closedHatSequence: []
      }
    },
    savedSequences: [],
  }
})
@Injectable()
export class DrumMachineState {

  @Selector()
  static currentSequence(state: DrumMachineStateModel) {
    return state.currentSequence;
  }

  constructor() {}

  @Action(UpdateBeatsPerMinute)
  public updateBeatsPerMinute(ctx: StateContext<DrumMachineStateModel>, action: UpdateBeatsPerMinute) {
    const currentSequence = ctx.getState().currentSequence;

    currentSequence.bpm = action.newBpm;
    ctx.patchState({currentSequence});
  }
}