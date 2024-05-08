import { combineReducers } from 'redux';
import { usersReducer } from './users/reducer';
import { productsReducer } from './products/reducer';

export const reducer = combineReducers({
  users: usersReducer,
  products: productsReducer,
});
