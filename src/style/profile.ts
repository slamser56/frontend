import styled from 'styled-components/native';

interface TextPanelInterface {
  top?: string;
}

interface ButtonIconInterface {
  top?: string;
  left?: string;
}

export const TextPanel = styled.Text<TextPanelInterface>`
  top: ${(attr) => (attr.top ? attr.top : '0px')};
  font-size: 20px;
  left: 10px;
`;

export const ButtonIcon = styled.TouchableOpacity<ButtonIconInterface>`
  margin-top: ${(attr) => (attr.top ? attr.top : '0px')};
  margin-left: ${(attr) => (attr.left ? attr.left : '10px')};
  width: 170px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 15px;
`;

export const ButtonPanel = styled.View`
  top: 70px;
  width: 100%;
  flex: 1;
  flex-direction: row;
`;

export const Panel = styled.View`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 200px;
  background-color: rgb(244, 244, 244);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const Avatar = styled.Image`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: #000;
`;
