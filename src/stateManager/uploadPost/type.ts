export interface UploadPostState {
  error: string;
  isFetching: boolean;
  response: boolean;
}

export enum ConstantsUploadPost {
  UPLOAD_POST_REQUEST = 'UPLOAD_POST_REQUEST',
  UPLOAD_POST_SUCCESS = 'UPLOAD_POST_SUCCESS',
  UPLOAD_POST_FAIL = 'UPLOAD_POST_FAIL',
  UPLOAD_POST_RESET = 'UPLOAD_POST_RESET',
}

interface UploadPostAction {
  type: ConstantsUploadPost;
  payload: UploadPostState;
}

export type UploadPostActionTypes = UploadPostAction;
