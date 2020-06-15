import { SystemState, SystemActionTypes, ConstantsSystem } from './type';

const initialState: SystemState = {
  language: 'en',
  connected: false,
};

function system(state = initialState, action: SystemActionTypes): SystemState {
  switch (action.type) {
    case ConstantsSystem.CONNECT_SUCCESS:
      return {
        ...state,
        connected: true,
      };
    case ConstantsSystem.SET_LANGUAGE:
      return {
        ...state,
        ...(action.payload || {}),
      };
    case ConstantsSystem.CONNECT_FAIL:
      return {
        ...state,
        connected: false,
      };
    default:
      return { ...state };
  }
}

export default system;
