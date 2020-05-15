export interface SystemState {
  connected: boolean;
}

export enum ConstantsSystem {
  CHECK_CONNECT = 'CHECK_CONNECT',
}

interface CheckConnectAction {
  type: typeof ConstantsSystem.CHECK_CONNECT;
  payload: SystemState;
}

export type SystemActionTypes = CheckConnectAction;
