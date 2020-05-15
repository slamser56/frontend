import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';
import { ConstantsSystem } from '../types';
import { instance } from '../axios';
type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export const checkConnect = (): AppThunk => async (dispatch) => {
  try {
    await instance.post('/');
    dispatch({
      type: ConstantsSystem.CHECK_CONNECT,
      payload: {
        connected: true,
      },
    });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
