import { SystemState, SystemActionTypes, ConstantsSystem } from './type';

const initialStateSystem: SystemState = {
  connected: false,
};

function systemReducer(
  state = initialStateSystem,
  action: SystemActionTypes,
): SystemState {
  switch (action.type) {
    case ConstantsSystem.CONNECT_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case ConstantsSystem.CONNECT_FAIL:
      return initialStateSystem;
    default:
      return { ...state };
  }
}

export default systemReducer;
