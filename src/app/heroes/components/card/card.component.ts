import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() public hero;
  private iconUrl = 'http://s3.hotsapi.net/img/heroes/92x93/';
  constructor() { }

  ngOnInit() { }

}
