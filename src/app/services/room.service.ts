import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Room } from '../models/room.model';



@Injectable()
export class RoomService {
  rooms: FirebaseListObservable<any[]>;
<<<<<<< HEAD

  roomList: Room[];
=======
  scenes: FirebaseListObservable<any[]>;

>>>>>>> 9d480a942ffa9bc079b76cf89ccdae00f9b6464c

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
    return this.database.list('scenes/' + sceneId);
  }

<<<<<<< HEAD


=======
  updateScene(key, value){
    this.scenes.update(key, {current: value});
  }
>>>>>>> 9d480a942ffa9bc079b76cf89ccdae00f9b6464c
}
