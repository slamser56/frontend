import { ProfileState, ProfileActionTypes, ConstantsProfile } from './type';

const initialState: ProfileState = {
  avatar: '',
  phoneNumber: '',
};

export default function profile(state = initialState, action: ProfileActionTypes): ProfileState {
  switch (action.type) {
    case ConstantsProfile.GET_PROFILE_SUCCESS:
    case ConstantsProfile.UPLOAD_AVATAR_FAIL:
    case ConstantsProfile.UPLOAD_AVATAR_SUCCESS:
      return {
        ...state,
        ...(action.payload || {}),
      };
    case ConstantsProfile.GET_PROFILE_FAIL:
      return initialState;
    default:
      return { ...state };
  }
}
