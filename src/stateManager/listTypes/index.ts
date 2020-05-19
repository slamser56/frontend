import { PhoneState } from '../phone/type';
import { SystemState } from '../system/type';
import { ProfileState } from '../profile/type';

export interface ListAppState {
  phone: PhoneState;
  system: SystemState;
  profile: ProfileState;
}
