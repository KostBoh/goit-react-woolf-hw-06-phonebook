import { combineReducers } from 'redux';
// import { usersReducer } from './users/reducer';
import { productsReducer } from './products/reducer';
import { todoReducer } from './todo/slice';
import { usersReducer } from './users/slice';

export const reducer = combineReducers({
  users: usersReducer,
  products: productsReducer,
  todo: todoReducer,
});
