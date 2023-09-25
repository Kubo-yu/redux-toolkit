const { configureStore } = require("@reduxjs/toolkit");
import counterReducer from "./counterSlice";

// redux-persistの為のimports
// local-strage
import storage from 'redux-persist/lib/storage';
// session-strage
import storageSession from 'redux-persist/lib/storage/session'
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  // storage: storageSession,
  storage: storage,
}

const persistedReducer = persistReducer(persistConfig, counterReducer)


export const store = configureStore({
  reducer: {
    counter: persistedReducer,
    middleware: [thunk]
  },
});

export const persistor = persistStore(store)