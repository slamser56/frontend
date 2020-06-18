import React, { useState, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ProfileRoutes } from '../../navigation/StackNavigationRoutes';
import Text from '../../components/text';
import Button from '../../components/button';
import { ContainerScroll } from '../../components/view';
import { InputNewPost } from '../../components/textInput';
import { uploadPost } from '../../stateManager/posts/thunkAction';
import { selectPosts, selectUser } from '../../stateManager/selectors';
import { t } from '../../lang';

export default function WritePost(): ReactElement {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState('');
  const [text, setText] = useState('');
  const posts = useSelector(selectPosts);
  const user = useSelector(selectUser);

  async function handleClick(): Promise<void> {
    try {
      await dispatch(uploadPost(text, user.phoneNumber));
      navigation.navigate(ProfileRoutes.PROFILE);
    } catch (error) {
      setErrorMessage(error);
    }
  }
  return (
    <ContainerScroll>
      <Text mt={20} textAlign="left">
        {t('writePost.inputTextForPost')}
      </Text>
      <InputNewPost multiline mt={20} onChangeText={setText} value={text} />
      {posts.isFetching ? (
        <ActivityIndicator size="large" />
      ) : (
        <Button mt={20} height={30} width={40} onPress={handleClick}>
          <Text>{t('base.write')}</Text>
        </Button>
      )}
      {errorMessage ? <Text color="red">{errorMessage}</Text> : null}
    </ContainerScroll>
  );
}
