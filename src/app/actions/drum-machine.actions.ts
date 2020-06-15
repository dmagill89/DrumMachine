export class LoadUserProfile {
  static readonly type = '[DrumMachine] Load User Profile';
  constructor() {}
}

export class LoadSequence {
  static readonly type = '[DrumMachine] Load Sequence';
  constructor(public sequenceName: string) {}
}

export class UpdateBeatsPerMinute {
  static readonly type = '[DrumMachine] Set Beats Per Minute';
  constructor(public newBpm: number) {}
}