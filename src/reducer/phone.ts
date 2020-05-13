import { PhoneState, PhoneActionTypes, Constants } from '../types';

const initialState: PhoneState = {
  phone: '',
  isAutorized: false,
  statusSendCode: false,
  status: true,
};

export function phoneReducer(
  state = initialState,
  action: PhoneActionTypes,
): PhoneState {
  switch (action.type) {
    case Constants.SEND_CODE:
      return {
        ...state,
        ...action.payload,
      };
    case Constants.VERIFY_CODE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
