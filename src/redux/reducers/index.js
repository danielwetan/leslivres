import { combineReducers } from 'redux';
import auth from './auth';
import author from './author';

export default combineReducers({
  auth,
  author
});