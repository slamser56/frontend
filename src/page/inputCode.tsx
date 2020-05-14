import React, { useState, useEffect } from 'react';
import { verifyCode } from '../action';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Container, Title, Input, Button } from '../style/inputCode';
import { ListAppState } from '../types';

export default function Entry() {
  const [number, onChangeNumber] = useState('');
  const navigation = useNavigation();

  const phone = useSelector((state: ListAppState) => state.phone);
  phone.statusSendCode = false;

  const dispatch = useDispatch();

  useEffect(() => {
    if (phone.isAutorized) {
      navigation.navigate('Home');
    }
  });

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
      <Button
        onPress={() => {
          dispatch(verifyCode(number, phone.phone));
        }}
        title="OK"
      />
    </Container>
  );
}
