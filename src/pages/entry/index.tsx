import React, { useEffect, ReactElement, useState } from 'react';
import { Formik } from 'formik';
import { ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import sendCodeAction from '../../stateManager/sendCode/thunkAction';
import { sendCodeReset } from '../../stateManager/sendCode/action';
import Text from '../../components/text';
import { ListAppState } from '../../stateManager/listTypes';
import { Container } from '../../components/view';
import Button from '../../components/button';
import { Input } from '../../components/textInput';
import StackNavigationRoutes from '../../navigation/StackNavigationRoutes';
import schemaPhoneNumber from './validationSchema';
import { t } from '../../lang';

export default function Entry(): ReactElement {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { sendCode } = useSelector((state: ListAppState) => state);
  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    if (didMount && sendCode.response) {
      navigation.navigate(StackNavigationRoutes.INPUT_CODE);
    } else {
      dispatch(sendCodeReset());
      setDidMount(true);
    }
  }, [sendCode.response]);

  function handleClick(phoneNumber: string): void {
    dispatch(sendCodeAction(Number(phoneNumber)));
  }

  if (sendCode.isFetching) {
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
          {(touched.phoneNumber && errors.phoneNumber) || sendCode.error ? (
            <Text fontSize={20} color="red">
              {errors.phoneNumber || t(sendCode.error)}
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
