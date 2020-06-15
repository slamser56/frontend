import Toast from 'react-native-root-toast';
import api from '../../api';
import { AppThunk } from '../thunkType';
import apiConstants from '../../api/constants';
import { t } from '../../lang';
import * as action from './action';

export const getPosts = (text: string): AppThunk => async (dispatch): Promise<void> => {
  try {
    dispatch(action.getPostsRequest());
    const { data } = await api.post(apiConstants.UPLOAD_POST, { text });
    dispatch(action.getPostsSuccess(data));
  } catch (error) {
    Toast.show(t('action.somethingWrong'));
  }
};

export const uploadPost = (text: string): AppThunk => async (dispatch): Promise<void> => {
  try {
    dispatch(action.uploadPostRequest());
    await api.post(apiConstants.UPLOAD_POST, { text });
    dispatch(action.uploadPostSuccess());
  } catch (error) {
    dispatch(action.uploadPostFail());
    return Promise.reject(t('action.somethingWrong'));
  }
};
