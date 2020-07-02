import { ConstantFindUsers, FindUsersState, FindUsersActionType } from './type';

const initialState: FindUsersState = {
  users: [],
  isFetching: false,
};

export default function findUsers(state = initialState, action: FindUsersActionType): FindUsersState {
  switch (action.type) {
    case ConstantFindUsers.FIND_USERS_REQUEST:
      return { ...state, isFetching: true };
    case ConstantFindUsers.FIND_USERS_SUCCESS:
      return { ...state, ...(action.payload || {}), isFetching: false };
    case ConstantFindUsers.FIND_USERS_FAIL:
    case ConstantFindUsers.FIND_USERS_RESET:
      return initialState;
    default:
      return { ...state };
  }
}
