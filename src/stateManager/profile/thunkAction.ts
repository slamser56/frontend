import Toast from 'react-native-root-toast';
import { AppThunk } from '../thunkType';
import api from '../../api';
import apiConstants from '../../api/constants';
import { t } from '../../lang';
import { upoadAvatarSuccess, upoadAvatarFail, getProfileFail, getProfileSuccess } from './action';

export const uploadAvatar = (image: string): AppThunk => async (dispatch): Promise<void | string> => {
  try {
    const { avatar } = await api.post(apiConstants.UPLOAD_AVATAR, {
      image,
    });
    dispatch(upoadAvatarSuccess(avatar));
  } catch (error) {
    dispatch(upoadAvatarFail());
    Toast.show(t('action.somethingWrong'));
  }
};

export const getProfile = (): AppThunk => async (dispatch): Promise<void | string> => {
  try {
    const { avatar } = await api.post(apiConstants.GET_PROFILE);
    dispatch(getProfileSuccess(avatar));
  } catch (error) {
    dispatch(getProfileFail());
    Toast.show(t('action.somethingWrong'));
  }
};
