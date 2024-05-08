import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactsReducer);

const store = configureStore({
  reducer: {
    contacts: persistedReducer,
  },
});
const persistor = persistStore(store);

export { store, persistor };
