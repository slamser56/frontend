import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { PhoneState } from '../types';
import { Container, Text, Button } from '../style/main';

export default function Main() {
  const navigation = useNavigation();
  const [status, setStatus] = useState(false);

  const isAutorized = useSelector(
    (state: PhoneState) => state.phone.isAutorized,
  );
  const phone = useSelector((state: PhoneState) => state.phone.phone);

  useEffect(() => {
    axios
      .post('http://192.168.100.3:5000/api')
      .then((res) => {
        setStatus(res.data.status);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <Container>
      {status && <Text>Connected to api</Text>}
      {!isAutorized && (
        <Button
          title="Go to Registration"
          onPress={() => navigation.navigate('Entry')}
        />
      )}
      {isAutorized && <Text>You logged in, your phone {phone}</Text>}
    </Container>
  );
}
