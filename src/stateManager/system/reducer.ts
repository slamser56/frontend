import { SystemState, SystemActionTypes, ConstantsSystem } from './type';

const initialState: SystemState = {
  connected: false,
};

function system(
  state = initialState,
  action: SystemActionTypes,
): SystemState {
  switch (action.type) {
    case ConstantsSystem.CONNECT_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case ConstantsSystem.CONNECT_FAIL:
      return initialState;
    default:
      return { ...state };
  }
}

export default system;
