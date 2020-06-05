export interface SystemState {
  connected: boolean;
  language: string;
}

export enum ConstantsSystem {
  CONNECT_REQUEST = 'CONNECT_REQUEST',
  CONNECT_SUCCESS = 'CONNECT_SUCCESS',
  CONNECT_FAIL = 'CONNECT_FAIL',
  SET_LANGUAGE = 'SET_LANGUAGE',
}

interface SystemAction {
  type: ConstantsSystem;
  payload: SystemState;
}

export type SystemActionTypes = SystemAction;
