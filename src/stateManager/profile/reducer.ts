import { ProfileState, ProfileActionTypes, ConstantsProfile } from './type';

const initialStateProfile: ProfileState = {
  avatar: '',
};

function profileReducer(
  state = initialStateProfile,
  action: ProfileActionTypes,
): ProfileState {
  switch (action.type) {
    case ConstantsProfile.GET_AVATAR_SUCCESS:
    case ConstantsProfile.UPLOAD_AVATAR_FAIL:
    case ConstantsProfile.UPLOAD_AVATAR_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case ConstantsProfile.GET_AVATAR_FAIL:
      return initialStateProfile;
    default:
      return { ...state };
  }
}

export default profileReducer;
