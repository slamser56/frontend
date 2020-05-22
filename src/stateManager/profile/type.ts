export interface ProfileState {
  avatar: string;
}

export enum ConstantsProfile {
  DOWNLOAD_AVATAR_SUCCESS = 'DOWNLOAD_AVATAR_SUCCESS',
  DOWNLOAD_AVATAR_FAIL = 'DOWNLOAD_AVATAR_FAIL',
  UPLOAD_AVATAR_SUCCESS = 'UPLOAD_AVATAR_SUCCESS',
  UPLOAD_AVATAR_FAIL = 'UPLOAD_AVATAR_FAIL',
}

interface ProfileAction {
  type: ConstantsProfile;
  payload: ProfileState;
}

export type ProfileActionTypes = ProfileAction;
