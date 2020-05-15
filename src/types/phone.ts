export interface PhoneState {
  phoneNumber: string;
  token: string;
}

export enum ConstantsPhone {
  SEND_CODE = 'SEND_CODE',
  VERIFY_CODE = 'VERIFY_CODE',
  LOG_OUT = 'LOG_OUT',
  CHECK_TOKEN = 'CHECK_TOKEN',
}

interface SendCodeAction {
  type: typeof ConstantsPhone.SEND_CODE;
  payload: PhoneState;
}

interface VerifyCodeAction {
  type: typeof ConstantsPhone.VERIFY_CODE;
  payload: PhoneState;
}

interface LogOutAction {
  type: typeof ConstantsPhone.LOG_OUT;
  payload: PhoneState;
}

interface CheckToken {
  type: typeof ConstantsPhone.CHECK_TOKEN;
  payload: PhoneState;
}

export type PhoneActionTypes =
  | SendCodeAction
  | VerifyCodeAction
  | LogOutAction
  | CheckToken;
