import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  profile: { userId: string };
};

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'profile'>;

export type Props = {
  route: ProfileScreenRouteProp;
};
