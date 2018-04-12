import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../services/player.service';
import { Player } from '../models/player.model'
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
  providers: [PlayerService]
})
export class PlayerComponent implements OnInit {
  user;
  players;
  playerList;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private playerService : PlayerService
  ) { }

  ngOnInit() {
    this.playerService.getPlayers().subscribe(response => {
      this.playerList = response
      console.log(this.playerList);
     })
  }

  ngDoCheck() {
    this.user = firebase.auth().currentUser;
    this.players = this.playerService.players;
  }

  logout() {
    this.playerService.logoutEmail();
    this.router.navigate(['']);
  }

  getPlayerList() {

  }
}
