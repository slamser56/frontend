import { ConstantsProfile } from './type';

export function upoadAvatarSuccess(avatar: string) {
  return {
    type: ConstantsProfile.UPLOAD_AVATAR_SUCCESS,
    payload: {
      avatar,
    },
  };
}

export function upoadAvatarFail() {
  return {
    type: ConstantsProfile.UPLOAD_AVATAR_FAIL,
  };
}

export function getProfileSuccess(avatar: string, phoneNumber: string) {
  return {
    type: ConstantsProfile.GET_PROFILE_SUCCESS,
    payload: {
      avatar,
      phoneNumber,
    },
  };
}

export function getProfileFail() {
  return {
    type: ConstantsProfile.GET_PROFILE_FAIL,
  };
}
