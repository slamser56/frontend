import { ConstantsSendCode } from './type';

export function sendCodeRequest() {
  return {
    type: ConstantsSendCode.SEND_CODE_REQUEST,
  };
}

export function sendCodeSuccess() {
  return {
    type: ConstantsSendCode.SEND_CODE_SUCCESS,
  };
}

export function sendCodeReset() {
    return {
      type: ConstantsSendCode.SEND_CODE_RESET,
    };
  }

export function sendCodeFail(error: string) {
  return {
    type: ConstantsSendCode.SEND_CODE_FAIL,
    payload: {
      error,
    },
  };
}