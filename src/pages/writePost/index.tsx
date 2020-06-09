import React, { useState, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ListAppState } from '../../stateManager/listTypes';
import StackNavigationRoutes from '../../navigation/StackNavigationRoutes';
import Text from '../../components/text';
import Button from '../../components/button';
import { Container, ContainerScroll } from '../../components/view';
import { InputNewPost } from '../../components/textInput';
import { uploadPost } from '../../stateManager/posts/thunkAction';
import { t } from '../../lang';

export default function WritePost(): ReactElement {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState('');
  const [text, setText] = useState('');
  const { posts } = useSelector((state: ListAppState) => state);

  async function handleClick(): Promise<void> {
    try {
      await dispatch(uploadPost(text));
      navigation.navigate(StackNavigationRoutes.PROFILE);
    } catch (error) {
      setErrorMessage(error);
    }
  }
  return (
    <Container>
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
    </Container>
  );
}
