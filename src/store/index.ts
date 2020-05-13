import { combineReducers, createStore, applyMiddleware } from 'redux';
import { phoneReducer } from '../reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
//import { persistStore, persistReducer } from 'redux-persist';
//import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  phone: phoneReducer,
});
/*
const persistConfig = {
  key: 'root',
  whitelist: ['phone'],
  storage,
};*/

//const persistedReducer = persistReducer(persistConfig, rootReducer);
export type RootState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
//export const persistor = persistStore(store);
