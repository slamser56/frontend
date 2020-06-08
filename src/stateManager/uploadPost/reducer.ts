import { UploadPostActionTypes, UploadPostState, ConstantsUploadPost } from './type';

const initialState: UploadPostState = {
  error: '',
  response: false,
  isFetching: false,
};

export default function post(state = initialState, action: UploadPostActionTypes): UploadPostState {
  switch (action.type) {
    case ConstantsUploadPost.UPLOAD_POST_REQUEST:
      return { ...state, isFetching: true, error: '' };
    case ConstantsUploadPost.UPLOAD_POST_SUCCESS:
      return { ...state, isFetching: false, response: true };
    case ConstantsUploadPost.UPLOAD_POST_FAIL:
      return { ...state, ...(action.payload || {}), isFetching: false };
    case ConstantsUploadPost.UPLOAD_POST_RESET:
      return initialState;
    default:
      return { ...state };
  }
}
