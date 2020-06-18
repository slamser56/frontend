export interface Post {
  text: string;
  date: string;
}

export interface PostsState {
  posts: Post[];
  isFetching: boolean;
}

export enum ConstantPosts {
  UPLOAD_POST_REQUEST = 'UPLOAD_POST_REQUEST',
  UPLOAD_POST_FAIL = 'UPLOAD_POST_FAIL',
  DELETE_POST_REQUEST= 'DELETE_POST_REQUEST',
  DELETE_POST_FAIL= 'DELETE_POST_FAIL',
  DELETE_POST_SUCCESS= 'DELETE_POST_SUCCESS',
  GET_POSTS_REQUEST = 'GET_POSTS_REQUEST',
  GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS',
  GET_POSTS_FAIL = 'GET_POSTS_FAIL',
  POSTS_RESET = 'POSTS_RESET',
}

export enum ConstantPost {
  UPLOAD_POST_SUCCESS = 'UPLOAD_POST_SUCCESS',
}

type PostsActionType = {
  type: ConstantPosts;
  payload: PostsState;
};

type PostActionType = {
  type: ConstantPost;
  payload: Post;
};

export type PostActionTypes = PostActionType | PostsActionType;
