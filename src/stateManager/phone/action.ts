import { ConstantsPhone } from './type';
import api, { autorizeApi } from '../../api';
import { AppThunk } from '../thunkType';
import apiConstants from '../../api/constants';

export const verifyCode = (code: string, phoneNumber: number): AppThunk => async (dispatch): Promise<void | string> => {
  try {
    const { token } = await api.post(apiConstants.VERIFY_CODE, {
      phoneNumber,
      code,
    });
    autorizeApi(token);
    dispatch({
      type: ConstantsPhone.VERIFY_CODE_SUCCESS,
      payload: {
        token,
      },
    });
    return Promise.resolve();
  } catch (error) {
    dispatch({
      type: ConstantsPhone.VERIFY_CODE_FAIL,
    });
    if (error.response.status === 404) {
      return Promise.reject('Input correct code');
    }
    return Promise.reject('Something wrong');
  }
};

export const sendCode = (phoneNumber: number): AppThunk => async (dispatch): Promise<void | string> => {
  try {
    await api.post(apiConstants.SEND_CODE, { phoneNumber });
    dispatch({
      type: ConstantsPhone.SEND_CODE_SUCCESS,
      payload: {
        phoneNumber,
      },
    });
    return Promise.resolve();
  } catch (error) {
    dispatch({
      type: ConstantsPhone.SEND_CODE_FAIL,
    });
    return Promise.reject('Something wrong');
  }
};

export const checkToken = (token: string): AppThunk => async (dispatch): Promise<void | string> => {
  try {
    await api.post(apiConstants.VERIFY_TOKEN, { token });
    autorizeApi(token);
    dispatch({
      type: ConstantsPhone.VERIFY_TOKEN_SUCCESS,
    });
    return Promise.resolve();
  } catch (error) {
    dispatch({
      type: ConstantsPhone.VERIFY_TOKEN_FAIL,
    });
    return Promise.reject('Verify token fail');
  }
};

export const logOut = (): AppThunk => (dispatch): void => {
  autorizeApi('');
  dispatch({
    type: ConstantsPhone.LOG_OUT,
  });
};
