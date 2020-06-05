import React, { useEffect, ReactElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import { verifyCode } from '../../stateManager/phone/thunkAction';
import { ListAppState } from '../../stateManager/listTypes';
import StackNavigationRoutes from '../../navigation/StackNavigationRoutes';
import { Input } from '../../components/textInput';
import Text from '../../components/text';
import { Container } from '../../components/view';
import Button from '../../components/button';
import schemaCode from './validationSchema';
import { t } from '../../lang';

export default function Entry(): ReactElement {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { phone } = useSelector((state: ListAppState) => state);

  useEffect(() => {
    if (phone.response) {
      navigation.navigate(StackNavigationRoutes.HOME);
    }
  }, [phone.response]);

  async function handleClick(code: string): Promise<void> {
    dispatch(verifyCode(code, phone.phoneNumber));
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
      initialValues={{ code: '' }}
      onSubmit={(values): Promise<void> => handleClick(values.code)}
      validationSchema={schemaCode}
    >
      {({ handleChange, handleBlur, touched, handleSubmit, values, errors }): Element => (
        <Container>
          <Text fontSize={40} mb={20}>
            {t('inputCode.entryCode')}
          </Text>
          <Input
            mb={20}
            placeholder={t('inputCode.entryCode')}
            onChangeText={handleChange('code')}
            onBlur={handleBlur('code')}
            value={values.code}
          />
          {(touched.code && errors.code) || phone.error ? (
            <Text fontSize={20} color="red">
              {errors.code || t(phone.error)}
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
