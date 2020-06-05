import Toast from 'react-native-root-toast';
import api, { autorizedApi } from '../../api';
import { AppThunk } from '../thunkType';
import apiConstants from '../../api/constants';
import { t } from '../../lang';
import {
  verifyCodeFail,
  verifyCodeSuccess,
  sendCodeSuccess,
  sendCodeFail,
  verifyTokenFail,
  verifyTokenSuccess,
  logOutAction,
} from './action';

export const verifyCode = (code: string, phoneNumber: number): AppThunk => async (dispatch): Promise<void | string> => {
  try {
    const { token } = await api.post(apiConstants.VERIFY_CODE, {
      phoneNumber,
      code,
    });
    autorizedApi(token);
    dispatch(verifyCodeSuccess(token));
  } catch (error) {
    if (error.response.status === 404) {
      dispatch(verifyCodeFail('action.inputCorrectCode'));
    }
    dispatch(verifyCodeFail('action.somethingWrong'));
    return Promise.reject();
  }
};

export const sendCode = (phoneNumber: number): AppThunk => async (dispatch): Promise<void | string> => {
  try {
    await api.post(apiConstants.SEND_CODE, { phoneNumber });
    dispatch(sendCodeSuccess(phoneNumber));
  } catch (error) {
    dispatch(sendCodeFail('action.somethingWrong'));
    return Promise.reject();
  }
};

export const checkToken = (token: string): AppThunk => async (dispatch): Promise<void | string> => {
  try {
    await api.post(apiConstants.VERIFY_TOKEN, { token });
    autorizedApi(token);
    dispatch(verifyTokenSuccess());
  } catch (error) {
    dispatch(verifyTokenFail());
    Toast.show(t('action.verifyTokenFail'));
  }
};

export const logOut = (): AppThunk => (dispatch): void => {
  autorizedApi('');
  dispatch(logOutAction());
};
