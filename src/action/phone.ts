import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';
import { Constants } from '../types';
import axios from 'axios';

export const verifyCode = (
  code: string,
  phoneNumber: string,
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch,
) => {
  const result = await axios.post(
    'http://192.168.100.3:5000/api/phone/CodeVerify',
    { phoneNumber, code },
  );
  dispatch({
    type: Constants.VERIFY_CODE,
    payload: {
      status: result.data.status,
      isAutorized: result.data.status,
    },
  });
};

export const thunkSendCode = (
  phoneNumber: string,
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch,
) => {
  const result = await axios.post(
    'http://192.168.100.3:5000/api/phone/sendCode',
    { phoneNumber },
  );
  dispatch({
    type: Constants.SEND_CODE,
    payload: {
      phone: phoneNumber,
      status: result.data.status,
      statusSendCode: result.data.status,
    },
  });
};
