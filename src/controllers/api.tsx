import { INews } from '../types/types';

const url = 'https://api.spaceflightnewsapi.net/v3/articles';

export const getDataFromServer = (): Promise<INews[]> => {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }

      return response.json();
    });
};
