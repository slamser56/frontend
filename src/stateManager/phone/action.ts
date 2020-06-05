import { ConstantsPhone } from './type';

export function verifyCodeRequest() {
  return {
    type: ConstantsPhone.VERIFY_CODE_REQUEST,
  };
}

export function verifyCodeFail(error: string) {
  return {
    type: ConstantsPhone.VERIFY_CODE_FAIL,
    payload: {
      error,
    },
  };
}

export function verifyCodeSuccess(token: string) {
  return {
    type: ConstantsPhone.VERIFY_CODE_SUCCESS,
    payload: {
      token,
    },
  };
}

export function sendCodeRequest() {
  return {
    type: ConstantsPhone.SEND_CODE_REQUEST,
  };
}

export function sendCodeSuccess(phoneNumber: number) {
  return {
    type: ConstantsPhone.SEND_CODE_SUCCESS,
    payload: {
      phoneNumber,
    },
  };
}

export function sendCodeFail(error: string) {
  return {
    type: ConstantsPhone.SEND_CODE_FAIL,
    payload: {
      error,
    },
  };
}

export function verifyTokenRequest() {
  return {
    type: ConstantsPhone.VERIFY_TOKEN_REQUEST,
  };
}

export function verifyTokenSuccess() {
  return {
    type: ConstantsPhone.VERIFY_TOKEN_SUCCESS,
  };
}

export function verifyTokenFail() {
  return {
    type: ConstantsPhone.VERIFY_TOKEN_FAIL,
  };
}

export function logOutAction() {
  return {
    type: ConstantsPhone.LOG_OUT,
  };
}

export function resetAction() {
  return {
    type: ConstantsPhone.RESET,
  };
}
