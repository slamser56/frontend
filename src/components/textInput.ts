import styled from 'styled-components/native';
import constantColors from './constantColors';

interface TextInputInterface {
  mb?: number;
  mt?: number;
  ml?: number;
  mr?: number;
  fontSize?: number;
  color?: string;
  width?: number;
  height?: number;
}

export const Input = styled.TextInput<TextInputInterface>`
  background: ${constantColors.gray};
  border-radius: 10px;
  font-size: 25px;
  width: ${({ width }): number => width || 80}%;
  height: ${({ height }): number => height || 5}%;
  text-align: center;
  margin-top: ${({ mt }): number => mt || 0}px;
  margin-left: ${({ ml }): number => ml || 0}px;
  margin-right: ${({ mr }): number => mr || 0}px;
  margin-bottom: ${({ mb }): number => mb || 0}px;
`;

export const InputNewPost = styled.TextInput<TextInputInterface>`
  background: ${constantColors.whiteGray};
  min-height: 20%;
  width: ${({ width }): number => width || 100}%;
  margin-top: ${({ mt }): number => mt || 0}px;
  margin-left: ${({ ml }): number => ml || 0}px;
  margin-right: ${({ mr }): number => mr || 0}px;
  margin-bottom: ${({ mb }): number => mb || 0}px;
`;
