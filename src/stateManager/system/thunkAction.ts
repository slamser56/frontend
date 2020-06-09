import i18n from 'i18n-js';
import api, { acceptLanguage } from '../../api';
import { AppThunk } from '../thunkType';
import apiConstants from '../../api/constants';
import { changeLanguage, t } from '../../lang';
import * as action from './action';

export const checkConnect = (): AppThunk => async (dispatch): Promise<void | string> => {
  try {
    await api.post(apiConstants.ROOT);
    dispatch(action.connectSuccess());
    acceptLanguage(i18n.currentLocale());
  } catch (error) {
    dispatch(action.connectFail());
    return Promise.reject(t('action.doNotConnect'));
  }
};

export const setLanguage = (language: string): AppThunk => async (dispatch): Promise<void | string> => {
  changeLanguage(language);
  dispatch(action.setLanguageAction(language));
};
