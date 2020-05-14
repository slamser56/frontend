import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Text, Button } from '../style/main';
import { ListAppState } from '../types';

export default function Main() {
  const navigation = useNavigation();
  const [status, setStatus] = useState(false);

  const phone = useSelector((state: ListAppState) => state.phone);

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
      {(!phone.isAutorized || !status) && (
        <Button
          title="Go to Registration"
          onPress={() => navigation.navigate('Entry')}
        />
      )}
      {phone.isAutorized && (
        <Text>You logged in, your phone {phone.phone}</Text>
      )}
    </Container>
  );
}
