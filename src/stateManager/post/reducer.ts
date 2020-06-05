import { PostActionTypes, PostState, ConstantsPost } from './type';

const initialState: PostState = {
  text: '',
  user: '',
  date: '',
  images: [],
};

export default function post(state = initialState, action: PostActionTypes): PostState {
  switch (action.type) {
    case ConstantsPost.UPLOAD_POST_SUCCESS:
    case ConstantsPost.UPLOAD_POST_FAIL:
      return {
        ...state,
        ...(action.payload || {}),
      };
    default:
      return { ...state };
  }
}
