export class UpdateBeatsPerMinute {
  static readonly type = '[DrumMachine] Set Beats Per Minute';
  constructor(public newBpm: number) {}
}