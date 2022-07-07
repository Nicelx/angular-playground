import { Component,Input } from '@angular/core';
import { ActivityService } from '../activity.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  constructor(private activity: ActivityService) {

  }

  ngOnInit() {
    this.users = this.activity.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.activity.setActive(id);
  }
}
