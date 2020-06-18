import React, { useEffect, ReactElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import ImagePicker from 'react-native-image-picker';
import moment from 'moment';
import Text from '../../components/text';
import Button from '../../components/button';
import Avatar from '../../components/image';
import { Panel, ContainerFixed, ContainerRow, Container, ContainerScroll } from '../../components/view';
import { uploadAvatar, getProfile } from '../../stateManager/profile/thunkAction';
import { getPosts } from '../../stateManager/posts/thunkAction';
import { MainRoutes, ProfileRoutes } from '../../navigation/StackNavigationRoutes';
import { selectProfile, selectPosts } from '../../stateManager/selectors';
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
  const profile = useSelector(selectProfile);
  const post = useSelector(selectPosts);

  useEffect(() => {
    dispatch(getProfile());
    dispatch(getPosts());
  }, []);

  async function handleUploadAvatar(): Promise<void> {
    ImagePicker.launchImageLibrary(options, async response => {
      if (!response.didCancel) {
        dispatch(uploadAvatar(response.data));
      }
    });
  }

  function handleWritePost(): void {
    navigation.navigate(ProfileRoutes.WRITE_POST);
  }

  function handleGoMain(): void {
    navigation.navigate(MainRoutes.MAIN);
  }

  return (
    <Container>
      <Panel>
        <ContainerRow flex={3}>
          <ContainerFixed flex={3}>
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
          <ContainerFixed>
            <Avatar mr={10} source={profile?.avatar ? { uri: profile.avatar } : image} />
          </ContainerFixed>
        </ContainerRow>
        <ContainerRow flex={1}>
          <Button width={40} height={100} onPress={handleUploadAvatar}>
            <Text fontSize={20}>{t('profile.uploadAvatar')}</Text>
          </Button>
          <Button width={40} height={100} ml={10} onPress={handleWritePost}>
            <Text fontSize={20}>{t('profile.writePost')}</Text>
          </Button>
        </ContainerRow>
        <ContainerRow>
          <Button width={40} height={100} mt={10} onPress={handleGoMain}>
            <Text fontSize={20}>{t('profile.goMain')}</Text>
          </Button>
        </ContainerRow>
        <ContainerRow />
      </Panel>
      <ContainerScroll flex={3}>
        {post.posts?.map((value, index) => {
          return (
            <Panel mt={30} key={index}>
              <ContainerRow>
                <Text textAlign="left" fontSize={25}>
                  {`${t('post.dateOfPost')}:`}
                </Text>
              </ContainerRow>
              <ContainerRow>
                <Text textAlign="left" fontSize={20}>
                  {moment(value.date).format('MMM DD YYYY HH:mm')}
                </Text>
              </ContainerRow>
              <ContainerRow>
                <Text textAlign="left" fontSize={25}>{`${t('post.textOfPost')}:`}</Text>
              </ContainerRow>
              <ContainerRow>
                <Text textAlign="left" fontSize={20}>
                  {value.text}
                </Text>
              </ContainerRow>
            </Panel>
          );
        })}
      </ContainerScroll>
    </Container>
  );
}
