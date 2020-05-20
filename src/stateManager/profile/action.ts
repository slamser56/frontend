import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';
import { ConstantsProfile } from './type';
import api from '../../api';

type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export const uploadAvatar = (image: string, token: string): AppThunk => async (
  dispatch,
) => {
  try {
    const { avatar } = await api.post('/profile/uploadAvatar', {
      image,
      token,
    });
    dispatch({
      type: ConstantsProfile.UPLOAD_AVATAR_SUCCESS,
      payload: {
        avatar,
      },
    });
    return Promise.resolve();
  } catch (err) {
    dispatch({
      type: ConstantsProfile.UPLOAD_AVATAR_FAIL,
    });
    return Promise.reject('Something wrong');
  }
};

export const getAvatar = (token: string): AppThunk => async (dispatch): Promise<void | string> => {
  try {
    const { avatar } = await api.post('/profile/getAvatar', {
      token,
    });
    dispatch({
      type: ConstantsProfile.GET_AVATAR_SUCCESS,
      payload: {
        avatar,
      },
    });
    return Promise.resolve();
  } catch (err) {
    dispatch({
      type: ConstantsProfile.GET_AVATAR_FAIL,
    });
    return Promise.reject('Something wrong');
  }
};
