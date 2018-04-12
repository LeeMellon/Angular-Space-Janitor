import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../services/player.service';
import { FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css'],
  providers: [PlayerService]
})
export class FrontPageComponent implements OnInit {
  user;
  constructor(private playerService : PlayerService) { }

  ngOnInit() {

  }

  ngDoCheck() {
    this.user = firebase.auth().currentUser;
  }

}
