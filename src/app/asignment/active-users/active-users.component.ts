import { Component,  Input } from '@angular/core';
import { ActivityService } from './../activity.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: string[];

  constructor(private activity: ActivityService) {

  }

  onSetToInactive(id: number) {
    this.activity.setInactive(id);
  }
}
