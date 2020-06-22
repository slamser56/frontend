import { createSelector } from 'reselect';
import { ListAppState } from '../listTypes';

export const selectUser = createSelector(
  (state: ListAppState) => state.user,
  user => user,
);

export const selectProfile = createSelector(
  (state: ListAppState) => state.profile,
  profile => profile,
);

export const selectPosts = createSelector(
  (state: ListAppState) => state.posts,
  posts => posts,
);

export const selectSubscriptions = createSelector(
  (state: ListAppState) => state.subscriptions,
  subscriptions => subscriptions,
);
