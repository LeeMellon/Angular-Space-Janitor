import { Component, OnInit } from '@angular/core';
import { RoomService } from '../services/room.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css'],
  providers: [RoomService]
})
export class LogComponent implements OnInit {
  scenes;
  constructor(private roomService : RoomService) { }

  ngOnInit() {
    this.roomService.getScenes().subscribe(scenes => {
      this.scenes = scenes;
    });
  }

  resetScenesInDatabase() {
    for (var i = 0; i < 30; i++) {
      this.roomService.updateScene(this.scenes[i].id, 0)
    }
  }

}
