import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import counterReducer from './counterSlice';
import machinesReducer from './machinesSlice';
import authReducer from './authSlice';
import thunk from 'redux-thunk';


const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
  reducer: {
    auth:persistedReducer ,
    counter: counterReducer,
    machines: machinesReducer,
  },  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
});

export const persistor = persistStore(store)
