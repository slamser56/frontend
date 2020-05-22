import { ConstantsSystem } from './type';
import api from '../../api';
import { AppThunk } from '../thunkType';
import apiConstants from '../../api/apiConstants';

const checkConnect = (): AppThunk => async (dispatch): Promise<void | string> => {
  try {
    await api.post(apiConstants.ROOT);
    dispatch({
      type: ConstantsSystem.CONNECT_SUCCESS,
      payload: {
        connected: true,
      },
    });
    return Promise.resolve();
  } catch (error) {
    dispatch({
      type: ConstantsSystem.CONNECT_FAIL,
    });
    return Promise.reject('Do not connect');
  }
};

export default checkConnect;
