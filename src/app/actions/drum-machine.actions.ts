export class LoadUserProfile {
  static readonly type = '[DrumMachine] Get User Profile';
  constructor() {}
}

export class UpdateBeatsPerMinute {
  static readonly type = '[DrumMachine] Set Beats Per Minute';
  constructor(public newBpm: number) {}
}