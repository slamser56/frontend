import { VerifyCodeActionType, VerifyCodeState, ConstantsVerifyCode } from './type';

const initialState: VerifyCodeState = {
  error: '',
  isFetching: false,
  response: false,
};

export default function phone(state = initialState, action: VerifyCodeActionType): VerifyCodeState {
  switch (action.type) {
    case ConstantsVerifyCode.VERIFY_CODE_SUCCESS:
      return { ...state, isFetching: false, response: true };
    case ConstantsVerifyCode.VERIFY_CODE_FAIL:
      return { ...state, ...(action.payload || {}), isFetching: false };
    case ConstantsVerifyCode.VERIFY_CODE_REQUEST:
      return { ...state, isFetching: true, error: '' };
    case ConstantsVerifyCode.VERIFY_CODE_RESET:
      return initialState;
    default:
      return { ...state };
  }
}
