import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../services/player.service';
import * as firebase from "firebase";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
  providers: [PlayerService]
})
export class PlayerComponent implements OnInit {
  user;
  players;

  constructor(private playerService : PlayerService) { }

  ngOnInit() {}

  ngDoCheck() {
    this.user = firebase.auth().currentUser;
    this.players = this.playerService.players;
  }

  logout() {
    this.playerService.logoutEmail();
  }

}
