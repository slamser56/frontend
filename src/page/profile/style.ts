import styled from 'styled-components/native';

interface TextPanelInterface {
  top?: string;
}

interface ButtonIconInterface {
  top?: string;
  left?: string;
}

export const TextPanel = styled.Text<TextPanelInterface>`
  top: ${({ top }):string => (top || '0px')};
  font-size: 20px;
  left: 10px;
`;

export const ButtonIcon = styled.TouchableOpacity<ButtonIconInterface>`
  margin-top: ${({ top }):string => (top || '0px')};
  margin-left: ${({ left }):string => (left || '0px')};
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

export const Panel = styled.View({
  position: 'absolute',
  top: 0,
  width: '100%',
  height: 200,
  backgroundColor: 'rgb(244, 244, 244)',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 7,
  },
  shadowOpacity: 0.43,
  shadowRadius: 9.51,
  elevation: 15,
});

export const Avatar = styled.Image`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: #000;
`;
