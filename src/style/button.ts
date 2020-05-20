import styled from 'styled-components/native';

interface ButtonIconInterface {
    top?: string;
    left?: string;
  }

export const Button = styled.TouchableOpacity({
  color: '#f194ff',
  width: 200,
  height: 50,
  backgroundColor: '#C2C2C2',
  borderRadius: 15,
  justifyContent: 'center',
  alignItems: 'center',
});

export const ButtonIcon = styled.TouchableOpacity<ButtonIconInterface>`
  margin-top: ${({ top }): string => (top || '0px')};
  margin-left: ${({ left }): string => (left || '0px')};
  width: 170px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 15px;
`;
