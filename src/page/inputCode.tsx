import React, { useState, useEffect } from 'react';
import { PhoneState } from '../types';
import { verifyCode } from '../action';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Container, Title, Input, Button } from '../style/inputCode';

export default function Entry() {
  const [number, onChangeNumber] = useState('');
  const navigation = useNavigation();

  const isAutorized = useSelector(
    (state: PhoneState) => state.phone.isAutorized,
  );
  const phone = useSelector((state: PhoneState) => state.phone.phone);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAutorized) {
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
          dispatch(verifyCode(number, phone));
        }}
        title="OK"
      />
    </Container>
  );
}
