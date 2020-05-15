import { PhoneState } from './phone';
import { SystemState } from './system';

export interface ListAppState {
  phone: PhoneState;
  system: SystemState;
}
