import styled from 'styled-components/native';
import constantColors from './constantColors';

interface ButtonInterface {
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  width?: number;
  height?: number;
}

const Button = styled.TouchableOpacity<ButtonInterface>`
  margin-top: ${({ mt }): number => mt || 0}px;
  margin-left: ${({ ml }): number => ml || 0}px;
  margin-right: ${({ mr }): number => mr || 0}px;
  margin-bottom: ${({ mb }): number => mb || 0}px;
  width: ${({ width }): number => width || 200}px;
  height: ${({ height }): number => height || 50}px;
  background-color: ${constantColors.gray};
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;


export default Button;