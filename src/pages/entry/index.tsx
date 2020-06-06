import React, { useEffect, ReactElement } from 'react';
import { Formik } from 'formik';
import { ActivityIndicator } from 'react-native';
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
import { resetAction } from '../../stateManager/phone/action';

export default function Entry(): ReactElement {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { phone } = useSelector((state: ListAppState) => state);

  useEffect(() => {
    const reset = navigation.addListener('focus', () => {
      dispatch(resetAction());
    });
    return reset;
  }, [navigation]);

  useEffect(() => {
    if (phone.response) {
      navigation.navigate(StackNavigationRoutes.INPUT_CODE);
    }
  }, [phone.response]);

  function handleClick(phoneNumber: string): void {
    dispatch(sendCode(Number(phoneNumber)));
  }
  
  if (phone.isFetching) {
    return (
      <Container>
        <ActivityIndicator size="large" />
      </Container>
    );
  }
  return (
    <Formik
      initialValues={{ phoneNumber: '' }}
      onSubmit={(values): void => handleClick(values.phoneNumber)}
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
          {(touched.phoneNumber && errors.phoneNumber) || phone.error ? (
            <Text fontSize={20} color="red">
              {errors.phoneNumber || t(phone.error)}
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
