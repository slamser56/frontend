export interface Subscription {
  createdAt: string;
  userId: string;
  phoneNumber: number;
}

export interface SubscriptionsState {
  subscriptions: Subscription[];
  isFetching: boolean;
}

export enum ConstantSubscriptions {
  SUBSCRIBE_REQUEST = 'SUBSCRIBE_REQUEST',
  SUBSCRIBE_FAIL = 'SUBSCRIBE_FAIL',
  UNSUBSCRIBE_REQUEST = 'UNSUBSCRIBE_REQUEST',
  UNSUBSCRIBE_FAIL = 'UNSUBSCRIBE_FAIL',
  GET_SUBSCRIPTIONS_REQUEST = 'GET_SUBSCRIPTIONS_REQUEST',
  GET_SUBSCRIPTIONS_SUCCESS = 'GET_SUBSCRIPTIONS_SUCCESS',
  GET_SUBSCRIPTIONS_FAIL = 'GET_SUBSCRIPTIONS_FAIL',
  SUBSCRIPTIONS_RESET = 'SUBSCRIPTIONS_RESET',
}

export enum ConstantSubscription {
  SUBSCRIBE_SUCCESS = 'SUBSCRIBE_SUCCESS',
  UNSUBSCRIBE_SUCCESS = 'UNSUBSCRIBE_SUCCESS',
}

type SubscriptionsActionType = {
  type: ConstantSubscriptions;
  payload: SubscriptionsState;
};

type SubscriptionActionType = {
  type: ConstantSubscription;
  payload: Subscription;
};

export type SubscriptionActionTypes = SubscriptionActionType | SubscriptionsActionType;
