import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text, Container } from '../style';
import {
  Avatar,
  Panel,
  TextPanel,
  ButtonIcon,
  ButtonPanel,
} from '../style/profile';
import { ListAppState } from '../types';
import ImagePicker from 'react-native-image-picker';
import { uploadAvatar, getAvatar } from '../action';

const options = {
  title: 'Select Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export default function Main() {
  const dispatch = useDispatch();
  const { phone, profile } = useSelector((state: ListAppState) => state);

  useEffect(() => {
    dispatch(getAvatar(phone.token));
  }, []);

  async function handleUploadAvatar() {
    ImagePicker.launchImageLibrary(options, (response) => {
      dispatch(uploadAvatar(response.data, phone.token));
    });
  }

  return (
    <Container>
      <Panel>
        <Avatar
          source={{
            uri: profile.avatar,
          }}
        />
        <TextPanel>Profile</TextPanel>
        <TextPanel>Profile phone number:</TextPanel>
        <TextPanel top="10px">{phone.phoneNumber}</TextPanel>
        <ButtonPanel>
          <ButtonIcon onPress={handleUploadAvatar}>
            <Text fontSize="20px">Загрузить аватар</Text>
          </ButtonIcon>
          <ButtonIcon>
            <Text fontSize="20px">Загрузить фото</Text>
          </ButtonIcon>
        </ButtonPanel>
      </Panel>
    </Container>
  );
}
