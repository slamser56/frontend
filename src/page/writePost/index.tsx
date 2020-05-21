import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import { Text } from '../../components/text';
import { Button } from '../../components/button';
import {
  Panel, ButtonPanel, Container, ContainerScroll,
} from '../../components/view';
import { InputMultiline } from '../../components/textInput';
import { ListAppState } from '../../stateManager/listTypes';

export default function WritePost(): Element {
  const [text, setText] = useState('');
  useEffect(() => {
  }, []);

  function handleChangeText(value: string): void {
    setText(value);
  }

  function handlePressButton(): void{

  }

  return (
    <Container>
      <ContainerScroll>
        <Text mt="20px" textAlign="left">Input text for post</Text>
        <InputMultiline multiline mt="20px" onChangeText={handleChangeText} value={text} />
        <Button onPress={handlePressButton} mt="20px"><Text>Write</Text></Button>
      </ContainerScroll>
    </Container>
  );
}
