import { AppThunk } from '../thunkType';
import { ConstantsProfile } from './type';
import api from '../../api';
import apiConstants from '../../api/constants';
import { t } from '../../lang';

export const uploadAvatar = (image: string): AppThunk => async (dispatch): Promise<void | string> => {
  try {
    const { avatar } = await api.post(apiConstants.UPLOAD_AVATAR, {
      image,
    });
    dispatch({
      type: ConstantsProfile.UPLOAD_AVATAR_SUCCESS,
      payload: {
        avatar,
      },
    });
  } catch (error) {
    dispatch({
      type: ConstantsProfile.UPLOAD_AVATAR_FAIL,
    });
    return Promise.reject(t('action.somethingWrong'));
  }
};

export const getProfile = (): AppThunk => async (dispatch): Promise<void | string> => {
  try {
    const { avatar } = await api.post(apiConstants.GET_PROFILE);
    dispatch({
      type: ConstantsProfile.GET_PROFILE_SUCCESS,
      payload: {
        avatar,
      },
    });
  } catch (error) {
    dispatch({
      type: ConstantsProfile.GET_PROFILE_FAIL,
    });
    return Promise.reject(t('action.somethingWrong'));
  }
};
