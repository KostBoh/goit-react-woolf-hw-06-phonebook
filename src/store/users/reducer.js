import { ADD_USER, USERS } from './types';

const initialState = { users: [] };

export const usersReducer = (state = initialState, { type, payload }) => {
  if (type === USERS) return { ...state, users: payload };
  else if (type === ADD_USER)
    return { ...state, users: [...state.users, payload] };
  else return state;
};
