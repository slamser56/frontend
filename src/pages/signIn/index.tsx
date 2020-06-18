import React, { ReactElement, useState } from 'react';
import { Formik } from 'formik';
import { ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import schemaSignIn from './validationSchema';
import Text from '../../components/text';
import { Container } from '../../components/view';
import Button from '../../components/button';
import { Input } from '../../components/textInput';
import { MainRoutes } from '../../navigation/StackNavigationRoutes';
import { logIn } from '../../stateManager/user/thunkAction';
import { selectUser } from '../../stateManager/selectors';
import { t } from '../../lang';

export default function Entry(): ReactElement {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState('');
  const user = useSelector(selectUser);

  async function handleClick(phoneNumber: string, password: string): Promise<void> {
    try {
      await dispatch(logIn(Number(phoneNumber), password));
      navigation.navigate(MainRoutes.PROFILE_STACK);
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
      initialValues={{ phoneNumber: '', password: '' }}
      onSubmit={(values): Promise<void> => handleClick(values.phoneNumber, values.password)}
      validationSchema={schemaSignIn}
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
          <Text fontSize={40} mb={20}>
            {t('entry.entryPassword')}
          </Text>
          <Input
            mb={20}
            secureTextEntry
            placeholder={t('entry.entryPassword')}
            onChangeText={handleChange('password')}
            value={values.password}
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
