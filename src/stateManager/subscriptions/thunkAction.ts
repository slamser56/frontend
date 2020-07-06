import Toast from 'react-native-root-toast';
import api from '../../api';
import { AppThunk } from '../thunkType';
import apiConstants from '../../api/constants';
import * as action from './action';

export const getSubscriptions = (): AppThunk => async (dispatch): Promise<void> => {
  try {
    dispatch(action.getSubscriptionsRequest());
    const subscriptions = await api.get(apiConstants.SUBSCRIPTION);
    dispatch(action.getSubscriptionsSuccess(subscriptions));
  } catch (error) {
    dispatch(action.getSubscriptionsFail());
    Toast.show(error.response?.data);
  }
};

export const subscribe = (user: string, createdAt: string, phoneNumber: number): AppThunk => async (
  dispatch,
): Promise<void> => {
  try {
    dispatch(action.subscribeRequest());
    await api.post(apiConstants.SUBSCRIPTION, { anotherUserId: user });
    dispatch(action.subscribeSuccess(user, createdAt, phoneNumber));
  } catch (error) {
    dispatch(action.subscribeFail());
    Toast.show(error.response?.data);
  }
};

export const unsubscribe = (user: string): AppThunk => async (dispatch): Promise<void> => {
  try {
    dispatch(action.unsubscribeRequest());
    await api.delete(apiConstants.SUBSCRIPTION, { data: { anotherUserId: user } });
    dispatch(action.unsubscribeSuccess(user));
  } catch (error) {
    dispatch(action.unsubscribeFail());
    Toast.show(error.response?.data);
  }
};
