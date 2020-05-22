import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { ListAppState } from '../listTypes';
import phone from '../phone/reducer';
import system from '../system/reducer';
import profile from '../profile/reducer';

const persistConfig = {
  key: 'phone',
  storage: AsyncStorage,
  whitelist: ['phone'],
};

const rootReducer = combineReducers<ListAppState>({
  phone,
  system,
  profile,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = applyMiddleware(thunk, logger);
const store = createStore(persistedReducer, middleware);
const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>;

export { store, persistor, rootReducer };
