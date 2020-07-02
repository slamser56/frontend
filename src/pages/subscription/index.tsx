import React, { useEffect, ReactElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';
import Text from '../../components/text';
import Button from '../../components/button';
import { Panel, ContainerFixed, ContainerRow, Container, ContainerScroll } from '../../components/view';
import { ProfileRoutes } from '../../navigation/StackNavigationRoutes';
import { getSubscriptions, unsubscribe } from '../../stateManager/subscriptions/thunkAction';
import { selectSubscriptions } from '../../stateManager/selectors';
import { t } from '../../lang';

export default function Main(): ReactElement {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const subscription = useSelector(selectSubscriptions);

  useEffect(() => {
    dispatch(getSubscriptions());
  }, []);

  async function handleUnsubscribe(userId: string): Promise<void> {
    await dispatch(unsubscribe(userId));
  }

  function handleFindUser(): void {
    navigation.navigate(ProfileRoutes.FIND_USER);
  }

  return (
    <Container>
      <ContainerScroll>
        <ContainerRow justifyContent="center">
          <ContainerFixed flex={2}>
            <Text>{t('subscription.subscriptions')}</Text>
          </ContainerFixed>
          <ContainerFixed>
            <Button height={100} onPress={handleFindUser}>
              <Text fontSize={20}>{t('subscription.findUser')}</Text>
            </Button>
          </ContainerFixed>
        </ContainerRow>
        {subscription.subscriptions?.map(value => (
          <Panel mt={20} key={value.userId}>
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
              <Text textAlign="left" fontSize={25}>{`${t('subscription.dateSubscription')}:`}</Text>
            </ContainerRow>
            <ContainerRow>
              <Text textAlign="left" fontSize={20}>
                {format(new Date(value?.createdAt), 'MM/dd/yyyy HH:mm')}
              </Text>
            </ContainerRow>
            <ContainerRow>
              <ContainerFixed flex={3} />
              <ContainerFixed flex={2}>
                <Button height={100} width={100} onPress={(): Promise<void> => handleUnsubscribe(value.userId)}>
                  <Text fontSize={20}>{t('subscription.unsubscribe')}</Text>
                </Button>
              </ContainerFixed>
            </ContainerRow>
          </Panel>
        ))}
      </ContainerScroll>
    </Container>
  );
}
