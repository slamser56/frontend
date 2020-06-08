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

export function setPhoneNumber(phoneNumber: number) {
  return {
    type: ConstantsUser.SET_PHONE_NUMBER,
    payload: {
      phoneNumber,
    },
  };
}

export function setToken(token: string) {
  return {
    type: ConstantsUser.SET_TOKEN,
    payload: {
      token,
    },
  };
}
