import Toast from 'react-native-root-toast';
import api from '../../api';
import { AppThunk } from '../thunkType';
import apiConstants from '../../api/constants';
import * as action from './action';

export const getPosts = (user: string): AppThunk => async (dispatch): Promise<void> => {
  try {
    dispatch(action.getPostsRequest());
    const posts = await api.get(apiConstants.POST, { params: { user } });
    dispatch(action.getPostsSuccess(posts));
  } catch (error) {
    dispatch(action.getPostsFail());
    Toast.show(error.response?.data);
  }
};

export const uploadPost = (text: string, phoneNumber: number): AppThunk => async (dispatch): Promise<void> => {
  try {
    dispatch(action.uploadPostRequest());
    const { createdAt, _id } = await api.post(apiConstants.POST, { text });
    dispatch(action.uploadPostSuccess(text, createdAt, _id, phoneNumber));
  } catch (error) {
    dispatch(action.uploadPostFail());
    return Promise.reject(error.response?.data);
  }
};

export const deletePost = (postId: string): AppThunk => async (dispatch): Promise<void> => {
  try {
    dispatch(action.deletePostRequest());
    await api.delete(apiConstants.POST, { data: { postId } });
    dispatch(action.deletePostSuccess(postId));
  } catch (error) {
    dispatch(action.deletePostFail());
    Toast.show(error.response?.data);
  }
};
