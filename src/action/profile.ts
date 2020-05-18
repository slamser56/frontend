import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';
import { ConstantsProfile } from '../types';
import { api } from '../axios';
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
      type: ConstantsProfile.UPLOAD_AVATAR_OK,
      payload: {
        avatar,
      },
    });
    return Promise.resolve();
  } catch (err) {
    dispatch({
      type: ConstantsProfile.UPLOAD_AVATAR_BAD,
    });
    return Promise.reject('Something wrong');
  }
};

export const getAvatar = (token: string): AppThunk => async (dispatch) => {
  try {
    const { avatar } = await api.post('/profile/getAvatar', {
      token,
    });
    dispatch({
      type: ConstantsProfile.GET_AVATAR_OK,
      payload: {
        avatar,
      },
    });
    return Promise.resolve();
  } catch (err) {
    dispatch({
      type: ConstantsProfile.GET_AVATAR_BAD,
    });
    return Promise.reject('Something wrong');
  }
};
