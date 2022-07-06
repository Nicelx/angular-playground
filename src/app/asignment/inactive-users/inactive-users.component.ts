import { Component,Input } from '@angular/core';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];

  constructor(private activity: ActivityService) {

  }

  onSetToActive(id: number) {
    this.activity.setActive(id);
  }
}
