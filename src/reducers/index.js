import { combineReducers } from 'redux';
import counters from './counters';
import user from './user';

import todos from './todos';
import visibilityFilter from './visibilityFilter';

import fetchingCat from './fetchingCat';

export default combineReducers({
  counters,
  user,
  todos,
  visibilityFilter,
  fetchingCat
});