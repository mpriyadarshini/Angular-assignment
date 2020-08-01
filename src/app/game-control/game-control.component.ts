import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() intervalFired = new EventEmitter<number>(); 
  interval;
  num=0;
  constructor() { }

  ngOnInit(): void {
  }
  onStartGame(){
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.num + 1);
      this.num++;
    }

    );
  }
  onPauseGame(){
    clearInterval(this.interval);
  }

}
