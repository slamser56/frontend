import React, { useState, useEffect } from 'react';
import { sendCode } from '../action';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Container, Title, Input, Button } from '../style/entry';
import { TextColored } from '../style/style';
import { StackNavigationRoutes } from '../page';

export default function Entry() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(false);

  useEffect(() => {
    if (status) {
      setMessage('');
      setStatus(false);
      navigation.navigate(StackNavigationRoutes.INPUT_CODE);
    }
  }, [navigation, status]);

  async function handleClick() {
    let res: any = await dispatch(sendCode(number));
    res.status ? setStatus(true) : setMessage(res);
  }

  return (
    <Container>
      <Title>Entry phone number</Title>
      <Input
        placeholder="Entry phone number"
        onChangeText={(text) => {
          setNumber(text);
        }}
        value={number}
      />
      <Button onPress={handleClick} title="Register" />
      {message ? (
        <TextColored size="20px" color="red">
          {message}
        </TextColored>
      ) : null}
    </Container>
  );
}
