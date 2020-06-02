import { ConstantsPhone } from './type';
import api, { autorizeApi } from '../../api';
import { AppThunk } from '../thunkType';
import apiConstants from '../../api/constants';
import { t } from '../../lang';

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
  } catch (error) {
    dispatch({
      type: ConstantsPhone.VERIFY_CODE_FAIL,
    });
    if (error.response.status === 404) {
      return Promise.reject(t('action.inputCorrectCode'));
    }
    return Promise.reject(t('action.somethingWrong'));
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
  } catch (error) {
    dispatch({
      type: ConstantsPhone.SEND_CODE_FAIL,
    });
    return Promise.reject(t('action.somethingWrong'));
  }
};

export const checkToken = (token: string): AppThunk => async (dispatch): Promise<void | string> => {
  try {
    await api.post(apiConstants.VERIFY_TOKEN, { token });
    autorizeApi(token);
    dispatch({
      type: ConstantsPhone.VERIFY_TOKEN_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: ConstantsPhone.VERIFY_TOKEN_FAIL,
    });
    return Promise.reject(t('action.verifyTokenFail'));
  }
};

export const logOut = (): AppThunk => (dispatch): void => {
  autorizeApi('');
  dispatch({
    type: ConstantsPhone.LOG_OUT,
  });
};
