import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
