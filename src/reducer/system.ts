import { SystemState, SystemActionTypes, ConstantsSystem } from '../types';

const initialStateSystem: SystemState = {
  connected: false,
};

export function systemReducer(
  state = initialStateSystem,
  action: SystemActionTypes,
): SystemState {
  switch (action.type) {
    case ConstantsSystem.CHECK_CONNECT:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return { ...state };
  }
}
