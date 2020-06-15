import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable} from 'rxjs';
import { Select } from '@ngxs/store';
import { DrumMachineState } from '../state/drum-machine.state';
import { Sequence } from '../interfaces/drum-machine.state.models';

@Component({
  selector: 'app-sound-board',
  templateUrl: './sound-board.component.html',
  styleUrls: ['./sound-board.component.scss']
})
export class SoundBoardComponent implements OnInit {

  @Select(DrumMachineState.currentSequence) currentSequence$: Observable<Sequence>;
  @Select(DrumMachineState.savedSequences) savedSequences$: Observable<Sequence[]>;

  constructor() { }

  ngOnInit(): void {

  }
}