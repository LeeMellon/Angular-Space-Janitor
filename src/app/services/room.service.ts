import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Room } from '../models/room.model';


@Injectable()
export class RoomService {
  rooms: FirebaseListObservable<any[]>;
  scenes: FirebaseListObservable<any[]>;
  // roomList: Room[];

  constructor(private database: AngularFireDatabase) {
    this.rooms = database.list('rooms');
    this.scenes = database.list('scenes');
   }

   getRooms() {
     return this.rooms;
   }

   getScenes() {
     return this.scenes;
   }

   getSceneById(sceneId: string){
    return this.database.object('scenes/' + sceneId);
  }

}
