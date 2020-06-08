import { UserActionType, UserState, ConstantsUser } from './type';

const initialState: UserState = {
  phoneNumber: 0,
  token: '',
};

export default function phone(state = initialState, action: UserActionType): UserState {
  switch (action.type) {
    case ConstantsUser.VERIFY_TOKEN_SUCCESS:
      return { ...state };
    case ConstantsUser.VERIFY_TOKEN_FAIL:
      return { ...state, token: '' };
    case ConstantsUser.SET_PHONE_NUMBER:
    case ConstantsUser.SET_TOKEN:
      return { ...state, ...(action.payload || {}) };
    case ConstantsUser.LOG_OUT:
      return initialState;
    default:
      return state;
  }
}
