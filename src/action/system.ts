import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';
import { ConstantsSystem } from '../types';
import { api } from '../axios';
type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export const checkConnect = (): AppThunk => async (dispatch) => {
  try {
    await api.post('/');
    dispatch({
      type: ConstantsSystem.SUCCESS_CONNECT,
      payload: {
        connected: true,
      },
    });
    return true;
  } catch (err) {
    dispatch({
      type: ConstantsSystem.FAIL_CONNECT,
    });
    return false;
  }
};
