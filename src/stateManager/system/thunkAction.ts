import Toast from 'react-native-root-toast';
import api from '../../api';
import { AppThunk } from '../thunkType';
import apiConstants from '../../api/constants';
import { changeLanguage, t } from '../../lang';
import { connectSuccess, connectFail, setLanguageAction } from './action';

export const checkConnect = (): AppThunk => async (dispatch): Promise<void | string> => {
  try {
    await api.post(apiConstants.ROOT);
    dispatch(connectSuccess());
  } catch (error) {
    dispatch(connectFail());
    Toast.show(t('action.doNotConnect'));
  }
};

export const setLanguage = (language: string): AppThunk => async (dispatch): Promise<void | string> => {
  changeLanguage(language);
  dispatch(setLanguageAction(language));
};
