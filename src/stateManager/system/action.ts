import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';
import { ConstantsSystem } from './type';
import api from '../../api';

type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

const checkConnect = (): AppThunk => async (dispatch) => {
  try {
    await api.post('/');
    dispatch({
      type: ConstantsSystem.CONNECT_SUCCESS,
      payload: {
        connected: true,
      },
    });
    return true;
  } catch (err) {
    dispatch({
      type: ConstantsSystem.CONNECT_FAIL,
    });
    return false;
  }
};


export default checkConnect;
