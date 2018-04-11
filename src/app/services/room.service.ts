import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Room } from '../models/room.model';


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

  //  getRoomById(roomId: string){
  //   //  let target = null;
  //   // this.rooms.forEach(function(room){
  //   console.log(this.rooms)
  //
  //     for (var i = 0; i < 31; i++) {
  //       if (this.rooms[i].id === roomId) {
  //         let target = this.rooms[i]
  //       }
  //       console.log(target)
  //       return  target;
  //     }
  //
  //   // })
  //   // console.log("list" , this.rooms);
  //   // return this.database.object('rooms/' + id);
  // }


}
