import {combineReducers} from 'redux';
import booksReducer from './booksReducer';
import ActiveBook from './activeBookReducer';
const reducers = combineReducers({
  books: booksReducer,
  activeBook: ActiveBook
});

export default reducers;
