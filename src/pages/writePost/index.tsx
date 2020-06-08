import React, { useState, ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ListAppState } from '../../stateManager/listTypes';
import StackNavigationRoutes from '../../navigation/StackNavigationRoutes';
import Text from '../../components/text';
import Button from '../../components/button';
import { Container, ContainerScroll } from '../../components/view';
import { InputNewPost } from '../../components/textInput';
import { uploadPostReset } from '../../stateManager/uploadPost/action';
import uploadPostAction from '../../stateManager/uploadPost/thunkAction';
import { t } from '../../lang';

export default function WritePost(): ReactElement {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { uploadPost } = useSelector((state: ListAppState) => state);
  const [text, setText] = useState('');
  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    if (didMount && uploadPost.response) {
      navigation.navigate(StackNavigationRoutes.HOME);
    } else {
      dispatch(uploadPostReset());
      setDidMount(true);
    }
  }, [uploadPost.response]);

  function handleClick(): void {
    dispatch(uploadPostAction(text));
  }
  return (
    <Container>
      <ContainerScroll>
        <Text mt={20} textAlign="left">
          {t('writePost.inputTextForPost')}
        </Text>
        <InputNewPost multiline mt={20} onChangeText={setText} value={text} />
        {uploadPost.isFetching ? (
          <ActivityIndicator size="large" />
        ) : (
          <Button mt={20} onPress={handleClick}>
            <Text>{t('base.write')}</Text>
          </Button>
        )}
      </ContainerScroll>
    </Container>
  );
}
