import React, { useState, useEffect } from 'react';
import { sendCode } from '../action';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Container, Input, Button } from '../style/entry';
import { Text } from '../style';
import { StackNavigationRoutes } from '../page';
import { Formik } from 'formik';
import { schemaPhoneNumber } from '../validationSchema';

export default function Entry() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(false);

  useEffect(() => {
    if (status) {
      setMessage('');
      setStatus(false);
      navigation.navigate(StackNavigationRoutes.INPUT_CODE);
    }
  }, [navigation, status]);

  async function handleClick(phoneNumber) {
    try {
      await dispatch(sendCode(phoneNumber));
      setStatus(true);
    } catch (error) {
      setMessage(error);
    }
  }

  return (
    <Formik
      initialValues={{ phoneNumber: '' }}
      onSubmit={(values) => handleClick(values.phoneNumber)}
      validationSchema={schemaPhoneNumber}>
      {({
        handleChange,
        handleBlur,
        touched,
        handleSubmit,
        values,
        errors,
      }) => (
        <Container>
          <Text fontSize="40px" marginBottom="20px">
            Entry phone number
          </Text>
          <Input
            placeholder="Entry phone number"
            onChangeText={handleChange('phoneNumber')}
            onBlur={handleBlur('phoneNumber')}
            value={values.phoneNumber}
          />
          {(touched.phoneNumber && errors.phoneNumber) || message ? (
            <Text fontSize="20px" color="red">
              {errors.phoneNumber}
              {message}
            </Text>
          ) : null}
          <Button onPress={handleSubmit}>
            <Text fontSize="20px">OK</Text>
          </Button>
        </Container>
      )}
    </Formik>
  );
}
