import { AppThunk } from '../thunkType';
import { ConstantsProfile } from './type';
import api from '../../api';
import apiConstants from '../../api/constants';

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
    return Promise.resolve();
  } catch (error) {
    dispatch({
      type: ConstantsProfile.UPLOAD_AVATAR_FAIL,
    });
    return Promise.reject('Something wrong');
  }
};

export const downloadAvatar = (): AppThunk => async (dispatch): Promise<void | string> => {
  try {
    const { avatar } = await api.post(apiConstants.DOWNLOAD_AVATAR);
    dispatch({
      type: ConstantsProfile.DOWNLOAD_AVATAR_SUCCESS,
      payload: {
        avatar,
      },
    });
    return Promise.resolve();
  } catch (error) {
    dispatch({
      type: ConstantsProfile.DOWNLOAD_AVATAR_FAIL,
    });
    return Promise.reject('Something wrong');
  }
};
