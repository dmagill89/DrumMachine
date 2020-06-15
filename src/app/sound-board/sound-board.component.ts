import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable} from 'rxjs';


// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const DRUM_DATA: any[] = [
//   {name: 'Kick', weight: [1,2,3,4,5,6], symbol: 'H'},
//   {name: 'Snare', weight: [1,2,3,4,5,6], symbol: 'He'},
//   {name: 'Open Hat', weight:[1,2,3,4,5,6], symbol: 'Li'},
//   {name: 'Closed Hat', weight: [1,2,3,4,5,6], symbol: 'Be'},
// ];

@Component({
  selector: 'app-sound-board',
  templateUrl: './sound-board.component.html',
  styleUrls: ['./sound-board.component.scss']
})
export class SoundBoardComponent implements OnInit {
  // public displayedColumns: string[] = ['name', 'weight', 'symbol'];
  // dataSource = new ExampleDataSource();

  constructor() { }

  ngOnInit(): void {

  }
}

// export class ExampleDataSource extends DataSource<PeriodicElement> {
//   /** Stream of data that is provided to the table. */
//   data = new BehaviorSubject<PeriodicElement[]>(DRUM_DATA);

//   /** Connect function called by the table to retrieve one stream containing the data to render. */
//   connect(): Observable<PeriodicElement[]> {
//     return this.data;
//   }

//   disconnect() {}
// }