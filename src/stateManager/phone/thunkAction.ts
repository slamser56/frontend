import Toast from 'react-native-root-toast';
import api, { autorizedApi } from '../../api';
import { AppThunk } from '../thunkType';
import apiConstants from '../../api/constants';
import { t } from '../../lang';
import * as action from './action';

export const verifyCode = (code: string, phoneNumber: number): AppThunk => async (dispatch): Promise<void> => {
  try {
    dispatch(action.verifyCodeRequest());
    const { token } = await api.post(apiConstants.VERIFY_CODE, {
      phoneNumber,
      code,
    });
    autorizedApi(token);
    dispatch(action.verifyCodeSuccess(token));
  } catch (error) {
    if (error.response.status === 404) {
      dispatch(action.verifyCodeFail('action.inputCorrectCode'));
    }
    dispatch(action.verifyCodeFail('action.somethingWrong'));
  }
};

export const sendCode = (phoneNumber: number): AppThunk => async (dispatch): Promise<void> => {
  try {
    dispatch(action.sendCodeRequest());
    await api.post(apiConstants.SEND_CODE, { phoneNumber });
    dispatch(action.sendCodeSuccess(phoneNumber));
  } catch (error) {
    dispatch(action.sendCodeFail('action.somethingWrong'));
  }
};

export const checkToken = (token: string): AppThunk => async (dispatch): Promise<void> => {
  try {
    dispatch(action.verifyCodeRequest());
    await api.post(apiConstants.VERIFY_TOKEN, { token });
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
