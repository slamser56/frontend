export interface SystemState {
  connected: boolean;
}

export enum ConstantsSystem {
  SUCCESS_CONNECT = 'SUCCESS_CONNECT',
  FAIL_CONNECT = 'FAIL_CONNECT',
}

interface SystemAction {
  type: ConstantsSystem.SUCCESS_CONNECT | ConstantsSystem.FAIL_CONNECT;
  payload: SystemState;
}

export type SystemActionTypes = SystemAction;
