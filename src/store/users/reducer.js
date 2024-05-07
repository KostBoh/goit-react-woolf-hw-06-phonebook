import { createReducer } from '@reduxjs/toolkit';
// import { ADD_USER, USERS } from './types';
import { addUsersAction, usersAction } from './actions';

const initialState = { users: [] };

// export const usersReducer = (state = initialState, { type, payload }) => {
//   if (type === USERS) return { ...state, users: payload };
//   else if (type === ADD_USER)
//     return { ...state, users: [...state.users, payload] };
//   else return state;
// };

export const usersReducer = createReducer(initialState, builder => {
  builder
    .addCase(usersAction, (state, { payload }) => {
    return { ...state, users: payload };
  }).addCase(addUsersAction, (state, { payload }) => {
    return { ...state, users: [...state.users, payload] };
  });
});
