import { ConstantsPhone } from './type';

export function verifyCodeFail(errorMessage: string) {
  return {
    type: ConstantsPhone.VERIFY_CODE_FAIL,
    payload: {
      errorMessage,
    },
  };
}

export function verifyCodeSuccess(token: string) {
  return {
    type: ConstantsPhone.VERIFY_CODE_SUCCESS,
    payload: {
      token,
      errorMessage: '',
    },
  };
}

export function sendCodeSuccess(phoneNumber: number) {
  return {
    type: ConstantsPhone.SEND_CODE_SUCCESS,
    payload: {
      phoneNumber,
      errorMessage: '',
    },
  };
}

export function sendCodeFail(errorMessage: string) {
  return {
    type: ConstantsPhone.SEND_CODE_FAIL,
    payload: {
      errorMessage,
    },
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

export function resetErrorMessage() {
  return {
    type: ConstantsPhone.RESET_ERROR_MESSAGE,
    payload: {
      errorMessage: '',
    },
  };
}
