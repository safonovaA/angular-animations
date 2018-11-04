import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { Action, Store, select } from '@ngrx/store';
import { LOAD_HEROES, LoadHeroes, LoadHeroesComplete } from '../actions/heroes.actions';
import { HeroesService } from '../services/heroes.service';
import { State, getPageSize } from '../reducers/heroes.reducer';


@Injectable()
export class HeroesEffects {

  constructor(
    private actions$: Actions,
    private heroesService: HeroesService,
    private store: Store<State>) {}

  @Effect()
  public loadHeroes$: Observable<Action> = this.actions$.pipe(
    ofType(LOAD_HEROES),
    withLatestFrom(this.store.pipe(select(getPageSize))),
    switchMap(([, pageSize]) => {
      return this.heroesService.fetchHeroes().pipe(
        map((heroes: any[]) => {
          const totalPages = heroes.length % pageSize ?
            Math.floor(heroes.length / pageSize) + 1 :
            heroes.length / pageSize;
          const sortedHeroes = heroes.sort((a, b) => {
            if (a.name < b.name) { return -1; }
            if (a.name > b.name) { return 1; }
            return 0;
          });
          return new LoadHeroesComplete({heroes: sortedHeroes, totalPages});
        })
      );
    }),
  );
}
