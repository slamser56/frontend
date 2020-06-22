import { UserState } from '../user/type';
import { SystemState } from '../system/type';
import { ProfileState } from '../profile/type';
import { PostsState } from '../posts/type';
import { SubscriptionsState } from '../subscriptions/type';

export interface ListAppState {
  user: UserState;
  system: SystemState;
  profile: ProfileState;
  posts: PostsState;
  subscriptions: SubscriptionsState;
}
