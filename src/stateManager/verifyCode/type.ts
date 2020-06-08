export interface VerifyCodeState {
  error: string;
  isFetching: boolean;
  response: boolean;
}

export enum ConstantsVerifyCode {
  VERIFY_CODE_REQUEST = 'VERIFY_CODE_REQUEST',
  VERIFY_CODE_SUCCESS = 'VERIFY_CODE_SUCCESS',
  VERIFY_CODE_FAIL = 'VERIFY_CODE_FAIL',
  VERIFY_CODE_RESET = 'VERIFY_CODE_RESET',
}

export type VerifyCodeActionType = {
  type: ConstantsVerifyCode;
  payload: VerifyCodeState;
};
