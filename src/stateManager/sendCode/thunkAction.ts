import api from '../../api';
import { AppThunk } from '../thunkType';
import apiConstants from '../../api/constants';
import { sendCodeFail, sendCodeRequest, sendCodeSuccess } from './action';
import { setPhoneNumber } from '../user/action';

const sendCodeAction = (phoneNumber: number): AppThunk => async (dispatch): Promise<void> => {
  try {
    dispatch(sendCodeRequest());
    await api.post(apiConstants.SEND_CODE, { phoneNumber });
    dispatch(setPhoneNumber(phoneNumber));
    dispatch(sendCodeSuccess());
  } catch (error) {
    dispatch(sendCodeFail('action.somethingWrong'));
  }
};

export default sendCodeAction;
