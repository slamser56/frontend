import styled from 'styled-components/native';
import constantColors from './constantColors';

interface TextInterface {
  fontSize?: number;
  color?: string;
  mb?: number;
  mt?: number;
  ml?: number;
  mr?: number;
  textAlign?: string;
}

const Text = styled.Text<TextInterface>`
  text-align: ${({ textAlign }): string => textAlign || 'center'};
  color: ${({ color }): string => color || constantColors.black};
  font-size: ${({ fontSize }): number => fontSize || 30}px;
  margin-top: ${({ mt }): number => mt || 0}px;
  margin-left: ${({ ml }): number => ml || 0}px;
  margin-right: ${({ mr }): number => mr || 0}px;
  margin-bottom: ${({ mb }): number => mb || 0}px;
`;

export default Text;
