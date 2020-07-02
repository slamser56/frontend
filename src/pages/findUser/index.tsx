import React, { useEffect, ReactElement, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { format } from 'date-fns';
import Text from '../../components/text';
import { Input } from '../../components/textInput';
import Button from '../../components/button';
import { Panel, ContainerFixed, ContainerRow, Container, ContainerScroll } from '../../components/view';
import findUsers from '../../stateManager/findUsers/thunkAction';
import { selectFindUsers } from '../../stateManager/selectors';
import { t } from '../../lang';

export default function Main(): ReactElement {
  const [phoneNumber, setPhoneNumber] = useState('');

  const findUser = useSelector(selectFindUsers);
  const dispatch = useDispatch();

  async function handleFindUser(phoneNumber: string): Promise<void> {
    await dispatch(findUsers(phoneNumber));
  }

  return (
    <Container>
      <ContainerRow justifyContent="space-between">
        <ContainerFixed flex={2}>
          <Input height={100} value={phoneNumber} onChangeText={(value: string): void => setPhoneNumber(value)} />
        </ContainerFixed>
        <ContainerFixed>
          <Button height={100} onPress={(): Promise<void> => handleFindUser(phoneNumber)}>
            <Text fontSize={20}>{t('base.ok')}</Text>
          </Button>
        </ContainerFixed>
      </ContainerRow>
      <ContainerScroll flex={15}>
        {findUser.users?.map(value => (
          <Panel mt={20}>
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
                <Button height={100} width={100}>
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
