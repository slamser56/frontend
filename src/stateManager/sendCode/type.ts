export interface SendCodeState {
  error: string;
  isFetching: boolean;
  response: boolean;
}

export enum ConstantsSendCode {
  SEND_CODE_REQUEST = 'SEND_CODE_REQUEST',
  SEND_CODE_SUCCESS = 'SEND_CODE_SUCCESS',
  SEND_CODE_FAIL = 'SEND_CODE_FAIL',
  SEND_CODE_RESET = 'SEND_CODE_RESET',
}

export type SendCodeActionType = {
  type: ConstantsSendCode;
  payload: SendCodeState;
}


