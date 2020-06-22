import { AxiosResponse } from 'axios';
import { ConstantSubscription, ConstantSubscriptions } from './type';

export function getSubscriptionsRequest() {
  return {
    type: ConstantSubscriptions.GET_SUBSCRIPTIONS_REQUEST,
  };
}

export function getSubscriptionsFail() {
  return {
    type: ConstantSubscriptions.GET_SUBSCRIPTIONS_FAIL,
  };
}

export function subscriptionsReset() {
  return {
    type: ConstantSubscriptions.SUBSCRIPTIONS_RESET,
  };
}

export function getSubscriptionsSuccess(subscriptions: AxiosResponse) {
  return {
    type: ConstantSubscriptions.GET_SUBSCRIPTIONS_SUCCESS,
    payload: {
      subscriptions,
    },
  };
}

export function subscribeRequest() {
  return {
    type: ConstantSubscriptions.SUBSCRIBE_REQUEST,
  };
}

export function subscribeSuccess(userId: string, createdAt: string, phoneNumber: number) {
  return {
    type: ConstantSubscription.SUBSCRIBE_SUCCESS,
    payload: {
      createdAt,
      userId,
      phoneNumber,
    },
  };
}

export function subscribeFail() {
  return {
    type: ConstantSubscriptions.SUBSCRIBE_FAIL,
  };
}

export function unsubscribeRequest() {
  return {
    type: ConstantSubscriptions.UNSUBSCRIBE_REQUEST,
  };
}

export function unsubscribeFail() {
  return {
    type: ConstantSubscriptions.UNSUBSCRIBE_FAIL,
  };
}

export function unsubscribeSuccess(userId: string) {
  return {
    type: ConstantSubscription.UNSUBSCRIBE_SUCCESS,
    payload: {
      userId,
    },
  };
}
