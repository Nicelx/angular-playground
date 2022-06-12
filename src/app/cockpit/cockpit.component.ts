import { Component, OnInit , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  serverCreated = new EventEmitter<{serverName: string, serverContent: string}>;
  blueprintCreated;
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }
}
