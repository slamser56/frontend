import { ConstantsSystem } from './type';

export function connectSuccess() {
  return {
    type: ConstantsSystem.CONNECT_SUCCESS,
    payload: {
      connected: true,
    },
  };
}

export function connectFail() {
  return {
    type: ConstantsSystem.CONNECT_FAIL,
  };
}

export function setLanguageAction(language: string) {
  return {
    type: ConstantsSystem.SET_LANGUAGE,
    payload: {
      language,
    },
  };
}
