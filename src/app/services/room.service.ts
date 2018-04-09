import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';



@Injectable()
export class RoomService {

  rooms: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.rooms = database.list('rooms');
  }

  getRooms(){
  return this.rooms
}
}
