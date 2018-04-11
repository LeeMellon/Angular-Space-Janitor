import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Player } from '../models/player.model';
import * as firebase from 'firebase/app';

@Injectable()
export class PlayerService {
  user: Observable<firebase.User>;
  players: FirebaseListObservable<any[]>



  constructor(
    public afAuth: AngularFireAuth,
    private database: AngularFireDatabase
  ) {
    this.players = database.list('players');
    this.user = afAuth.authState;
   }

  createAccount(username, email, password){
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then( response => {
      console.log("RESPONSE: " + response.uid);
      this.addPlayer(response.uid, username);
    })
  }

  loginEmail(email, password){
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch( (err: firebase.FirebaseError) => {
      // Give your error the firebase.FirebaseError type and
      // you'll have access to all the FirebaseError properties
      console.log(`code`, err.code);
      console.log(`message`, err.message);
      console.log(`name`, err.name);
      console.log(`stack`, err.stack);
    });
  }

  logoutEmail(){
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
  }

  addPlayer(uid, username) {
    let newPlayer = new Player(uid, username);
    console.log(newPlayer.username);
    this.players.push(newPlayer);
  }

  getPlayers() {
    return this.players;
  }

  findPlayer(uid: string) {
    return this.database.object('players/' + uid)
  }
}
