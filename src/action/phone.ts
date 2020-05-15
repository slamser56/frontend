import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';
import { ConstantsPhone, PhoneActionTypes } from '../types';
import { instance } from '../axios';
type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export const verifyCode = (
  code: string,
  phoneNumber: string,
): AppThunk => async (dispatch) => {
  try {
    if (isNaN(Number(code))) {
      return 'Input correct code';
    }
    const result: any = await instance.post('/phone/codeVerify', {
      phoneNumber,
      code,
    });
    dispatch({
      type: ConstantsPhone.VERIFY_CODE,
      payload: {
        token: result.token,
      },
    });
    return { status: true };
  } catch (err) {
    console.log(err);
    let status: any = err.response.status;
    if (status === 404) {
      return 'Input correct code';
    }
    return 'Something wrong';
  }
};

export const sendCode = (phoneNumber: string): AppThunk => async (dispatch) => {
  try {
    if (phoneNumber === '') {
      return 'Empty line';
    } else if (phoneNumber.length < 12 || phoneNumber.length > 13) {
      return 'Incorrect number';
    } else if (isNaN(Number(phoneNumber))) {
      return 'Incorrect number';
    }
    await instance.post('/phone/sendCode', { phoneNumber });
    dispatch({
      type: ConstantsPhone.SEND_CODE,
      payload: {
        phoneNumber,
      },
    });
    return { status: true };
  } catch (err) {
    console.log(err);
    return 'Something wrong';
  }
};

export const checkToken = (token: string): AppThunk => async (dispatch) => {
  try {
    await instance.post('/phone/verifyToken', { token });
    dispatch({
      type: ConstantsPhone.CHECK_TOKEN,
      payload: {
        token,
      },
    });
    return true;
  } catch (err) {
    console.log(err);
    dispatch({
      type: ConstantsPhone.CHECK_TOKEN,
      payload: {
        token: '',
        phoneNumber: '',
      },
    });
    return false;
  }
};

export function logOut(): PhoneActionTypes {
  return {
    type: ConstantsPhone.LOG_OUT,
    payload: { token: '', phoneNumber: '' },
  };
}
