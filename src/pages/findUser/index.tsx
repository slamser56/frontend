import React, { useEffect, ReactElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';
import Text from '../../components/text';
import { Input } from '../../components/textInput';
import Button from '../../components/button';
import { Panel, ContainerFixed, ContainerRow, Container, ContainerScroll } from '../../components/view';
import findUsers from '../../stateManager/findUsers/thunkAction';
import { subscribe } from '../../stateManager/subscriptions/thunkAction';
import { selectFindUsers } from '../../stateManager/selectors';
import { findUsersReset } from '../../stateManager/findUsers/action';
import { t } from '../../lang';

export default function Main(): ReactElement {
  const dispatch = useDispatch();
  const findUser = useSelector(selectFindUsers);

  useEffect(() => {
    dispatch(findUsersReset());
  }, []);

  async function handleFindUser(phoneNumber: string): Promise<void> {
    await dispatch(findUsers(phoneNumber));
  }

  async function handleSubscribe(userId: string, createdAt: string, phoneNumber: number): Promise<void> {
    await dispatch(subscribe(userId, createdAt, phoneNumber));
  }

  return (
    <Container>
      <ContainerRow justifyContent="space-between">
        <Formik
          initialValues={{ phoneNumber: '' }}
          onSubmit={(values): Promise<void> => handleFindUser(values.phoneNumber)}
        >
          {({ handleChange, handleSubmit, values }): ReactElement => (
            <>
              <ContainerFixed flex={2}>
                <Input height={100} value={values.phoneNumber} onChangeText={handleChange('phoneNumber')} />
              </ContainerFixed>
              <ContainerFixed>
                <Button height={100} onPress={handleSubmit}>
                  <Text fontSize={20}>{t('base.ok')}</Text>
                </Button>
              </ContainerFixed>
            </>
          )}
        </Formik>
      </ContainerRow>
      <ContainerScroll flex={15}>
        {findUser.users?.map(value => (
          <Panel mt={20} key={value._id}>
            <ContainerRow>
              <Text textAlign="left" fontSize={25}>
                {`${t('base.phoneNumber')}:`}
              </Text>
            </ContainerRow>
            <ContainerRow>
              <Text textAlign="left" fontSize={20}>
                {value.phoneNumber}
              </Text>
            </ContainerRow>
            <ContainerRow>
              <ContainerFixed flex={3} />
              <ContainerFixed flex={2}>
                <Button
                  height={100}
                  width={100}
                  onPress={(): Promise<void> => handleSubscribe(value._id, value.createdAt, value.phoneNumber)}
                >
                  <Text fontSize={20}>{t('subscription.subscribe')}</Text>
                </Button>
              </ContainerFixed>
            </ContainerRow>
          </Panel>
        ))}
      </ContainerScroll>
    </Container>
  );
}
