import { PhoneState, PhoneActionTypes, ConstantsPhone } from './type';

const initialState: PhoneState = {
  phoneNumber: 0,
  token: '',
  error: '',
  isFetching: false,
  response: false,
};

export default function phone(state = initialState, action: PhoneActionTypes): PhoneState {
  switch (action.type) {
    case ConstantsPhone.SEND_CODE_SUCCESS:
    case ConstantsPhone.VERIFY_CODE_SUCCESS:
    case ConstantsPhone.VERIFY_TOKEN_SUCCESS:
      return {
        ...state,
        ...(action.payload || {}),
        isFetching: false,
        response: true,
      };
    case ConstantsPhone.SEND_CODE_FAIL:
    case ConstantsPhone.VERIFY_TOKEN_FAIL:
    case ConstantsPhone.VERIFY_CODE_FAIL:
      return {
        ...state,
        ...(action.payload || {}),
        isFetching: false,
      };
    case ConstantsPhone.VERIFY_CODE_REQUEST:
    case ConstantsPhone.SEND_CODE_REQUEST:
    case ConstantsPhone.VERIFY_TOKEN_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: '',
      };
    case ConstantsPhone.RESET:
      return {
        ...state,
        error: '',
        response: false,
        isFetching: false,
      };
    case ConstantsPhone.LOG_OUT:
      return initialState;
    default:
      return state;
  }
}
