import { PhoneState, PhoneActionTypes, ConstantsPhone } from './type';

const initialStatePhone: PhoneState = {
  phoneNumber: '',
  token: '',
};

export default function phoneReducer(
  state = initialStatePhone,
  action: PhoneActionTypes,
): PhoneState {
  switch (action.type) {
    case ConstantsPhone.SEND_CODE_SUCCESS:
    case ConstantsPhone.VERIFY_CODE_SUCCESS:
    case ConstantsPhone.VERIFY_TOKEN_SUCCESS:
    case ConstantsPhone.VERIFY_CODE_FAILED:
      return {
        ...state,
        ...action.payload,
      };
    case ConstantsPhone.LOG_OUT:
    case ConstantsPhone.SEND_CODE_FAILED:
    case ConstantsPhone.VERIFY_TOKEN_FAILED:
      return initialStatePhone;
    default:
      return state;
  }
}
