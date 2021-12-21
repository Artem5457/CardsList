import { INews } from '../types/types';

function markInString(text: string, str: string): string {
  let result = '';
  const ind = text.toLowerCase().indexOf(str);

  if (ind >= 0) {
    let regex = text.slice(ind, (ind + str.length));
    let newSubstr = `<mark>${regex}</mark>`;

    result = text.replace(regex, newSubstr);
    regex = '</mark> <mark>';
    newSubstr = ' ';
    result = result.replace(regex, newSubstr);

    return result;
  }

  return '';
}

function fillNewArray(copyNews: INews[], searchString: string, byFill: string): INews[] {
  const result: INews[] = [];

  copyNews.filter((obj: INews) => {
    let count = 0;

    searchString.toLowerCase().split(' ')
      .forEach((str: string) => {
        if (str !== '') {
          if (byFill === 'title') {
            if (markInString(obj.title, str)) {
              // eslint-disable-next-line no-param-reassign
              obj.title = markInString(obj.title, str);
              // eslint-disable-next-line no-plusplus
              count++;
            }
          }

          if (byFill === 'summary') {
            if (markInString(obj.summary, str) && obj.title.indexOf('<mark>') < 0) {
              // eslint-disable-next-line no-param-reassign
              obj.summary = markInString(obj.summary, str);
              // eslint-disable-next-line no-plusplus
              count++;
            }
          }
        }
      });

    if (count > 0) {
      result.push(obj);
    }

    return [];
  });

  return result;
}

export const markSearchWordsInText = (news: INews[], searchString: string): INews[] => {
  const copyNews: INews[] = news.map((item: INews) => ({ ...item }));
  let result: INews[] = [];

  result = [...fillNewArray(copyNews, searchString, 'title')];
  result = [...result, ...fillNewArray(copyNews, searchString, 'summary')];

  return result;
};
