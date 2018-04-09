import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Room } from '../models/room.model';
// import { Room } from '../models/room.model'

@Injectable()
export class RoomService {
  rooms: FirebaseListObservable<any[]>;
  roomList: Room[];

  constructor(private database: AngularFireDatabase) {
    this.rooms = database.list('rooms');
   }

   getRooms() {
     return this.rooms;
   }

}
