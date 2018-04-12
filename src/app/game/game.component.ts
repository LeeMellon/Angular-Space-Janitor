import { Component, OnInit } from '@angular/core';
import { RoomService } from '../services/room.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers: [RoomService]
})
export class GameComponent implements OnInit {
  scenes;

  constructor(private roomService : RoomService) { }

  ngOnInit() {
    this.roomService.getScenes().subscribe(scenes => {
      this.scenes = scenes;
    });
  }

  // resetScenesInDatabase() {
  //   this.scenes.forEach(function(scene) {
  //     this.roomService.updateScene(scene.id, 0);
  //   });
  // }

}
