import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('myAnimation', [
      state('smaller', style({
        transform: 'scale(0)',
        color: 'blue'
      })),
      state('larger', style({
        transform: 'scale(3)',
        color: 'red'
      })),
      transition('smaller <=> larger', animate('450ms ease-in'))
    ])
  ]
})
export class AppComponent {

  state: string = 'smaller';
  animate() {
    this.state = this.state == 'larger' ? 'smaller' : 'larger';
  }
}
