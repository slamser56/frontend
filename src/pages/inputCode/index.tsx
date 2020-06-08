import React, { useEffect, ReactElement, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import { ListAppState } from '../../stateManager/listTypes';
import StackNavigationRoutes from '../../navigation/StackNavigationRoutes';
import { Input } from '../../components/textInput';
import Text from '../../components/text';
import { Container } from '../../components/view';
import Button from '../../components/button';
import schemaCode from './validationSchema';
import { t } from '../../lang';
import { verifyCodeReset } from '../../stateManager/verifyCode/action';
import verifyCodeAction from '../../stateManager/verifyCode/thunkAction';

export default function Entry(): ReactElement {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { verifyCode, user } = useSelector((state: ListAppState) => state);
  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    if (didMount && verifyCode.response) {
      navigation.navigate(StackNavigationRoutes.HOME);
    } else {
      dispatch(verifyCodeReset());
      setDidMount(true);
    }
  }, [verifyCode.response]);

  function handleClick(code: string): void {
    dispatch(verifyCodeAction(code, user.phoneNumber));
  }

  if (verifyCode.isFetching) {
    return (
      <Container>
        <ActivityIndicator size="large" />
      </Container>
    );
  }
  return (
    <Formik
      initialValues={{ code: '' }}
      onSubmit={(values): void => handleClick(values.code)}
      validationSchema={schemaCode}
    >
      {({ handleChange, handleBlur, touched, handleSubmit, values, errors }): ReactElement => (
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
          {(touched.code && errors.code) || verifyCode.error ? (
            <Text fontSize={20} color="red">
              {errors.code || t(verifyCode.error)}
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
