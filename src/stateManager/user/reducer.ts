import { UserActionType, UserState, ConstantsUser } from './type';

const initialState: UserState = {
  phoneNumber: 0,
  token: '',
  isFetching: false,
};

export default function user(state = initialState, action: UserActionType): UserState {
  switch (action.type) {
    case ConstantsUser.VERIFY_CODE_REQUEST:
    case ConstantsUser.LOG_IN_REQUEST:
    case ConstantsUser.SEND_CODE_REQUEST:
      return { ...state, isFetching: true };
    case ConstantsUser.VERIFY_CODE_SUCCESS:
    case ConstantsUser.SEND_CODE_SUCCESS:
    case ConstantsUser.LOG_IN_SUCCESS:
    case ConstantsUser.VERIFY_TOKEN_SUCCESS:
      return { ...state, ...(action.payload || {}), isFetching: false };
    case ConstantsUser.VERIFY_CODE_FAIL:
    case ConstantsUser.LOG_IN_FAIL:
    case ConstantsUser.SEND_CODE_FAIL:
      return { ...state, isFetching: false };
    case ConstantsUser.VERIFY_TOKEN_FAIL:
      return { ...state, token: '' };
    case ConstantsUser.LOG_OUT:
      return initialState;
    default:
      return state;
  }
}
