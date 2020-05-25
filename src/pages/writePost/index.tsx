import React, { useState } from 'react';
import Text from '../../components/text';
import { Button } from '../../components/button';
import { Container, ContainerScroll } from '../../components/view';
import { InputNewPost } from '../../components/textInput';
import { t } from '../../lang';

export default function WritePost(): Element {
  const [text, setText] = useState('');

  function handleChangeText(value: string): void {
    setText(value);
  }

  return (
    <Container>
      <ContainerScroll>
        <Text mt={20} textAlign="left">
          {t('Input text for post')}
        </Text>
        <InputNewPost
          multiline
          mt={20}
          onChangeText={handleChangeText}
          value={text}
        />
        <Button mt={20}>
          <Text>{t('Write')}</Text>
        </Button>
      </ContainerScroll>
    </Container>
  );
}
