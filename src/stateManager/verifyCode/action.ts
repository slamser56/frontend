import { ConstantsVerifyCode } from './type';

export function verifyCodeRequest() {
  return {
    type: ConstantsVerifyCode.VERIFY_CODE_REQUEST,
  };
}

export function verifyCodeSuccess() {
  return {
    type: ConstantsVerifyCode.VERIFY_CODE_SUCCESS,
  };
}

export function verifyCodeReset() {
    return {
      type: ConstantsVerifyCode.VERIFY_CODE_RESET,
    };
  }

export function verifyCodeFail(error: string) {
  return {
    type: ConstantsVerifyCode.VERIFY_CODE_FAIL,
    payload: {
      error,
    },
  };
}