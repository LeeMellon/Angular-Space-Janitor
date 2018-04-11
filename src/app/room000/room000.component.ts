import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseListObservable } from 'angularfire2/database';
import { RoomService } from '../services/room.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room000',
  templateUrl: './room000.component.html',
  styleUrls: ['./room000.component.css'],
  providers: [RoomService]
})
export class Room000Component implements OnInit {
  roomId: string;
  roomToDisplay;
  rooms;
  scenes;
  currentRoom;
  currentScene;
  move = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private roomService : RoomService
  ) { }

  ngOnInit() {
    this.rooms = this.roomService.getRooms();
    // this.roomService.getRooms().subscribe(rooms=>{
    //   this.rooms = rooms
    //   this.rooms.forEach(function(room){
    //     console.log(room.scene)
    //     })
    //   // console.log(this.rooms)
    //   this.currentRoom = "Recovery";
    //   this.currentScene
      this.route.params.forEach((urlParameters) => {
        this.roomId = urlParameters['dest'];
        console.log("roomID", this.rooms.id)
    });
    // this.roomToDisplay = this.roomService.getRoomById(this.roomId);
    // console.log("Room", this.roomToDisplay);

    this.roomService.getRooms().subscribe(rooms =>{
      this.rooms = rooms;
    for(let i = 0; i < 31; i ++){
      // console.log(this.rooms[i].id)
      if(this.rooms[i].id === this.roomId){
        this.roomToDisplay = this.rooms[i]
        console.log(this.roomToDisplay)

      }
    }
   })
  }

  changeRoom(room){
    console.log(room.scene.moveOption[0].dest);
    let destination =
    this.router.navigate(['rooms'], roomId)
    // this.roomId = id;
    // console.log(id);
  }

  moveOptions(){
    this.move = true;
  }


}
