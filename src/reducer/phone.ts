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
    case ConstantsPhone.SEND_CODE:
      return {
        ...state,
        ...action.payload,
      };
    case ConstantsPhone.VERIFY_CODE:
      return {
        ...state,
        ...action.payload,
      };
    case ConstantsPhone.LOG_OUT:
      return {
        ...state,
        ...action.payload,
      };
    case ConstantsPhone.CHECK_TOKEN:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
