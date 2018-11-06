import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { State, getHero, getIsLoading } from '../../reducers/hero.reducer';
import { LoadHero } from '../../actions/hero.actions';
import { trigger, transition, style, group, query, animate } from '@angular/animations';

@Component({
  selector: 'app-full-card',
  templateUrl: './full-card.component.html',
  styleUrls: ['./full-card.component.scss'],
  animations: [
    trigger('card', [
      transition(':enter', [
        group([
          query('.icon', [
            style({opacity: 0}),
            animate('600ms ease-in', style({opacity: 1}))
          ]),
          query('.details', [
            style({transform: 'translateX(200%)'}),
            animate('600ms ease-out', style({transform: 'translateX(0%)'}))
          ]),
        ])
      ])
    ])
  ],
})
export class FullCardComponent implements OnInit {
  public subscriptions = new Subscription;
  public hero: any;
  public loading: boolean;
  constructor(
    private route: ActivatedRoute,
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.subscriptions.add(this.route.params.subscribe((params) => {
      this.store.dispatch(new LoadHero(params.name));
    }));
    this.subscriptions.add(this.store.select(getHero).subscribe((hero) => {
      this.hero = hero;
    }));
    this.subscriptions.add(this.store.select(getIsLoading).subscribe((state) => {
      this.loading = state;
    }));
  }

}
