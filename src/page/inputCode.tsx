import React, { useState, useEffect } from 'react';
import { verifyCode } from '../action';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Container, Input, Button } from '../style/inputCode';
import { ListAppState } from '../types';
import { StackNavigationRoutes } from '../page';
import { Text } from '../style';
import { Formik } from 'formik';
import { schemaCode } from '../validationSchema';

export default function Entry() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const phone = useSelector((state: ListAppState) => state.phone);

  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(false);

  useEffect(() => {
    if (status) {
      setMessage('');
      setStatus(false);
      navigation.navigate(StackNavigationRoutes.HOME);
    }
  }, [navigation, status]);

  async function handleClick(code) {
    try {
      await dispatch(verifyCode(code, phone.phoneNumber));
      setStatus(true);
    } catch (error) {
      setMessage(error);
    }
  }

  return (
    <Formik
      initialValues={{ code: '' }}
      onSubmit={(values) => handleClick(values.code)}
      validationSchema={schemaCode}>
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
            Entry code
          </Text>
          <Input
            placeholder="Entry code"
            onChangeText={handleChange('code')}
            onBlur={handleBlur('code')}
            value={values.code}
          />
          {(touched.code && errors.code) || message ? (
            <Text fontSize="20px" color="red">
              {errors.code}
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
