import styled from 'styled-components/native';

interface TextInputInterface {
  mb?: string;
  mt?: string;
}

export const Input = styled.TextInput`
  background: #C2C2C2;
  border-radius: 10px;
  font-size: 25px;
  height: 50px;
  width: 200px;
  margin-bottom: 20px;
`;

export const InputMultiline = styled.TextInput<TextInputInterface>`
background: rgba(0,0,0,0.1);
width: 100%;
min-height: 100px;
margin-top: ${({ mt }): string => (mt || '0px')};
`;
