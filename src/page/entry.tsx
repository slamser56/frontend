import React, { useState, useEffect } from 'react';
import { PhoneState } from '../types';
import { thunkSendCode } from '../action';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Container, Title, Input, Button } from '../style/entry';

export default function Entry() {
  const [number, onChangeNumber] = useState('');
  const navigation = useNavigation();

  const statusSendCode = useSelector(
    (state: PhoneState) => state.phone.statusSendCode,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (statusSendCode) {
      navigation.navigate('inputCode');
    }
  });

  return (
    <Container>
      <Title>Entry phone number</Title>
      <Input
        placeholder="Entry phone number"
        onChangeText={(text) => {
          onChangeNumber(text);
        }}
        value={number}
      />
      <Button
        onPress={() => {
          dispatch(thunkSendCode(number));
        }}
        title="Register"
      />
    </Container>
  );
}
