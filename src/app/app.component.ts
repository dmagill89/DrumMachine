import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { LoadUserProfile } from './actions/drum-machine.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'drum';

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new LoadUserProfile());
  }
}
