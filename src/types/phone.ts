export interface PhoneState {
  phoneNumber: string;
  token: string;
}

export enum ConstantsPhone {
  SEND_CODE_OK = 'SEND_CODE_OK',
  SEND_CODE_BAD = 'SEND_CODE_BAD',
  VERIFY_CODE_OK = 'VERIFY_CODE_OK',
  VERIFY_CODE_BAD = 'VERIFY_CODE_BAD',
  LOG_OUT = 'LOG_OUT',
  VERIFY_TOKEN_OK = 'VERIFY_TOKEN_OK',
  VERIFY_TOKEN_BAD = 'VERIFY_TOKEN_BAD',
}

interface PhoneAction {
  type:
    | ConstantsPhone.LOG_OUT
    | ConstantsPhone.SEND_CODE_BAD
    | ConstantsPhone.SEND_CODE_OK
    | ConstantsPhone.VERIFY_CODE_BAD
    | ConstantsPhone.VERIFY_CODE_OK
    | ConstantsPhone.VERIFY_TOKEN_BAD
    | ConstantsPhone.VERIFY_TOKEN_OK;
  payload: PhoneState;
}

export type PhoneActionTypes = PhoneAction;
