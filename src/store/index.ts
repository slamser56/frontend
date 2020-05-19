import { combineReducers, createStore, applyMiddleware } from 'redux';
import { phoneReducer, systemReducer, profileReducer } from '../reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { ListAppState } from '../types';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'phone',
  storage: AsyncStorage,
  whitelist: ['phone'],
};

const rootReducer = combineReducers<ListAppState>({
  phone: phoneReducer,
  system: systemReducer,
  profile: profileReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = applyMiddleware(thunk, logger);
const store = createStore(persistedReducer, middleware);
const persistor = persistStore(store);

export { store, persistor };
