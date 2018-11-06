import { Action } from '@ngrx/store';

export const LOAD_HERO = '[Hero] Load Hero';
export const LOAD_HERO_COMPLETE = '[Hero] Load Hero Complete';

export class LoadHero implements Action {
  public readonly type = LOAD_HERO;

  constructor( public payload: string) {}
}

export class LoadHeroComplete implements Action {
  public readonly type = LOAD_HERO_COMPLETE;

  constructor(public payload: any) {}
}
export type HeroActions =
  LoadHero |
  LoadHeroComplete;
