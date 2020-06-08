import { UserState } from '../user/type';
import { SystemState } from '../system/type';
import { ProfileState } from '../profile/type';
import { SendCodeState } from '../sendCode/type';
import { VerifyCodeState } from '../verifyCode/type';
import { UploadPostState } from '../uploadPost/type';

export interface ListAppState {
  user: UserState;
  system: SystemState;
  profile: ProfileState;
  sendCode: SendCodeState;
  verifyCode: VerifyCodeState;
  uploadPost: UploadPostState;
}
