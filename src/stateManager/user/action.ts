import { ConstantsUser } from './type';

export function logOutAction() {
  return {
    type: ConstantsUser.LOG_OUT,
  };
}

export function verifyTokenFail() {
  return {
    type: ConstantsUser.VERIFY_TOKEN_FAIL,
  };
}

export function verifyTokenSuccess() {
  return {
    type: ConstantsUser.VERIFY_TOKEN_SUCCESS,
  };
}

export function sendCodeRequest() {
  return {
    type: ConstantsUser.SEND_CODE_REQUEST,
  };
}

export function sendCodeSuccess(phoneNumber: number) {
  return {
    type: ConstantsUser.SEND_CODE_SUCCESS,
    payload: {
      phoneNumber,
    },
  };
}

export function sendCodeFail() {
  return {
    type: ConstantsUser.SEND_CODE_FAIL,
  };
}

export function verifyCodeRequest() {
  return {
    type: ConstantsUser.VERIFY_CODE_REQUEST,
  };
}

export function verifyCodeSuccess(token: string) {
  return {
    type: ConstantsUser.VERIFY_CODE_SUCCESS,
    payload: {
      token,
    },
  };
}

export function verifyCodeFail() {
  return {
    type: ConstantsUser.VERIFY_CODE_FAIL,
  };
}
