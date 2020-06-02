export interface ProfileState {
  avatar: string;
}

export enum ConstantsProfile {
  GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS',
  GET_PROFILE_FAIL = 'GET_PROFILE_FAIL',
  UPLOAD_AVATAR_SUCCESS = 'UPLOAD_AVATAR_SUCCESS',
  UPLOAD_AVATAR_FAIL = 'UPLOAD_AVATAR_FAIL',
}

interface ProfileAction {
  type: ConstantsProfile;
  payload: ProfileState;
}

export type ProfileActionTypes = ProfileAction;
