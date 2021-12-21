import { SAVE_TO_STATE, SAVE_SEARCH_WORDS_TO_STATE } from './actions';

import { State, Action } from '../types/types';
import { state as initialState } from './initials';

export const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case SAVE_TO_STATE:
      return {
        ...state,
        news: (
          typeof action.value === 'object'
            ? action.value.map(item => ({ ...item }))
            : []
        ),
      };

    case SAVE_SEARCH_WORDS_TO_STATE:
      return {
        ...state,
        searchData: (typeof action.value === 'string') ? action.value : '',
      };

    default:
      return state;
  }
};
