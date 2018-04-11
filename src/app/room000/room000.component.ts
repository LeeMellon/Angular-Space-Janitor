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
  sceneToDisplay;
  scenes;
  move = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private roomService : RoomService
  ) { }

  ngOnInit() {
    this.rooms = this.roomService.getRooms();
      this.route.params.forEach((urlParameters) => {
        this.roomId = urlParameters['dest'];
        console.log("roomID", this.roomId)
    });
    this.setRoomToDisplay();
    this.setSceneToDisplay();
  }

  changeRoom(option){
    console.log("dest",this.roomToDisplay.scene[0].moveOption[option].dest);
    let destination = this.roomToDisplay.scene[0].moveOption[option].dest;
    this.router.navigate(['rooms', destination]);
    this.roomId = destination;
    this.setRoomToDisplay();
    this.setSceneToDisplay();
  }

  setRoomToDisplay() {
    this.roomService.getRooms().subscribe(rooms =>{
      this.rooms = rooms;
    for(let i = 0; i < 31; i ++){
      if(this.rooms[i].id === this.roomId){
        this.roomToDisplay = this.rooms[i]
        }
      }
    });
  }

  setSceneToDisplay() {
    this.roomService.getScenes().subscribe(scenes => {
      this.scenes = scenes;
      this.roomService.getSceneById(this.roomToDisplay.id).subscribe(scene => {
        this.sceneToDisplay = scene;
      });
    });
  }

  moveOptions(){
    this.move = true;
  }

}
