import React, { useState, ReactElement } from 'react';
import Text from '../../components/text';
import Button from '../../components/button';
import { Container, ContainerScroll } from '../../components/view';
import { InputNewPost } from '../../components/textInput';
import { t } from '../../lang';

export default function WritePost(): ReactElement {
  const [text, setText] = useState('');

  return (
    <Container>
      <ContainerScroll>
        <Text mt={20} textAlign="left">
          {t('writePost.inputTextForPost')}
        </Text>
        <InputNewPost
          multiline
          mt={20}
          onChangeText={setText}
          value={text}
        />
        <Button mt={20}>
          <Text>{t('base.write')}</Text>
        </Button>
      </ContainerScroll>
    </Container>
  );
}
