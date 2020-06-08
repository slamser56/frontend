import { UserState } from '../user/type';
import { SystemState } from '../system/type';
import { ProfileState } from '../profile/type';
import { SendCodeState } from '../sendCode/type';
import { VerifyCodeState } from '../verifyCode/type';

export interface ListAppState {
  user: UserState;
  system: SystemState;
  profile: ProfileState;
  sendCode: SendCodeState;
  verifyCode: VerifyCodeState;
}
