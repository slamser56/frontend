export interface PhoneState {
  phoneNumber: number;
  token: string;
  errorMessage: string;
}

export enum ConstantsPhone {
  SEND_CODE_SUCCESS = 'SEND_CODE_SUCCESS',
  SEND_CODE_FAIL = 'SEND_CODE_FAIL',
  VERIFY_CODE_SUCCESS = 'VERIFY_CODE_SUCCESS',
  VERIFY_CODE_FAIL = 'VERIFY_CODE_FAIL',
  VERIFY_TOKEN_SUCCESS = 'VERIFY_TOKEN_SUCCESS',
  VERIFY_TOKEN_FAIL = 'VERIFY_TOKEN_FAIL',
  LOG_OUT = 'LOG_OUT',
  RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE',
}

interface PhoneAction {
  type: ConstantsPhone;
  payload: PhoneState;
}

export type PhoneActionTypes = PhoneAction;
