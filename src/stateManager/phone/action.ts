import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';
import { ConstantsPhone } from './type';
import api from '../../api';

type AppThunk = ThunkAction<void, RootState, null, Action<string>>;


export const verifyCode = (
  code: string,
  phoneNumber: string,
): AppThunk => async (dispatch): Promise<string | void> => {
  try {
    const { token } = await api.post('/phone/codeVerify', {
      phoneNumber,
      code,
    });
    dispatch({
      type: ConstantsPhone.VERIFY_CODE_SUCCESS,
      payload: {
        token,
      },
    });
    return Promise.resolve();
  } catch (err) {
    dispatch({
      type: ConstantsPhone.VERIFY_CODE_FAILED,
    });
    if (err.response.status === 404) {
      return Promise.reject('Input correct code');
    }
    return Promise.reject('Something wrong');
  }
};

export const sendCode = (phoneNumber: string): AppThunk => async (dispatch): Promise<string | void> => {
  try {
    await api.post('/phone/sendCode', { phoneNumber });
    dispatch({
      type: ConstantsPhone.SEND_CODE_SUCCESS,
      payload: {
        phoneNumber,
      },
    });
    return Promise.resolve();
  } catch (err) {
    dispatch({
      type: ConstantsPhone.SEND_CODE_FAILED,
    });
    return Promise.reject('Something wrong');
  }
};

export const checkToken = (token: string): AppThunk => async (dispatch): Promise<boolean> => {
  try {
    await api.post('/phone/verifyToken', { token });
    dispatch({
      type: ConstantsPhone.VERIFY_TOKEN_SUCCESS,
    });
    return true;
  } catch (err) {
    dispatch({
      type: ConstantsPhone.VERIFY_TOKEN_FAILED,
    });
    return false;
  }
};

export const logOut = (): AppThunk => async (dispatch): Promise<void> => {
  dispatch({
    type: ConstantsPhone.LOG_OUT,
  });
};
