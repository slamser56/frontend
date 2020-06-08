import Toast from 'react-native-root-toast';
import api, { autorizedApi } from '../../api';
import { AppThunk } from '../thunkType';
import apiConstants from '../../api/constants';
import { t } from '../../lang';
import { logOutAction, verifyTokenFail, verifyTokenSuccess } from './action';

export const checkToken = (token: string): AppThunk => async (dispatch): Promise<void> => {
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
