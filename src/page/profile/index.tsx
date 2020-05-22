import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import ImagePicker from 'react-native-image-picker';
import Toast from 'react-native-simple-toast';
import lodash from 'lodash';
import Text from '../../components/text';
import { ButtonIcon } from '../../components/button';
import Avatar from '../../components/image';
import { Panel, ButtonPanel, ContainerFixed, ContainerRow } from '../../components/view';
import { ListAppState } from '../../stateManager/listTypes';
import { uploadAvatar, downloadAvatar } from '../../stateManager/profile/action';
import StackNavigationRoutes from '../../navigation/StackNavigationRoutes';

const options = {
  title: 'Select Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export default function Main(): Element {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { phone, profile } = useSelector((state: ListAppState) => state);

  useEffect(() => {
    (async (): Promise<void> => {
      try {
        await dispatch(downloadAvatar());
      } catch (error) {
        Toast.show(error);
      }
    })();
  }, [profile.avatar]);

  async function handleUploadAvatar(): Promise<void> {
    ImagePicker.launchImageLibrary(options, async response => {
      try {
        if (!response.didCancel) {
          await dispatch(uploadAvatar(response.data));
        }
      } catch (error) {
        Toast.show(error);
      }
    });
  }

  async function handleWritePost(): Promise<void> {
    navigation.navigate(StackNavigationRoutes.WRITE_POST);
  }

  return (
    <ContainerFixed>
      <Panel>
        <ContainerRow>
          <ContainerFixed>
            <Text ml={10} textAlign="left" fontSize={20}>
              Profile
            </Text>
            <Text ml={10} mt={10} textAlign="left" fontSize={20}>
              Profile phone number:
            </Text>
            <Text ml={10} mt={10} textAlign="left" fontSize={20}>
              {phone.phoneNumber}
            </Text>
          </ContainerFixed>
          <ContainerFixed>
            <Avatar
              mt={10}
              mr={10}
              source={lodash.get(profile, 'avatar', '') ? { uri: profile.avatar } : require('../../image/avatar.png')}
            />
          </ContainerFixed>
        </ContainerRow>
        <ButtonPanel>
          <ButtonIcon onPress={handleUploadAvatar}>
            <Text fontSize={20}>Upload avatar</Text>
          </ButtonIcon>
          <ButtonIcon onPress={handleWritePost} ml={10}>
            <Text fontSize={20}>Write post</Text>
          </ButtonIcon>
        </ButtonPanel>
      </Panel>
    </ContainerFixed>
  );
}
