import { AxiosResponse } from 'axios';
import { ConstantFindUsers } from './type';

export function findUsersRequest() {
  return {
    type: ConstantFindUsers.FIND_USERS_REQUEST,
  };
}

export function findUsersFail() {
  return {
    type: ConstantFindUsers.FIND_USERS_FAIL,
  };
}

export function findUsersReset() {
  return {
    type: ConstantFindUsers.FIND_USERS_RESET,
  };
}

export function findUsersSuccess(users: AxiosResponse) {
  return {
    type: ConstantFindUsers.FIND_USERS_SUCCESS,
    payload: {
      users,
    },
  };
}
