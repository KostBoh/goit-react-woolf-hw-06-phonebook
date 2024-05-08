// import { createStore } from 'redux';
import { reducer } from './reducer';
import { configureStore } from '@reduxjs/toolkit';

// const reducer = (state, action) => {
//   if (action.type === 'number') return { ...state, number: action.payload };
//   //   else if (action.type === 'users') return { ...state, users: action.payload };
//   else if (action.type === 'products')
//     return { ...state, products: action.payload };
//   else return state;
// };

// console.log(store.getState());

// store.dispatch({ type: 'number', payload: 123 });
// store.dispatch({ type: 'users', payload: [223] });
// store.dispatch({ type: 'products', payload: [323] });

// console.log(store.getState());

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
  key: 'todo',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({ reducer: persistedReducer });
export const persistor = persistStore(store);
