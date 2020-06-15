import { State, Selector, Action, StateContext } from '@ngxs/store';
import { DrumMachineStateModel, DrumMachineSequence } from '../interfaces/drum-machine.state.models';
import { Injectable } from '@angular/core';
import { UpdateBeatsPerMinute, LoadUserProfile, LoadSequence } from '../actions/drum-machine.actions';
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

  @Selector()
  static savedSequences(state: DrumMachineStateModel) {
    return state.savedSequences;
  }

  constructor(private sequenceService: SequenceService) {}

  @Action(LoadUserProfile)
  public loadUserProfile(ctx: StateContext<DrumMachineStateModel>, action: LoadUserProfile) {
    this.sequenceService.loadProfile().pipe(
      take(1), 
      tap((response: DrumMachineStateModel) => {
        ctx.setState(response);
      })
    ).subscribe();
  }

  @Action(LoadSequence)
  public loadSequence(ctx: StateContext<DrumMachineStateModel>, action: LoadSequence) {
    this.sequenceService.loadSequnce(action.sequenceName).pipe(
      take(1),
      tap(currentSequence => {
        ctx.patchState({currentSequence});
      })
    ).subscribe();
  }

  @Action(UpdateBeatsPerMinute)
  public updateBeatsPerMinute(ctx: StateContext<DrumMachineStateModel>, action: UpdateBeatsPerMinute) {
    const currentSequence = ctx.getState().currentSequence;

    currentSequence.bpm = action.newBpm;
    ctx.patchState({currentSequence});
  }
}