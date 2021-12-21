import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { State, INews } from '../types/types';
import { actions } from '../store/actions';
import { getDataFromServer } from './api';
import { convertMonthToString } from '../utils/ConvertMonth';

import { markSearchWordsInText } from '../utils/MarkSearchWords';

export const preparedTitlesToDisplay = (state: State): INews[] => {
  if (state.searchData.length === 0) {
    return state.news;
  }

  return markSearchWordsInText(state.news, state.searchData);
};

export const useSaveSearchWordsToState = (value: string): void => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (value !== ' ') {
      dispatch(actions.saveSearchWordsToState(value));
    }
  }, [value, dispatch]);
};

export const useConvertDate = (date: Date): string => (
  `${convertMonthToString(date.getMonth())} ${date.getDate()}th, ${date.getFullYear()}`
);

export const useTrimDescription = (str: string): string => (`${str.slice(0, 97)}...`);

export const useGetDataFromServer = (): void => {
  const dispatch = useDispatch();

  useEffect(() => {
    getDataFromServer()
      .then((promise: INews[]) => {
        dispatch(actions.saveToStateFromServer(promise));
      })
      .catch(() => {
        dispatch(actions.saveToStateFromServer([]));
      });
  }, [dispatch]);
};
