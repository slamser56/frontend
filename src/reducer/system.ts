import { SystemState, SystemActionTypes, ConstantsSystem } from '../types';

const initialStateSystem: SystemState = {
  connected: false,
};

export function systemReducer(
  state = initialStateSystem,
  action: SystemActionTypes,
): SystemState {
  switch (action.type) {
    case ConstantsSystem.SUCCESS_CONNECT:
      return {
        ...state,
        ...action.payload,
      };
    case ConstantsSystem.FAIL_CONNECT:
      return initialStateSystem;
    default:
      return { ...state };
  }
}
