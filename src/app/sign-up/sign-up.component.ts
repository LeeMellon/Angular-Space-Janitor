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
  errorCode;
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
    this.playerService.createAccount(email, password)
  }

}
