import styled from 'styled-components/native';

  interface ButtonInterface {
    mt?: string;
    mb?: string;
    ml?: string;
    mr?: string;
  }

export const Button = styled.TouchableOpacity<ButtonInterface>`
  margin-top: ${({ mt }): string => (mt || '0px')};
  margin-left: ${({ ml }): string => (ml || '0px')};
  margin-right: ${({ mr }): string => (mr || '0px')};
  margin-bottom: ${({ mb }): string => (mb || '0px')};
  width: 200px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;


export const ButtonIcon = styled.TouchableOpacity<ButtonInterface>`
  margin-top: ${({ mt }): string => (mt || '0px')};
  margin-left: ${({ ml }): string => (ml || '0px')};
  margin-right: ${({ mr }): string => (mr || '0px')};
  margin-bottom: ${({ mb }): string => (mb || '0px')};
  width: 170px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 15px; 
  justify-content: center;
  align-items: center;
`;
