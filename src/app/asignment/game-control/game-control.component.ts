import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameStarted = new EventEmitter<{increment: number}>();
  // @Input('intervalRef') firstButtonRef : ElementRef;

  increment: number = 0;
  interval;

  constructor() { }

  ngOnInit(): void {
  }

  intervalEmit() {
    this.interval = setInterval(() => {
      this.gameStarted.emit({increment: this.increment++})
      console.log(this.increment);
    }, 1000)
  }
  intervalStop() {
    clearInterval(this.interval);
  }

}
