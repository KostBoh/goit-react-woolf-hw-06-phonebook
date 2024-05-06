import { createStore } from 'redux';
import { reducer } from './reducer';

// const reducer = (state, action) => {
//   if (action.type === 'number') return { ...state, number: action.payload };
//   //   else if (action.type === 'users') return { ...state, users: action.payload };
//   else if (action.type === 'products')
//     return { ...state, products: action.payload };
//   else return state;
// };

export const store = createStore(reducer);
// console.log(store.getState());

// store.dispatch({ type: 'number', payload: 123 });
// store.dispatch({ type: 'users', payload: [223] });
// store.dispatch({ type: 'products', payload: [323] });

// console.log(store.getState());
