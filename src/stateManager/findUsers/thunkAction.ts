import Toast from 'react-native-root-toast';
import api from '../../api';
import { AppThunk } from '../thunkType';
import apiConstants from '../../api/constants';
import * as action from './action';

const findUsers = (phoneNumber: string): AppThunk => async (dispatch): Promise<void> => {
  try {
    dispatch(action.findUsersRequest());
    const subscriptions = await api.get(apiConstants.USERS, { params: { phoneNumber } });
    dispatch(action.findUsersSuccess(subscriptions));
  } catch (error) {
    dispatch(action.findUsersFail());
    Toast.show(error.response?.data);
  }
};

export default findUsers;
