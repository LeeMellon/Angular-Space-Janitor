import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';

import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { LogComponent } from './log/log.component';
import { PlayerComponent } from './player/player.component';
import { TestDatabaseComponent } from './test-database/test-database.component';
import { Room000Component } from './room000/room000.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PlayerService } from './services/player.service';
import { AuthGuard } from './services/auth-guard.service.service';


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
    LogComponent,
    PlayerComponent,
    TestDatabaseComponent,
    Room000Component,
    LoginComponent,
    SignUpComponent,

  ],
  imports: [
    BrowserModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [AuthGuard, AngularFireAuth, PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
