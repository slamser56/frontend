import styled from 'styled-components/native';

interface ButtonInterface {
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
}

export const Button = styled.TouchableOpacity<ButtonInterface>`
  margin-top: ${({ mt }): number => mt || 0}px;
  margin-left: ${({ ml }): number => ml || 0}px;
  margin-right: ${({ mr }): number => mr || 0}px;
  margin-bottom: ${({ mb }): number => mb || 0}px;
  width: 200px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;

export const ButtonIcon = styled.TouchableOpacity<ButtonInterface>`
  margin-top: ${({ mt }): number => mt || 0}px;
  margin-left: ${({ ml }): number => ml || 0}px;
  margin-right: ${({ mr }): number => mr || 0}px;
  margin-bottom: ${({ mb }): number => mb || 0}px;
  width: 170px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;
