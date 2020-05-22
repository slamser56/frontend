import styled from 'styled-components/native';

interface TextInputInterface {
  mb?: number;
  mt?: number;
}

export const Input = styled.TextInput`
  background: #c2c2c2;
  border-radius: 10px;
  font-size: 25px;
  height: 50px;
  width: 200px;
  margin-bottom: 20px;
`;

export const InputNewPost = styled.TextInput<TextInputInterface>`
  background: rgba(0, 0, 0, 0.1);
  width: 100%;
  min-height: 100px;
  margin-top: ${({ mt }): number => mt || 0}px;
`;
