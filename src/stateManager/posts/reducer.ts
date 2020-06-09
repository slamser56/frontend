import { ConstantsPosts, PostsActionTypes, PostsState } from './type';

const initialState: PostsState = {
  posts: [],
  isFetching: false,
};

export default function post(state = initialState, action: PostsActionTypes): PostsState {
  switch (action.type) {
    case ConstantsPosts.UPLOAD_POST_REQUEST:
    case ConstantsPosts.GET_POSTS_REQUEST:
      return { ...state, isFetching: true };
    case ConstantsPosts.UPLOAD_POST_SUCCESS:
    case ConstantsPosts.GET_POSTS_SUCCESS:
      return { ...state, ...(action.payload || {}), isFetching: false };
    case ConstantsPosts.UPLOAD_POST_FAIL:
    case ConstantsPosts.GET_POSTS_FAIL:
      return { ...state, isFetching: false };
    case ConstantsPosts.POSTS_RESET:
      return initialState;
    default:
      return { ...state };
  }
}
