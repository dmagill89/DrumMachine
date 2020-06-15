export interface DrumMachineSequence {
  kickSequence: boolean[];
  snareSequence: boolean[];
  openHatSeuence: boolean[];
  closedHatSequence: boolean[];
}

export interface Sequence {
  bpm: number;
  name: string;
  sequence: DrumMachineSequence;
  steps: number;
}

export interface DrumMachineStateModel {
  currentSequence: Sequence;
  savedSequences: Sequence[];
}