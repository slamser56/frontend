export interface UserState {
  phoneNumber: number;
  token: string;
}

export enum ConstantsUser {
  VERIFY_TOKEN_SUCCESS = 'VERIFY_TOKEN_SUCCESS',
  VERIFY_TOKEN_FAIL = 'VERIFY_TOKEN_FAIL',
  SET_TOKEN = 'SET_TOKEN',
  SET_PHONE_NUMBER = 'SET_PHONE_NUMBER',
  LOG_OUT = 'LOG_OUT',
}

export type UserActionType = {
  type: ConstantsUser;
  payload: UserState;
};
