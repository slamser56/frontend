import React, { useState, useEffect } from 'react';
import { verifyCode } from '../action';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Container, Title, Input, Button } from '../style/inputCode';
import { ListAppState } from '../types';
import { StackNavigationRoutes } from '../page';
import { TextColored } from '../style/style';

export default function Entry() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const phone = useSelector((state: ListAppState) => state.phone);

  const [number, onChangeNumber] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(false);

  useEffect(() => {
    if (status) {
      setMessage('');
      setStatus(false);
      navigation.navigate(StackNavigationRoutes.HOME);
    }
  }, [navigation, status]);

  async function handleClick() {
    let res: any = await dispatch(verifyCode(number, phone.phoneNumber));
    res.status ? setStatus(true) : setMessage(res);
  }

  return (
    <Container>
      <Title>Entry code</Title>
      <Input
        placeholder="Entry code"
        onChangeText={(text) => {
          onChangeNumber(text);
        }}
        value={number}
      />
      <Button onPress={handleClick} title="OK" />
      {message ? (
        <TextColored size="20px" color="red">
          {message}
        </TextColored>
      ) : null}
    </Container>
  );
}
