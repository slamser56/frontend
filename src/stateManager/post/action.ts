import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';
import { ConstantsPost } from './type';
import api from '../../api';

type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
