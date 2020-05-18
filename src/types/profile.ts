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
  GET_IMAGE_OK = 'GET_IMAGE_OK',
  GET_IMAGE_BAD = 'GET_IMAGE_BAD',
  UPLOAD_IMAGE_OK = 'UPLOAD_IMAGE_OK',
  UPLOAD_IMAGE_BAD = 'UPLOAD_IMAGE_BAD',
}

export enum ConstantsProfile {
  GET_AVATAR_OK = 'GET_AVATAR_OK',
  GET_AVATAR_BAD = 'GET_AVATAR_BAD',
  UPLOAD_AVATAR_OK = 'UPLOAD_AVATAR_OK',
  UPLOAD_AVATAR_BAD = 'UPLOAD_AVATAR_BAD',
}

interface ImageAction {
  type:
    | ConstantsImage.GET_IMAGE_OK
    | ConstantsImage.GET_IMAGE_BAD
    | ConstantsImage.UPLOAD_IMAGE_OK
    | ConstantsImage.UPLOAD_IMAGE_BAD;
  payload: Image;
}

interface ProfileAction {
  type:
    | ConstantsProfile.GET_AVATAR_OK
    | ConstantsProfile.GET_AVATAR_BAD
    | ConstantsProfile.UPLOAD_AVATAR_OK
    | ConstantsProfile.UPLOAD_AVATAR_BAD;
  payload: ProfileState;
}

export type ProfileActionTypes = ProfileAction;
