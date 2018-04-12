import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseListObservable } from 'angularfire2/database';
import { PlayerService } from '../services/player.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
    providers: [PlayerService]
})
export class LoginComponent {
  user;
  private isLoggedIn: Boolean;
  errorMessage;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private playerService : PlayerService
  ) {
    this.playerService.user.subscribe(user => {
      console.log(user);
      if (user == null) {
        this.isLoggedIn = false;
        console.log("not logged in");
      } else {
        this.isLoggedIn = true;
        console.log("logged in");
      }
    });
  }

  ngDoCheck() {
    this.user = firebase.auth().currentUser;
  }

  loginEmail(account, password){
    let email = account + "@spacejanitor.com"
    this.playerService.loginEmail(email, password)
    if (this.isLoggedIn) {
      this.router.navigate(['']);
    }
  }

  displayErrors(errorPassback) {
    this.errorMessage = errorPassback;
  }

  logoutEmail() {
    this.playerService.logoutEmail();
  }

}
