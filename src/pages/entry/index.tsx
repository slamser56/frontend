import React, { ReactElement, useState } from 'react';
import { Formik } from 'formik';
import { ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Text from '../../components/text';
import { ListAppState } from '../../stateManager/listTypes';
import { Container } from '../../components/view';
import Button from '../../components/button';
import { Input } from '../../components/textInput';
import StackNavigationRoutes from '../../navigation/StackNavigationRoutes';
import schemaPhoneNumber from './validationSchema';
import { sendCode } from '../../stateManager/user/thunkAction';
import { t } from '../../lang';

export default function Entry(): ReactElement {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState('');
  const { user } = useSelector((state: ListAppState) => state);

  async function handleClick(phoneNumber: string): Promise<void> {
    try {
      await dispatch(sendCode(Number(phoneNumber)));
      navigation.navigate(StackNavigationRoutes.INPUT_CODE);
    } catch (error) {
      setErrorMessage(error);
    }
  }

  if (user.isFetching) {
    return (
      <Container>
        <ActivityIndicator size="large" />
      </Container>
    );
  }
  return (
    <Formik
      initialValues={{ phoneNumber: '' }}
      onSubmit={(values): Promise<void> => handleClick(values.phoneNumber)}
      validationSchema={schemaPhoneNumber}
    >
      {({ handleChange, touched, handleSubmit, values, errors }): Element => (
        <Container>
          <Text fontSize={40} mb={20}>
            {t('entry.entryPhoneNumber')}
          </Text>
          <Input
            mb={20}
            placeholder={t('entry.entryPhoneNumber')}
            onChangeText={handleChange('phoneNumber')}
            value={values.phoneNumber}
          />
          {(touched.phoneNumber && errors.phoneNumber) || errorMessage ? (
            <Text fontSize={20} color="red">
              {errors.phoneNumber || errorMessage}
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
