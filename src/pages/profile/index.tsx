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
  const { phone, profile } = useSelector((state: ListAppState) => state);

  useEffect(() => {
    (async (): Promise<void> => {
      dispatch(getProfile());
    })();
  }, [profile.avatar]);

  async function handleUploadAvatar(): Promise<void> {
    ImagePicker.launchImageLibrary(options, async response => {
      if (!response.didCancel) {
        dispatch(uploadAvatar(response.data));
      }
    });
  }

  async function handleWritePost(): Promise<void> {
    navigation.navigate(StackNavigationRoutes.WRITE_POST);
  }

  function handleGoMain(): void {
    navigation.navigate(StackNavigationRoutes.MAIN_STACK);
  }

  return (
    <ContainerFixed>
      <Panel>
        <ContainerRow>
          <ContainerFixed>
            <Text ml={10} textAlign="left" fontSize={20}>
              {t('base.profile')}
            </Text>
            <Text ml={10} mt={10} textAlign="left" fontSize={20}>
              {`${t('profile.profilePhoneNumber')}:`}
            </Text>
            <Text ml={10} mt={10} textAlign="left" fontSize={20}>
              {phone.phoneNumber}
            </Text>
          </ContainerFixed>
          <ContainerFixed>
            <Avatar
              mt={10}
              mr={10}
              source={get(profile, 'avatar') ? { uri: profile.avatar } : image}
            />
          </ContainerFixed>
        </ContainerRow>
        <ButtonPanel>
          <Button width={170} height={40} onPress={handleUploadAvatar}>
            <Text fontSize={20}>{t('profile.uploadAvatar')}</Text>
          </Button>
          <Button width={170} height={40} onPress={handleWritePost} ml={10}>
            <Text fontSize={20}>{t('profile.writePost')}</Text>
          </Button>
        </ButtonPanel>
        <Button width={170} height={40} onPress={handleGoMain} mt={10}>
          <Text fontSize={20}>{t('profile.goMain')}</Text>
        </Button>
      </Panel>
    </ContainerFixed>
  );
}
