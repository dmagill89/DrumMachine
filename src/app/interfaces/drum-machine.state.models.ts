export interface DrumMachineSequenceModel {
  kickSequence: boolean[];
  snareSequence: boolean[];
  openHatSeuence: boolean[];
  closedHatSequence: boolean[];
}

export interface DrumMachineStateModel {
  bpm: number;
  currentSequence: DrumMachineSequenceModel;
  savedSequences: DrumMachineSequenceModel[];
  steps: number;
}