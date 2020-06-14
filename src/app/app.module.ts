import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KickComponent } from './kick/kick.component';
import { SnareComponent } from './snare/snare.component';
import { OpenHatComponent } from './open-hat/open-hat.component';
import { ClosedHatComponent } from './closed-hat/closed-hat.component';

@NgModule({
  declarations: [
    AppComponent,
    KickComponent,
    SnareComponent,
    OpenHatComponent,
    ClosedHatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
