import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import * as firebase from 'firebase/app';

@Injectable()
export class PlayerService {
   user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth) {
     this.user = afAuth.authState;
   }

  createAccount(email, password){
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch( (err: firebase.FirebaseError) => {
      // Give your error the firebase.FirebaseError type and
      // you'll have access to all the FirebaseError properties
      console.log(`code`, err.code);
      console.log(`message`, err.message);
      console.log(`name`, err.name);
      console.log(`stack`, err.stack);
    });
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
}
