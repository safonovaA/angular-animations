import { Action } from '@ngrx/store';
import { LOAD_HERO, LOAD_HERO_COMPLETE, HeroActions } from '../actions/hero.actions';


export interface State {
  isLoading: boolean;
  hero: any;
}

export const initialState: State = {
  isLoading: false,
  hero: null,
};

export function reducer(state = initialState, action: HeroActions): State {
  switch (action.type) {
    case LOAD_HERO:
      return {
        ...state,
        isLoading: true,
        hero: null,
      };
    case LOAD_HERO_COMPLETE:
      return {
        ...state,
        isLoading: false,
        hero: action.payload,
      };
    default:
      return state;
  }
}

export const getHero = (state) => state.hero.hero;
export const getIsLoading = (state) => state.hero.isLoading;
