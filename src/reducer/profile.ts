import { ProfileState, ProfileActionTypes, ConstantsProfile } from '../types';

const initialStateProfile: ProfileState = {
  avatar: '',
};

export function profileReducer(
  state = initialStateProfile,
  action: ProfileActionTypes,
): ProfileState {
  switch (action.type) {
    case ConstantsProfile.GET_AVATAR_OK:
    case ConstantsProfile.UPLOAD_AVATAR_BAD:
    case ConstantsProfile.UPLOAD_AVATAR_OK:
      return {
        ...state,
        ...action.payload,
      };
    case ConstantsProfile.GET_AVATAR_BAD:
      return initialStateProfile;
    default:
      return { ...state };
  }
}
