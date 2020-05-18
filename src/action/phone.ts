import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';
import { ConstantsPhone } from '../types';
import { api } from '../axios';
type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export const verifyCode = (
  code: string,
  phoneNumber: string,
): AppThunk => async (dispatch) => {
  try {
    const { token } = await api.post('/phone/codeVerify', {
      phoneNumber,
      code,
    });
    dispatch({
      type: ConstantsPhone.VERIFY_CODE_OK,
      payload: {
        token,
      },
    });
    return Promise.resolve();
  } catch (err) {
    dispatch({
      type: ConstantsPhone.VERIFY_CODE_BAD,
    });
    if (err.response.status === 404) {
      return Promise.reject('Input correct code');
    }
    return Promise.reject('Something wrong');
  }
};

export const sendCode = (phoneNumber: string): AppThunk => async (dispatch) => {
  try {
    await api.post('/phone/sendCode', { phoneNumber });
    dispatch({
      type: ConstantsPhone.SEND_CODE_OK,
      payload: {
        phoneNumber,
      },
    });
    return Promise.resolve();
  } catch (err) {
    dispatch({
      type: ConstantsPhone.SEND_CODE_BAD,
    });
    return Promise.reject('Something wrong');
  }
};

export const checkToken = (token: string): AppThunk => async (dispatch) => {
  try {
    await api.post('/phone/verifyToken', { token });
    dispatch({
      type: ConstantsPhone.VERIFY_TOKEN_OK,
    });
    return true;
  } catch (err) {
    dispatch({
      type: ConstantsPhone.VERIFY_TOKEN_BAD,
    });
    return false;
  }
};

export function logOut() {
  return {
    type: ConstantsPhone.LOG_OUT,
  };
}
