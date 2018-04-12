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
  change;

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
    });
    this.roomService.getScenes().subscribe(scenes => {
      this.scenes = scenes;
    });
    this.setRoomToDisplay();
    this.setSceneToDisplay();
    if(!this.sceneToDisplay){
      this.sceneToDisplay={}
    }
  }

  changeRoom(option){
    let destination = this.roomToDisplay.scene[0].moveOption[option].dest;
    if (destination !== "XXX") {
      this.router.navigate(['rooms', destination]);
      this.roomId = destination;
      this.setRoomToDisplay();
      this.setSceneToDisplay();
    }
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
      let sceneId = this.roomToDisplay.id;
      this.roomService.getSceneById(sceneId).subscribe(scene => {
        this.sceneToDisplay = scene;
      });
    });
  }

  changeScene(scene, actionType) {
    console.log("room number" , this.sceneToDisplay[1].$value)
    console.log("scene number" , this.sceneToDisplay[0].$value)
    if ((this.roomToDisplay.scene[this.sceneToDisplay[0].$value].actionType) && ((this.roomToDisplay.scene[this.sceneToDisplay[0].$value].actionType[scene].change) !== "XXX")){
      let Id = this.sceneToDisplay[1].$value
      this.roomService.updateScene(Id, scene);
    }
  }

  moveOptions(){
    this.move = true;
  }

  actionOptions(){
    this.move=false;
  }

}
