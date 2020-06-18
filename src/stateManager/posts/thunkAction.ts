import Toast from 'react-native-root-toast';
import api from '../../api';
import { AppThunk } from '../thunkType';
import apiConstants from '../../api/constants';
import * as action from './action';

export const getPosts = (): AppThunk => async (dispatch): Promise<void> => {
  try {
    dispatch(action.getPostsRequest());
    const posts = await api.get(apiConstants.POST);
    dispatch(action.getPostsSuccess(posts));
  } catch (error) {
    dispatch(action.getPostsFail());
    Toast.show(error.response.data);
  }
};

export const uploadPost = (text: string): AppThunk => async (dispatch): Promise<void> => {
  try {
    dispatch(action.uploadPostRequest());
    const { date } = await api.post(apiConstants.POST, { text });
    dispatch(action.uploadPostSuccess(text, date));
  } catch (error) {
    dispatch(action.uploadPostFail());
    return Promise.reject(error.response.data);
  }
};
