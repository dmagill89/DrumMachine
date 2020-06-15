import { Injectable } from '@angular/core';
import { sequence } from '@angular/animations';
import { of, Observable } from 'rxjs';
import { DrumMachineStateModel } from '../interfaces/drum-machine.state.models';

const SAVED_SEQUENCES = [
  {
    bpm: 60,
    name: 'Sequence 1',
    sequence: {
      kickSequence: [true, false, false, true, false, true, true, false],
      snareSequence: [true, false, false, true, false, true, true, false],
      openHatSequence: [true, false, false, true, false, true, true, false],
      closedHatSequence: [true, false, false, true, false, true, true, false]
    },
    steps: 8
  },
  {
    bpm: 60,
    name: '',
    sequence: {
      kickSequence: [true, false, false, true, false, true, true, false],
      snareSequence: [true, false, false, true, false, true, true, false],
      openHatSequence: [true, false, false, true, false, true, true, false],
      closedHatSequence: [true, false, false, true, false, true, true, false]
    },
    steps: 16
  },
  {
    bpm: 60,
    name: '',
    sequence: {
      kickSequence: [true, false, false, true, false, true, true, false],
      snareSequence: [true, false, false, true, false, true, true, false],
      openHatSequence: [true, false, false, true, false, true, true, false],
      closedHatSequence: [true, false, false, true, false, true, true, false]
    },
    steps: 12
  }
];

const PROFILE = {
  currentSequence: {
    bpm: 60,
    name: 'Sequence 1',
    sequence: {
      kickSequence: [true, false, false, true, false, true, true, false],
      snareSequence: [true, false, false, true, false, true, true, false],
      openHatSequence: [true, false, false, true, false, true, true, false],
      closedHatSequence: [true, false, false, true, false, true, true, false]
    },
    steps: 8
  },
  savedSequences: SAVED_SEQUENCES
}

@Injectable({
  providedIn: 'root'
})
export class SequenceService {

  constructor() { }

  public loadProfile(): Observable<DrumMachineStateModel> {
    return of(PROFILE);
  }
}
