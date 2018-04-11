import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseListObservable } from 'angularfire2/database';
import { PlayerService } from '../services/player.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
    providers: [PlayerService]
})
export class SignUpComponent implements OnInit {
  passError = false;
  usernameError = false;
  errorMessage;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private playerService : PlayerService
  ) { }

  ngOnInit() {
  }

  createAccount(account, password){
    let email = account + "@spacejanitor.com"
    if (password.length < 6 && account.length < 1) {
      this.passError = true;
      this.usernameError = true;
    }
    else if (password.length < 6){
      this.passError = true;
    }
    else if (account.length < 1){
      this.usernameError = true;
    }
    else if (password.length > 5 && account.length > 0) {
      this.usernameError = false;
      this.passError = false;
      this.playerService.createAccount(account, email, password)
      this.router.navigate(['login']);
    }
  }

}
