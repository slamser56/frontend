import { PhoneState, PhoneActionTypes, ConstantsPhone } from './type';

const initialState: PhoneState = {
  phoneNumber: 0,
  token: '',
};

export default function phone(state = initialState, action: PhoneActionTypes): PhoneState {
  switch (action.type) {
    case ConstantsPhone.SEND_CODE_SUCCESS:
    case ConstantsPhone.VERIFY_CODE_SUCCESS:
    case ConstantsPhone.VERIFY_TOKEN_SUCCESS:
    case ConstantsPhone.VERIFY_CODE_FAIL:
      return {
        ...state,
        ...(action.payload || {}),
      };
    case ConstantsPhone.LOG_OUT:
    case ConstantsPhone.SEND_CODE_FAIL:
    case ConstantsPhone.VERIFY_TOKEN_FAIL:
      return initialState;
    default:
      return state;
  }
}
