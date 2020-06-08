export interface Post {
  text: string;
  date: string;
}

export interface PostsState {
  posts: Post[];
  error: string;
  isFetching: boolean;
}

export enum ConstantsPosts {
  GET_POSTS_REQUEST = 'GET_POSTS_REQUEST',
  GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS',
  GET_POSTS_FAIL = 'GET_POSTS_FAIL',
  POSTS_RESET = 'POSTS_RESET',
}

export type PostsActionTypes = {
  type: ConstantsPosts;
  payload: PostsState;
};
