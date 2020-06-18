import { PostActionTypes, PostsState, ConstantPost, ConstantPosts } from './type';

const initialState: PostsState = {
  posts: [],
  isFetching: false,
};

export default function post(state = initialState, action: PostActionTypes): PostsState {
  switch (action.type) {
    case ConstantPosts.UPLOAD_POST_REQUEST:
    case ConstantPosts.GET_POSTS_REQUEST:
    case ConstantPosts.DELETE_POST_REQUEST:
      return { ...state, isFetching: true };
    case ConstantPosts.GET_POSTS_SUCCESS:
      return { ...state, ...(action.payload || {}), isFetching: false };
    case ConstantPost.UPLOAD_POST_SUCCESS:
      return { ...state, posts: [{ ...(action.payload || {}) }, ...state.posts], isFetching: false };
    case ConstantPost.DELETE_POST_SUCCESS:
      return { ...state, posts: state.posts.filter(item => item.postId !== action.payload.postId), isFetching: false };
    case ConstantPosts.UPLOAD_POST_FAIL:
    case ConstantPosts.DELETE_POST_FAIL:
      return { ...state, isFetching: false };
    case ConstantPosts.GET_POSTS_FAIL:
    case ConstantPosts.POSTS_RESET:
      return initialState;
    default:
      return { ...state };
  }
}
