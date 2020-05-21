import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import ImagePicker from 'react-native-image-picker';
import { TextPanel, Text } from '../../components/text';
import { ButtonIcon } from '../../components/button';
import Avatar from '../../components/image';
import { Panel, ButtonPanel, Container } from '../../components/view';
import { ListAppState } from '../../stateManager/listTypes';
import { uploadAvatar, getAvatar } from '../../stateManager/profile/action';
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
        await dispatch(getAvatar(phone.token));
      } catch (error) {}
    })();
  }, [profile.avatar]);

  async function handleUploadAvatar(): Promise<void> {
    ImagePicker.launchImageLibrary(options, (response) => {
      if (!response.didCancel) {
        dispatch(uploadAvatar(response.data, phone.token));
      }
    });
  }

  async function handleWritePost(): Promise<void> {
    navigation.navigate(StackNavigationRoutes.WRITE_POST);
  }

  return (
    <Container>
      <Panel>
        <Avatar
          source={
            profile.avatar
              ? { uri: profile.avatar }
              : require('../../image/avatar.png')
          }
        />
        <TextPanel>Profile</TextPanel>
        <TextPanel>Profile phone number:</TextPanel>
        <TextPanel top="10px">{phone.phoneNumber}</TextPanel>
        <ButtonPanel>
          <ButtonIcon onPress={handleUploadAvatar}>
            <Text fontSize="20px">
              Upload avatar
            </Text>
          </ButtonIcon>
          <ButtonIcon onPress={handleWritePost} ml="10px">
            <Text fontSize="20px">
              Write post
            </Text>
          </ButtonIcon>
        </ButtonPanel>
      </Panel>
    </Container>
  );
}
