import { State, Selector, Action, StateContext } from '@ngxs/store';
import { DrumMachineStateModel, DrumMachineSequence } from '../interfaces/drum-machine.state.models';
import { Injectable } from '@angular/core';
import { UpdateBeatsPerMinute, LoadUserProfile } from '../actions/drum-machine.actions';
import { SequenceService } from '../services/sequence.service';
import { take, tap } from "rxjs/operators";

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
        openHatSequence: [],
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

  constructor(private sequenceService: SequenceService) {}

  @Action(LoadUserProfile)
  public loadUserProfile(ctx: StateContext<DrumMachineStateModel>, action: LoadUserProfile) {
    this.sequenceService.loadProfile().pipe(
      take(1), 
      tap((response: DrumMachineStateModel) => {
        ctx.setState(response);
    })).subscribe();
  }

  @Action(UpdateBeatsPerMinute)
  public updateBeatsPerMinute(ctx: StateContext<DrumMachineStateModel>, action: UpdateBeatsPerMinute) {
    const currentSequence = ctx.getState().currentSequence;

    currentSequence.bpm = action.newBpm;
    ctx.patchState({currentSequence});
  }
}