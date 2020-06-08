import Toast from 'react-native-root-toast';
import api from '../../api';
import { AppThunk } from '../thunkType';
import apiConstants from '../../api/constants';
import { t } from '../../lang';
import { getPostsFail, getPostsRequest, getPostsSuccess } from './action';

const getPostsAction = (text: string): AppThunk => async (dispatch): Promise<void> => {
  try {
    dispatch(getPostsRequest());
    await api.post(apiConstants.UPLOAD_POST, { text });
    dispatch(getPostsSuccess());
  } catch (error) {
    Toast.show(t('action.somethingWrong'));
  }
};

export default uploadPostAction;
