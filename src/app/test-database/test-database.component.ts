import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { RoomService } from '../services/room.service';
@Component({
  selector: 'app-test-database',
  templateUrl: './test-database.component.html',
  styleUrls: ['./test-database.component.css'],
  providers: [RoomService]
})
export class TestDatabaseComponent implements OnInit {
  room;
  arrayList;
  constructor(private roomService : RoomService) { }

  // ngOnInit() {
  //   this.roomService.getRooms().subscribe(rooms=>{
  //     this.room = rooms[0].scene.a.actionOptions
  //     console.log( rooms[0].scene.a.actionOptions)
  //     console.log(this.room)
  //   })
  // }

  ngOnInit() {
    this.roomService.getRooms().subscribe(rooms=>{
      this.room = rooms
      this.room = Array.of(this.room[0])
      console.log(this.room)
    })
  }

}
