export interface PostState {
  text: string;
  user: string;
  date: string;
  images: [];
}

export enum ConstantsPost {
  UPLOAD_POST_SUCCESS = 'UPLOAD_POST_SUCCESS',
  UPLOAD_POST_FAIL = 'UPLOAD_POST_FAIL',
}

interface PostAction {
  type: ConstantsPost;
  payload: PostState;
}

export type PostActionTypes = PostAction;
