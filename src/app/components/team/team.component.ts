import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  @Input() team = '';
  @Input() players: string[] = [];
  @Output() scoreEmitter = new EventEmitter<number>();
  @Output() playerEmitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public score() {
    this.scoreEmitter.emit(1);
  }

  public changePlayer() {
    this.playerEmitter.emit(this.players[0]);
  }
}
