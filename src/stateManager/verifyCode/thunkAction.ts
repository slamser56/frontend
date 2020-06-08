import api, { autorizedApi } from '../../api';
import { AppThunk } from '../thunkType';
import apiConstants from '../../api/constants';
import { verifyCodeFail, verifyCodeRequest, verifyCodeSuccess } from './action';
import { setToken } from '../user/action';

const verifyCodeAction = (code: string, phoneNumber: number): AppThunk => async (dispatch): Promise<void> => {
  try {
    dispatch(verifyCodeRequest());
    const { token } = await api.post(apiConstants.VERIFY_CODE, {
      phoneNumber,
      code,
    });
    autorizedApi(token);
    dispatch(setToken(token));
    dispatch(verifyCodeSuccess());
  } catch (error) {
    if (error.response.status === 404) {
      dispatch(verifyCodeFail('action.inputCorrectCode'));
      return;
    }
    dispatch(verifyCodeFail('action.somethingWrong'));
  }
};

export default verifyCodeAction;
