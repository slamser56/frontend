import React, { useEffect, ReactElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { format } from 'date-fns';
import Text from '../../components/text';
import { Input } from '../../components/textInput';
import Button from '../../components/button';
import { Panel, ContainerFixed, ContainerRow, Container, ContainerScroll } from '../../components/view';
import { getSubscriptions, unsubscribe } from '../../stateManager/subscriptions/thunkAction';
import { selectSubscriptions } from '../../stateManager/selectors';
import { t } from '../../lang';

export default function Main(): ReactElement {
  const dispatch = useDispatch();

  return (
    <Container>
      <ContainerRow justifyContent="space-between">
        <ContainerFixed flex={2}>
          <Input height={100} />
        </ContainerFixed>
        <ContainerFixed>
          <Button height={100}>
            <Text fontSize={20}>{t('base.ok')}</Text>
          </Button>
        </ContainerFixed>
      </ContainerRow>
      <ContainerScroll flex={15}>
        <Panel mt={20}>
          <ContainerRow>
            <Text textAlign="left" fontSize={25}>
              {`${t('base.phoneNumber')}:`}
            </Text>
          </ContainerRow>
          <ContainerRow>
            <Text textAlign="left" fontSize={20}>
              s
            </Text>
          </ContainerRow>
          <ContainerRow>
            <ContainerFixed flex={3} />
            <ContainerFixed flex={2}>
              <Button height={100} width={100}>
                <Text fontSize={20}>{t('subscription.subscribe')}</Text>
              </Button>
            </ContainerFixed>
          </ContainerRow>
        </Panel>
      </ContainerScroll>
    </Container>
  );
}
