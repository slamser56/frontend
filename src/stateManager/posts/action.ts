import { AxiosResponse } from 'axios';
import { ConstantPost, ConstantPosts } from './type';

export function getPostsRequest() {
  return {
    type: ConstantPosts.GET_POSTS_REQUEST,
  };
}

export function getPostsFail() {
  return {
    type: ConstantPosts.GET_POSTS_FAIL,
  };
}

export function postsReset() {
  return {
    type: ConstantPosts.POSTS_RESET,
  };
}

export function getPostsSuccess(posts: AxiosResponse) {
  return {
    type: ConstantPosts.GET_POSTS_SUCCESS,
    payload: {
      posts,
    },
  };
}

export function uploadPostRequest() {
  return {
    type: ConstantPosts.UPLOAD_POST_REQUEST,
  };
}

export function uploadPostSuccess(text: string, createdAt: string, postId: string, phoneNumber: number) {
  return {
    type: ConstantPost.UPLOAD_POST_SUCCESS,
    payload: {
      text,
      createdAt,
      postId,
      phoneNumber,
    },
  };
}

export function uploadPostFail() {
  return {
    type: ConstantPosts.UPLOAD_POST_FAIL,
  };
}
