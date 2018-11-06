import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { HeroService } from '../services/hero.service';
import { Store, Action } from '@ngrx/store';
import { State } from '../reducers/hero.reducer';
import { Observable } from 'rxjs';
import { LOAD_HERO, HeroActions, LoadHeroComplete } from '../actions/hero.actions';
import { map, switchMap } from 'rxjs/operators';


@Injectable()
export class HeroEffects {

  constructor(
    private actions$: Actions,
    private heroService: HeroService,
    private store: Store<State>) {}

    @Effect()
    public loadHero$: Observable<Action> = this.actions$.pipe(
      ofType(LOAD_HERO),
      switchMap((action: HeroActions) => {
        return this.heroService.fetchHero(action.payload).pipe(
          map((hero) => new LoadHeroComplete(hero))
        );
      }),
    );
}
