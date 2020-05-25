import { SystemState, SystemActionTypes, ConstantsSystem } from './type';

const initialState: SystemState = {
  language: 'en',
  connected: false,
};

function system(state = initialState, action: SystemActionTypes): SystemState {
  switch (action.type) {
    case ConstantsSystem.CONNECT_SUCCESS:
    case ConstantsSystem.SET_LANGUAGE:
      return {
        ...state,
        ...(action.payload || {}),
      };
    case ConstantsSystem.CONNECT_FAIL:
      return initialState;
    default:
      return { ...state };
  }
}

export default system;
