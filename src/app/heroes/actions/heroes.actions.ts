import { Action } from '@ngrx/store';

export const LOAD_HEROES = '[Heroes] Load Heroes';
export const LOAD_HEROES_COMPLETE = '[Heroes] Load Heroes Complete';

export class LoadHeroes implements Action {
  public readonly type = LOAD_HEROES;

  constructor( public payload?: { currentPage?: number, pageSize?: number }) {}
}

export class LoadHeroesComplete implements Action {
  public readonly type = LOAD_HEROES_COMPLETE;

  constructor(public payload: {heroes: any[], totalPages: number}) {}
}
export type HeroesActions =
  LoadHeroes |
  LoadHeroesComplete;
