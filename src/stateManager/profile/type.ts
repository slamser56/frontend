export interface ProfileState {
  avatar: string;
}

export interface Image {
  image: string;
}

export interface ProfileImagesState {
  images: Image[];
}

export enum ConstantsImage {
  GET_IMAGE_SUCCESS = 'GET_IMAGE_SUCCESS',
  GET_IMAGE_FAIL = 'GET_IMAGE_BAD',
  UPLOAD_IMAGE_SUCCESS = 'UPLOAD_IMAGE_SUCCESS',
  UPLOAD_IMAGE_FAIL = 'UPLOAD_IMAGE_FAIL',
}

export enum ConstantsProfile {
  GET_AVATAR_SUCCESS = 'GET_AVATAR_SUCCESS',
  GET_AVATAR_FAIL = 'GET_AVATAR_FAIL',
  UPLOAD_AVATAR_SUCCESS = 'UPLOAD_AVATAR_SUCCESS',
  UPLOAD_AVATAR_FAIL = 'UPLOAD_AVATAR_FAIL',
}

interface ImageAction {
  type:
  | ConstantsImage.GET_IMAGE_SUCCESS
  | ConstantsImage.GET_IMAGE_FAIL
  | ConstantsImage.UPLOAD_IMAGE_SUCCESS
  | ConstantsImage.UPLOAD_IMAGE_FAIL;
  payload: Image;
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
