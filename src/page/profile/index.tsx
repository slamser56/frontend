import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import { TextPanel, Text } from '../../style/text';
import { ButtonIcon } from '../../style/button';
import Avatar from '../../style/image';
import { Panel, ButtonPanel, Container } from '../../style/view';
import { ListAppState } from '../../stateManager/listTypes';
import { uploadAvatar, getAvatar } from '../../stateManager/profile/action';

const options = {
  title: 'Select Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export default function Main(): Element {
  const dispatch = useDispatch();
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
            <Text fontSize="20px" mt="5px">
              Upload avatar
            </Text>
          </ButtonIcon>
          <ButtonIcon>
            <Text fontSize="20px" mt="5px">
              Write post
            </Text>
          </ButtonIcon>
        </ButtonPanel>
      </Panel>
    </Container>
  );
}
