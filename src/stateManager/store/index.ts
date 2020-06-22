import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { ListAppState } from '../listTypes';
import user from '../user/reducer';
import system from '../system/reducer';
import profile from '../profile/reducer';
import posts from '../posts/reducer';
import subscriptions from '../subscriptions/reducer';

const persistConfig = {
  key: 'user',
  storage: AsyncStorage,
  whitelist: ['user'],
};

const rootReducer = combineReducers<ListAppState>({
  user,
  system,
  profile,
  posts,
  subscriptions,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = applyMiddleware(thunk, logger);
const store = createStore(persistedReducer, middleware);
const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>;

export { store, persistor, rootReducer };
