import { SendCodeState, SendCodeActionType, ConstantsSendCode } from './type';

const initialState: SendCodeState = {
  error: '',
  isFetching: false,
  response: false,
};

export default function phone(state = initialState, action: SendCodeActionType): SendCodeState {
  switch (action.type) {
    case ConstantsSendCode.SEND_CODE_SUCCESS:
      return { ...state, isFetching: false, response: true };
    case ConstantsSendCode.SEND_CODE_FAIL:
      return { ...state, ...(action.payload || {}), isFetching: false };
    case ConstantsSendCode.SEND_CODE_REQUEST:
      return { ...state, isFetching: true, error: '' };
    case ConstantsSendCode.SEND_CODE_RESET:
      return initialState;
    default:
      return { ...state };
  }
}
