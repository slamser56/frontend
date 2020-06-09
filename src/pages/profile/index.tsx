import React, { useEffect, ReactElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import ImagePicker from 'react-native-image-picker';
import { get } from 'lodash';
import Text from '../../components/text';
import Button from '../../components/button';
import Avatar from '../../components/image';
import { Panel, ButtonPanel, ContainerFixed, ContainerRow } from '../../components/view';
import { ListAppState } from '../../stateManager/listTypes';
import { uploadAvatar, getProfile } from '../../stateManager/profile/thunkAction';
import StackNavigationRoutes from '../../navigation/StackNavigationRoutes';
import { t } from '../../lang';

const image = require('../../image/avatar.png');

const options = {
  title: 'Select Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export default function Main(): ReactElement {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { profile } = useSelector((state: ListAppState) => state);

  useEffect(() => {
      dispatch(getProfile());
  }, []);

  async function handleUploadAvatar(): Promise<void> {
    ImagePicker.launchImageLibrary(options, async response => {
      if (!response.didCancel) {
        dispatch(uploadAvatar(response.data));
      }
    });
  }

  function handleWritePost(): void {
    navigation.navigate(StackNavigationRoutes.WRITE_POST);
  }

  function handleGoMain(): void {
    navigation.navigate(StackNavigationRoutes.MAIN);
  }

  return (
    <ContainerFixed height={50}>
      <Panel>
        <ContainerRow>
          <ContainerFixed width={75}>
            <Text ml={10} textAlign="left" fontSize={20}>
              {t('base.profile')}
            </Text>
            <Text ml={10} mt={10} textAlign="left" fontSize={20}>
              {`${t('profile.profilePhoneNumber')}:`}
            </Text>
            <Text ml={10} mt={10} textAlign="left" fontSize={20}>
              {profile.phoneNumber}
            </Text>
          </ContainerFixed>
          <ContainerFixed width={25} height={90}>
            <Avatar mt={10} mr={10} source={get(profile, 'avatar') ? { uri: profile.avatar } : image} />
          </ContainerFixed>
        </ContainerRow>
        <ButtonPanel>
          <Button width={40} height={100} onPress={handleUploadAvatar}>
            <Text fontSize={20}>{t('profile.uploadAvatar')}</Text>
          </Button>
          <Button width={40} height={100} onPress={handleWritePost} ml={10}>
            <Text fontSize={20}>{t('profile.writePost')}</Text>
          </Button>
        </ButtonPanel>
        <Button width={40} height={20} onPress={handleGoMain} mt={10}>
          <Text fontSize={20}>{t('profile.goMain')}</Text>
        </Button>
      </Panel>
    </ContainerFixed>
  );
}
