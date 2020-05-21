import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import { verifyCode } from '../../stateManager/phone/action';
import { ListAppState } from '../../stateManager/listTypes';
import StackNavigationRoutes from '../../navigation/StackNavigationRoutes';
import { Input } from '../../components/textInput';
import { Text } from '../../components/text';
import { Container } from '../../components/view';
import { Button } from '../../components/button';
import schemaCode from './validationSchema';

export default function Entry(): Element {
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

  async function handleClick(code: string): Promise<void> {
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
      onSubmit={(values): Promise<void> => handleClick(values.code)}
      validationSchema={schemaCode}
    >
      {({
        handleChange,
        handleBlur,
        touched,
        handleSubmit,
        values,
        errors,
      }) => (
        <Container>
          <Text fontSize="40px" mb="20px">
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
              {errors.code || message}
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
