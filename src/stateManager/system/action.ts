import { ConstantsSystem } from './type';
import api from '../../api';
import { AppThunk } from '../thunkType';
import apiConstants from '../../api/constants';
import { changeLanguage } from '../../lang';

export const checkConnect = (): AppThunk => async (dispatch): Promise<void | string> => {
  try {
    await api.post(apiConstants.ROOT);
    dispatch({
      type: ConstantsSystem.CONNECT_SUCCESS,
      payload: {
        connected: true,
      },
    });
    return Promise.resolve();
  } catch (error) {
    dispatch({
      type: ConstantsSystem.CONNECT_FAIL,
    });
    return Promise.reject('Do not connect');
  }
};

export const setLanguage = (language: string): AppThunk => async (dispatch): Promise<void | string> => {
  changeLanguage(language);
  dispatch({
    type: ConstantsSystem.SET_LANGUAGE,
    payload: {
      language,
    },
  });
};
