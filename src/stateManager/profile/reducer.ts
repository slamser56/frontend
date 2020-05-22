import { ProfileState, ProfileActionTypes, ConstantsProfile } from './type';

const initialState: ProfileState = {
  avatar: '',
};

export default function profile(state = initialState, action: ProfileActionTypes): ProfileState {
  switch (action.type) {
    case ConstantsProfile.DOWNLOAD_AVATAR_SUCCESS:
    case ConstantsProfile.UPLOAD_AVATAR_FAIL:
    case ConstantsProfile.UPLOAD_AVATAR_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case ConstantsProfile.DOWNLOAD_AVATAR_FAIL:
      return initialState;
    default:
      return { ...state };
  }
}
