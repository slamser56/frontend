import { ConstantsPosts, Post } from './type';

export function getPostsRequest() {
  return {
    type: ConstantsPosts.GET_POSTS_REQUEST,
  };
}

export function getPostsFail() {
  return {
    type: ConstantsPosts.GET_POSTS_FAIL,
  };
}

export function postsReset() {
  return {
    type: ConstantsPosts.POSTS_RESET,
  };
}

export function getPostsSuccess(posts: Post[]) {
  return {
    type: ConstantsPosts.GET_POSTS_SUCCESS,
    payload: {
      posts,
    },
  };
}
