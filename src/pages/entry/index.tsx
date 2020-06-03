import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { sendCode } from '../../stateManager/phone/action';
import Text from '../../components/text';
import { Container } from '../../components/view';
import { Button } from '../../components/button';
import { Input } from '../../components/textInput';
import StackNavigationRoutes from '../../navigation/StackNavigationRoutes';
import schemaPhoneNumber from './validationSchema';
import { t } from '../../lang';

export default function Entry(): Element {
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

  async function handleClick(phoneNumber: string): Promise<void> {
    try {
      await dispatch(sendCode(Number(phoneNumber)));
      setStatus(true);
    } catch (error) {
      setMessage(error);
    }
  }

  return (
    <Formik
      initialValues={{ phoneNumber: '' }}
      onSubmit={(values): Promise<void> => handleClick(values.phoneNumber)}
      validationSchema={schemaPhoneNumber}
    >
      {({ handleChange, handleBlur, touched, handleSubmit, values, errors }): Element => (
        <Container>
          <Text fontSize={40} mb={20}>
            {t('entry.entryPhoneNumber')}
          </Text>
          <Input
            mb={20}
            placeholder={t('entry.entryPhoneNumber')}
            onChangeText={handleChange('phoneNumber')}
            onBlur={handleBlur('phoneNumber')}
            value={values.phoneNumber}
          />
          {(touched.phoneNumber && errors.phoneNumber) || message ? (
            <Text fontSize={20} color="red">
              {errors.phoneNumber}
              {message}
            </Text>
          ) : null}
          <Button onPress={handleSubmit}>
            <Text fontSize={20}>{t('base.ok')}</Text>
          </Button>
        </Container>
      )}
    </Formik>
  );
}
