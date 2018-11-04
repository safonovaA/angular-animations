import { LOAD_HEROES, LOAD_HEROES_COMPLETE, HeroesActions } from '../actions/heroes.actions';
import * as Immutable from 'immutable';

export interface State {
  isLoading: boolean;
  totalPages: number;
  currentPage: number;
  pageSize: number;
  heroes: Immutable.List<any>;
}

export const initialState: State = {
  isLoading: false,
  totalPages: 0,
  currentPage: 1,
  pageSize: 10,
  heroes: Immutable.List([]),
};

export function reducer(state = initialState, action: HeroesActions): State {
  switch (action.type) {
    case LOAD_HEROES:
      const pageSize = action.payload && action.payload.pageSize || 10;
      const currentPage = action.payload && action.payload.currentPage || 1;
      return {
        ...state,
        isLoading: true,
        currentPage,
        pageSize,
      };
    case LOAD_HEROES_COMPLETE:
      return {
        ...state,
        isLoading: false,
        heroes: Immutable.List(action.payload.heroes),
        totalPages: action.payload.totalPages,
      };
    default:
      return state;
  }
}

export const getTotalPages = (state) => {
  return state.heroes.totalPages;
};

export const getCurrentPage = (state) => {
  return state.heroes.currentPage;
};

export const getIsLoading = (state) => {
  return state.heroes.isLoading;
};

export const getPageSize = (state) => {
  return state.heroes.pageSize;
};

export const getPageState = (state) => {
  return {
    pageSize: state.heroes.pageSize,
    currentPage: state.heroes.currentPage,
    totalPages: state.heroes.totalPages,
    totalResults: state.heroes.heroes.count(),
  };
};

export const getHeroes = (state) => {
  const { pageSize, currentPage, heroes } = state.heroes;
  const diff = heroes.count() - pageSize;
  const start = (currentPage - 1) * pageSize;
  const end = diff >= 0 ?
    start + pageSize :
    start + (pageSize + diff);
  return state.heroes.heroes.slice(start, end).toArray();
};
