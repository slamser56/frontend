import React, { useState, useEffect, ReactElement } from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { sendCode } from '../../stateManager/phone/thunkAction';
import Text from '../../components/text';
import { ListAppState } from '../../stateManager/listTypes';
import { Container } from '../../components/view';
import Button from '../../components/button';
import { Input } from '../../components/textInput';
import StackNavigationRoutes from '../../navigation/StackNavigationRoutes';
import schemaPhoneNumber from './validationSchema';
import { t } from '../../lang';
import { resetErrorMessage } from '../../stateManager/phone/action';

export default function Entry(): ReactElement {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [status, setStatus] = useState(false);
  const { phone } = useSelector((state: ListAppState) => state);

  useEffect(() => {
    const reset = navigation.addListener('focus', () => {
      dispatch(resetErrorMessage());
    });
    return reset;
  }, [navigation]);

  useEffect(() => {
    if (status) {
      setStatus(false);
      navigation.navigate(StackNavigationRoutes.INPUT_CODE);
    }
  }, [navigation, status]);

  async function handleClick(phoneNumber: string): Promise<void> {
    try {
      await dispatch(sendCode(Number(phoneNumber)));
      setStatus(true);
    } catch (error) {
      setStatus(false);
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
          {(touched.phoneNumber && errors.phoneNumber) || phone.errorMessage ? (
            <Text fontSize={20} color="red">
              {errors.phoneNumber || t(phone.errorMessage)}
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
