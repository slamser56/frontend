export interface PhoneState {
  phoneNumber: string;
  token: string;
}

export enum ConstantsPhone {
  SEND_CODE_SUCCESS = 'SEND_CODE_SUCCESS',
  SEND_CODE_FAILED = 'SEND_CODE_FAILED',
  VERIFY_CODE_SUCCESS = 'VERIFY_CODE_SUCCESS',
  VERIFY_CODE_FAILED = 'VERIFY_CODE_FAILED',
  VERIFY_TOKEN_SUCCESS = 'VERIFY_TOKEN_SUCCESS',
  VERIFY_TOKEN_FAILED = 'VERIFY_TOKEN_FAILED',
  LOG_OUT = 'LOG_OUT',
}

interface PhoneAction {
  type:
  | ConstantsPhone.LOG_OUT
  | ConstantsPhone.SEND_CODE_FAILED
  | ConstantsPhone.SEND_CODE_SUCCESS
  | ConstantsPhone.VERIFY_CODE_FAILED
  | ConstantsPhone.VERIFY_CODE_SUCCESS
  | ConstantsPhone.VERIFY_TOKEN_FAILED
  | ConstantsPhone.VERIFY_TOKEN_SUCCESS;
  payload: PhoneState;
}

export type PhoneActionTypes = PhoneAction;
