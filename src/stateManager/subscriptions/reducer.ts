import { SubscriptionActionTypes, SubscriptionsState, ConstantSubscription, ConstantSubscriptions } from './type';

const initialState: SubscriptionsState = {
  subscriptions: [],
  isFetching: false,
};

export default function subscriptions(state = initialState, action: SubscriptionActionTypes): SubscriptionsState {
  switch (action.type) {
    case ConstantSubscriptions.GET_SUBSCRIPTIONS_REQUEST:
    case ConstantSubscriptions.SUBSCRIBE_REQUEST:
    case ConstantSubscriptions.UNSUBSCRIBE_REQUEST:
      return { ...state, isFetching: true };
    case ConstantSubscriptions.GET_SUBSCRIPTIONS_SUCCESS:
      return { ...state, ...(action.payload || {}), isFetching: false };
    case ConstantSubscription.SUBSCRIBE_SUCCESS:
      return { ...state, subscriptions: [{ ...(action.payload || {}) }, ...state.subscriptions], isFetching: false };
    case ConstantSubscription.UNSUBSCRIBE_SUCCESS:
      return {
        ...state,
        subscriptions: state.subscriptions.filter(item => item.userId !== action.payload.userId),
        isFetching: false,
      };
    case ConstantSubscriptions.UNSUBSCRIBE_FAIL:
    case ConstantSubscriptions.SUBSCRIBE_FAIL:
      return { ...state, isFetching: false };
    case ConstantSubscriptions.GET_SUBSCRIPTIONS_FAIL:
    case ConstantSubscriptions.SUBSCRIPTIONS_RESET:
      return initialState;
    default:
      return { ...state };
  }
}
