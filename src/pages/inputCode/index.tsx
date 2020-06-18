import React, { ReactElement, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import { MainRoutes } from '../../navigation/StackNavigationRoutes';
import { Input } from '../../components/textInput';
import Text from '../../components/text';
import { Container } from '../../components/view';
import Button from '../../components/button';
import schemaCode from './validationSchema';
import { verifyCode } from '../../stateManager/user/thunkAction';
import { selectUser } from '../../stateManager/selectors';
import { t } from '../../lang';

export default function Entry(): ReactElement {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState('');
  const user = useSelector(selectUser);

  async function handleClick(code: string, password: string): Promise<void> {
    try {
      await dispatch(verifyCode(code, user.phoneNumber, password));
      navigation.navigate(MainRoutes.MAIN);
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
      initialValues={{ code: '', password: '' }}
      onSubmit={(values): Promise<void> => handleClick(values.code, values.password)}
      validationSchema={schemaCode}
    >
      {({ handleChange, touched, handleSubmit, values, errors }): ReactElement => (
        <Container>
          <Text fontSize={40} mb={20}>
            {t('inputCode.entryCode')}
          </Text>
          <Input
            mb={20}
            placeholder={t('inputCode.entryCode')}
            onChangeText={handleChange('code')}
            value={values.code}
          />
          <Text fontSize={40} mb={20}>
            {t('inputCode.entryPassword')}
          </Text>
          <Input
            mb={20}
            secureTextEntry
            placeholder={t('inputCode.entryPassword')}
            onChangeText={handleChange('password')}
            value={values.password}
          />
          {(touched.code && errors.code) || errorMessage ? (
            <Text fontSize={20} color="red">
              {errors.code || errorMessage}
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
