import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { RoomService } from '../services/room.service';

@Component({
  selector: 'app-room000',
  templateUrl: './room000.component.html',
  styleUrls: ['./room000.component.css'],
  providers: [RoomService]
})
export class Room000Component implements OnInit {
  rooms;
  scenes;
  currentRoom;
  currentScene;
  move = false;

  constructor(private roomService : RoomService) { }

  ngOnInit() {
    this.roomService.getRooms().subscribe(rooms=>{
      this.rooms = rooms
      this.rooms.forEach(function(room){
        console.log(room.scene)
        })
      // console.log(this.rooms)
      this.currentRoom = "Recovery";
      this.currentScene
    })
  }

  changeRoom(id){
    this.roomId = id;
    console.log(id);
  }

  moveOptions(){
    this.move = true;
  }


}
