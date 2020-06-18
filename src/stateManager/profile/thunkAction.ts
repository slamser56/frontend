import Toast from 'react-native-root-toast';
import { AppThunk } from '../thunkType';
import api from '../../api';
import apiConstants from '../../api/constants';
import { upoadAvatarSuccess, upoadAvatarFail, getProfileFail, getProfileSuccess } from './action';

export const uploadAvatar = (image: string): AppThunk => async (dispatch): Promise<void | string> => {
  try {
    const { avatar } = await api.put(apiConstants.AVATAR, {
      image,
    });
    dispatch(upoadAvatarSuccess(avatar));
  } catch (error) {
    dispatch(upoadAvatarFail());
    Toast.show(error.response?.data);
  }
};

export const getProfile = (): AppThunk => async (dispatch): Promise<void | string> => {
  try {
    const { avatar, phoneNumber } = await api.get(apiConstants.PROFILE);
    dispatch(getProfileSuccess(avatar, phoneNumber));
  } catch (error) {
    dispatch(getProfileFail());
    Toast.show(error.response?.data);
  }
};
