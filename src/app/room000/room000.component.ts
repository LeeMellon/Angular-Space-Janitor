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

  ngDoCheck() {
    // this.router.navigate(['rooms', this.roomToDisplay.id]);
    // this.roomToDisplay.id = urlParameters['dest'];
  }

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
        console.log("roomID", this.roomId)
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

  changeRoom(option){
    console.log("dest",this.roomToDisplay.scene[0].moveOption[0].dest);
    let destination = this.roomToDisplay.scene[0].moveOption[0].dest;
    this.router.navigate(['rooms', destination]);
    this.roomId = destination;

    // console.log(id);
    this.roomService.getRooms().subscribe(rooms =>{
      this.rooms = rooms;
    for(let i = 0; i < 31; i ++){
      if(this.rooms[i].id === this.roomId){
        this.roomToDisplay = this.rooms[i]
      }
    }
   })
   console.log("inside change room",this.roomToDisplay)

  }

  moveOptions(){
    this.move = true;
  }


}
