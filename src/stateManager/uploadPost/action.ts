import { ConstantsUploadPost } from './type';

export function uploadPostRequest() {
  return {
    type: ConstantsUploadPost.UPLOAD_POST_REQUEST,
  };
}

export function uploadPostSuccess() {
  return {
    type: ConstantsUploadPost.UPLOAD_POST_SUCCESS,
  };
}

export function uploadPostReset() {
    return {
      type: ConstantsUploadPost.UPLOAD_POST_RESET,
    };
  }

export function uploadPostFail(error: string) {
  return {
    type: ConstantsUploadPost.UPLOAD_POST_FAIL,
    payload: {
      error,
    },
  };
}


