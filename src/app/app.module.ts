import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KickComponent } from './kick/kick.component';
import { SnareComponent } from './snare/snare.component';
import { OpenHatComponent } from './open-hat/open-hat.component';
import { ClosedHatComponent } from './closed-hat/closed-hat.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { ControlsComponent } from './controls/controls.component';
import { SoundBoardComponent } from './sound-board/sound-board.component';
import { CdkTableModule } from '@angular/cdk/table';
import { StepTrackerComponent } from './step-tracker/step-tracker.component';

@NgModule({
  declarations: [
    AppComponent,
    KickComponent,
    SnareComponent,
    OpenHatComponent,
    ClosedHatComponent,
    ControlsComponent,
    SoundBoardComponent,
    StepTrackerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CdkTableModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
