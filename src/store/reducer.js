// import { combineReducers } from 'redux';
// import { usersReducer } from './users/reducer';
import { productsReducer } from './products/reducer';
import { usersReducer } from './users/slice';

export const reducer = {
  users: usersReducer,
  products: productsReducer,
};
