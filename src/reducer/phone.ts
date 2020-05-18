import { PhoneState, PhoneActionTypes, ConstantsPhone } from '../types';

const initialStatePhone: PhoneState = {
  phoneNumber: '',
  token: '',
};

export function phoneReducer(
  state = initialStatePhone,
  action: PhoneActionTypes,
): PhoneState {
  switch (action.type) {
    case ConstantsPhone.SEND_CODE_OK:
    case ConstantsPhone.VERIFY_CODE_OK:
    case ConstantsPhone.VERIFY_TOKEN_OK:
      return {
        ...state,
        ...action.payload,
      };
    case ConstantsPhone.LOG_OUT:
    case ConstantsPhone.SEND_CODE_BAD:
    case ConstantsPhone.VERIFY_CODE_BAD:
    case ConstantsPhone.VERIFY_TOKEN_BAD:
      return initialStatePhone;
    default:
      return state; //!!!!!
  }
}
