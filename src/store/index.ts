import { combineReducers, createStore, applyMiddleware } from 'redux';
import { phoneReducer, systemReducer } from '../reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { ListAppState } from '../types';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers<ListAppState>({
  phone: phoneReducer,
  system: systemReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = applyMiddleware(thunk, logger);
const store = createStore(persistedReducer, middleware);
const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>;

export { store, persistor, rootReducer };
