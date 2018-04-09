import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';

import { masterFirebaseConfig } from './api-keys';

import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { Room000Component } from './room000/room000.component';
import { LogComponent } from './log/log.component';
import { PlayerComponent } from './player/player.component';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    Room000Component,
    LogComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
