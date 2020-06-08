import api from '../../api';
import { AppThunk } from '../thunkType';
import apiConstants from '../../api/constants';
import { uploadPostFail, uploadPostRequest, uploadPostSuccess } from './action';

const uploadPostAction = (text: string): AppThunk => async (dispatch): Promise<void> => {
  try {
    dispatch(uploadPostRequest());
    await api.post(apiConstants.UPLOAD_POST, { text });
    dispatch(uploadPostSuccess());
  } catch (error) {
    dispatch(uploadPostFail('action.somethingWrong'));
  }
};

export default uploadPostAction;
