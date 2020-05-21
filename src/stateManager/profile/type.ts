export interface ProfileState {
  avatar: string;
}

export enum ConstantsProfile {
  GET_AVATAR_SUCCESS = 'GET_AVATAR_SUCCESS',
  GET_AVATAR_FAIL = 'GET_AVATAR_FAIL',
  UPLOAD_AVATAR_SUCCESS = 'UPLOAD_AVATAR_SUCCESS',
  UPLOAD_AVATAR_FAIL = 'UPLOAD_AVATAR_FAIL',
}

interface ProfileAction {
  type:
  | ConstantsProfile.GET_AVATAR_SUCCESS
  | ConstantsProfile.GET_AVATAR_FAIL
  | ConstantsProfile.UPLOAD_AVATAR_SUCCESS
  | ConstantsProfile.UPLOAD_AVATAR_FAIL;
  payload: ProfileState;
}

export type ProfileActionTypes = ProfileAction;
