import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  animations: [
    trigger('loaderTrigger', [
      transition(':enter', [
        style({opacity: 1}),
        animate('5s', keyframes([
          style({ transform: 'scale(2)', offset: 0 }),
          style({ transform: 'scale(1)', offset: 0.15 }),
          style({ transform: 'scale(2)', offset: 0.3 }),
          style({ transform: 'scale(1)', offset: 0.75 }),
          style({ transform: 'scale(2)', offset: 1 }),
        ]),
        ),
      ]),
      transition(':leave', [
        animate('1s', style({opacity: 0}))
      ])
    ])
  ]
})
export class LoaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
