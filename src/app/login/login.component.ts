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
export class LoginComponent implements OnInit {
  user;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private playerService : PlayerService
  ) { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.user = firebase.auth().currentUser;
  }

  loginEmail(account, password){
    let email = account + "@spacejanitor.com"
    this.playerService.loginEmail(email, password)
    if (this.user) {
      this.router.navigate(['']);
    }
  }

  logoutEmail() {
    this.playerService.logoutEmail();
  }

}
