import { Article } from '@ncats-frontend-library/models/rdas';
import { Action } from '@ngrx/store';
import {
  FetchArticleActions,
  FetchArticlesListActions,
} from './articles.actions';
import * as ArticleStoreActions from './articles.actions';
import {
  articlesReducer,
  ArticleState,
  initialState,
} from './articles.reducer';

describe('ArticleStore Reducer', () => {
  const createArticleStoreEntity = (id: string, name = ''): Article =>
    new Article({
      pubmed_id: id,
      title: name || `name-${id}`,
    });

  describe('valid ArticleStore actions', () => {
    it('loadArticleStoreSuccess should return the list of known ArticleStore', () => {
      const articleStore = [
        createArticleStoreEntity('PRODUCT-AAA'),
        createArticleStoreEntity('PRODUCT-zzz'),
      ];
      const action = FetchArticlesListActions.fetchArticlesListSuccess({
        articles: articleStore,
      });

      const result: ArticleState = articlesReducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = articlesReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
