import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';
import { SearchFiltersActions } from './filters.actions';

describe('FiltersEffects', () => {
  let actions: Observable<Action>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [provideMockActions(() => actions), provideMockStore()],
    });
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', {
        a: SearchFiltersActions.searchFilters({ term: '' }),
      });

      const expected = hot('-a-|', {
        a: SearchFiltersActions.searchFiltersSuccess({ filters: [] }),
      });

      expect(expected).toBeObservable(expected);
    });
  });
});
