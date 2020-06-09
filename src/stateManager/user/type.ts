export interface UserState {
  phoneNumber: number;
  token: string;
  isFetching: boolean;
}

export enum ConstantsUser {
  SEND_CODE_REQUEST = 'SEND_CODE_REQUEST',
  SEND_CODE_SUCCESS = 'SEND_CODE_SUCCESS',
  SEND_CODE_FAIL = 'SEND_CODE_FAIL',
  VERIFY_CODE_REQUEST = 'VERIFY_CODE_REQUEST',
  VERIFY_CODE_SUCCESS = 'VERIFY_CODE_SUCCESS',
  VERIFY_CODE_FAIL = 'VERIFY_CODE_FAIL',
  VERIFY_TOKEN_SUCCESS = 'VERIFY_TOKEN_SUCCESS',
  VERIFY_TOKEN_FAIL = 'VERIFY_TOKEN_FAIL',
  LOG_OUT = 'LOG_OUT',
}

export type UserActionType = {
  type: ConstantsUser;
  payload: UserState;
};
