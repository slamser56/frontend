import styled from 'styled-components/native';
import constantColors from './constantColors';

interface TextInputInterface {
  mb?: number;
  mt?: number;
}

export const Input = styled.TextInput<TextInputInterface>`
  background: ${constantColors.gray};
  border-radius: 10px;
  font-size: 25px;
  height: 50px;
  width: 200px;
  margin-bottom: ${({ mb }): number => mb || 0}px;
`;

export const InputNewPost = styled.TextInput<TextInputInterface>`
  background: ${constantColors.whiteGray};
  width: 100%;
  min-height: 100px;
  margin-top: ${({ mt }): number => mt || 0}px;
`;
