export interface User {
  createdAt: string;
  _id: string;
  phoneNumber: number;
}

export interface FindUsersState {
  users: User[];
  isFetching: boolean;
}

export enum ConstantFindUsers {
  FIND_USERS_REQUEST = 'FIND_USERS_REQUEST',
  FIND_USERS_FAIL = 'FIND_USERS_FAIL',
  FIND_USERS_SUCCESS = 'FIND_USERS_SUCCESS',
  FIND_USERS_RESET = 'FIND_USERS_RESET',
}

export type FindUsersActionType = {
  type: ConstantFindUsers;
  payload: FindUsersState;
};
