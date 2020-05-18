import { PhoneState } from './phone';
import { SystemState } from './system';
import { ProfileState } from './profile';

export interface ListAppState {
  phone: PhoneState;
  system: SystemState;
  profile: ProfileState;
}
