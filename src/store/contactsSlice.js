import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { data: [], filter: '' },
  reducers: {
    addContact: (state, { payload }) => {
      state.data.push(payload);
    },
    deleteContact: (state, { payload }) => {
      state.data = state.data.filter(contact => contact.id !== payload);
    },
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;
export default contactsSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: [],
//   reducers: {
//     addContact: (state, action) => {
//       state.push(action.payload);
//     },
//     deleteContact: (state, action) => {
//       return state.filter(contact => contact.id !== action.payload);
//     },
//     setFilter: (state, action) => {
//       return action.payload;
//     },
//   },
// });

// export const { addContact, deleteContact, setFilter } = contactsSlice.actions;
// export default contactsSlice.reducer;
