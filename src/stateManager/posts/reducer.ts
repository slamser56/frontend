import { ConstantsPosts, PostsActionTypes, PostsState } from './type';

const initialState: PostsState = {
  posts: [],
  error: '',
  isFetching: false,
};

export default function post(state = initialState, action: PostsActionTypes): PostsState {
  switch (action.type) {
    case ConstantsPosts.GET_POSTS_REQUEST:
      return { ...state, isFetching: true, error: '' };
    case ConstantsPosts.GET_POSTS_SUCCESS:
      return { ...state, ...(action.payload || {}), isFetching: false };
    case ConstantsPosts.GET_POSTS_FAIL:
      return { ...state, ...(action.payload || {}), isFetching: false };
    case ConstantsPosts.POSTS_RESET:
      return initialState;
    default:
      return { ...state };
  }
}
