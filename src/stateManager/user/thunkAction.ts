import Toast from 'react-native-root-toast';
import api, { autorizedApi } from '../../api';
import { AppThunk } from '../thunkType';
import apiConstants from '../../api/constants';
import { t } from '../../lang';
import * as action from './action';

export const checkToken = (token: string): AppThunk => async (dispatch): Promise<void> => {
  try {
    await api.get(apiConstants.VERIFY_TOKEN, { params: { token } });
    autorizedApi(token);
    dispatch(action.verifyTokenSuccess());
  } catch (error) {
    dispatch(action.verifyTokenFail());
    Toast.show(t('action.verifyTokenFail'));
  }
};

export const logOut = (): AppThunk => (dispatch): void => {
  autorizedApi('');
  dispatch(action.logOutAction());
};

export const logIn = (phoneNumber: number, password: string): AppThunk => async (dispatch): Promise<void> => {
  try {
    dispatch(action.logInRequest());
    const { token } = await api.get(apiConstants.LOG_IN, { params: { phoneNumber, password } });
    autorizedApi(token);
    dispatch(action.logInSuccess(token, phoneNumber));
  } catch (error) {
    dispatch(action.logInFail());
    return Promise.reject(error.response?.data);
  }
};

export const sendCode = (phoneNumber: number): AppThunk => async (dispatch): Promise<void> => {
  try {
    dispatch(action.sendCodeRequest());
    await api.post(apiConstants.SEND_CODE, { phoneNumber });
    dispatch(action.sendCodeSuccess(phoneNumber));
  } catch (error) {
    dispatch(action.sendCodeFail());
    return Promise.reject(error.response?.data);
  }
};

export const verifyCode = (code: string, phoneNumber: number, password: string): AppThunk => async (
  dispatch,
): Promise<void> => {
  try {
    dispatch(action.verifyCodeRequest());
    const { token } = await api.post(apiConstants.VERIFY_CODE, {
      phoneNumber,
      code,
      password,
    });
    autorizedApi(token);
    dispatch(action.verifyCodeSuccess(token));
  } catch (error) {
    dispatch(action.verifyCodeFail());
    if (error.response.status === 404) {
      return Promise.reject(error.response?.data);
    }
    return Promise.reject(error.response?.data);
  }
};
