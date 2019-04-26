import { combineReducers } from 'redux';
import counters from './counters';
import user from './user';

export default combineReducers({
  counters,
  user
});