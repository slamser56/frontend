export interface SystemState {
  connected: boolean;
}

export enum ConstantsSystem {
  CONNECT_SUCCESS = 'CONNECT_SUCCESS',
  CONNECT_FAIL = 'CONNECT_FAIL',
}

interface SystemAction {
  type: ConstantsSystem;
  payload: SystemState;
}

export type SystemActionTypes = SystemAction;
