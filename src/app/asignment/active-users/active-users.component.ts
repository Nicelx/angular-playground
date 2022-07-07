import { Component, OnInit } from '@angular/core';
import { ActivityService } from './../activity.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  constructor(private activity: ActivityService) {}

  ngOnInit() {
    this.users = this.activity.activeUsers;
  }

  onSetToInactive(id: number) {
    this.activity.setInactive(id);
  }
}
