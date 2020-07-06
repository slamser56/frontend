import React, { useEffect, ReactElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import ImagePicker from 'react-native-image-picker';
import { format } from 'date-fns';
import Text from '../../components/text';
import Button from '../../components/button';
import Avatar from '../../components/image';
import { Props } from '../propsType';
import { Panel, ContainerFixed, ContainerRow, Container, ContainerScroll } from '../../components/view';
import { uploadAvatar, getProfile } from '../../stateManager/profile/thunkAction';
import { getPosts, deletePost } from '../../stateManager/posts/thunkAction';
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
export default function Main({ route: { params } }: Props): ReactElement {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const profile = useSelector(selectProfile);
  const post = useSelector(selectPosts);

  useEffect(() => {}, [params]);

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

  function handleSubscriptions(): void {
    navigation.navigate(ProfileRoutes.SUBSCRIPTION);
  }

  async function handleDeletePost(postId: string): Promise<void> {
    await dispatch(deletePost(postId));
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
          <Button width={40} height={100} ml={10} mt={10} onPress={handleSubscriptions}>
            <Text fontSize={20}>{t('profile.subscriptions')}</Text>
          </Button>
        </ContainerRow>
        <ContainerRow />
      </Panel>
      <ContainerScroll flex={3}>
        {post.posts?.map(value => (
          <Panel mt={30} key={value.postId}>
            <ContainerRow>
              <Text textAlign="left" fontSize={25}>
                {`${t('post.dateOfPost')}:`}
              </Text>
            </ContainerRow>
            <ContainerRow>
              <Text textAlign="left" fontSize={20}>
                {format(new Date(value.createdAt), 'MM/dd/yyyy HH:mm')}
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
            <ContainerRow>
              <ContainerFixed flex={3} />
              <ContainerFixed>
                <Button height={100} width={100} onPress={(): Promise<void> => handleDeletePost(value.postId)}>
                  <Text fontSize={20}>{t('base.delete')}</Text>
                </Button>
              </ContainerFixed>
            </ContainerRow>
          </Panel>
        ))}
      </ContainerScroll>
    </Container>
  );
}
