export interface PhoneState {
  phone: string;
  isAutorized: boolean;
  statusSendCode: boolean;
  status: boolean;
}
export enum Constants {
  SEND_CODE = 'SEND_CODE',
  VERIFY_CODE = 'VERIFY_CODE',
}

interface SendCodeAction {
  type: typeof Constants.SEND_CODE;
  payload: PhoneState;
}

interface VerifyCodeAction {
  type: typeof Constants.VERIFY_CODE;
  payload: PhoneState;
}

export type PhoneActionTypes = SendCodeAction | VerifyCodeAction;
