import styled from 'styled-components/native';

interface TextInterface {
  fontSize?: string;
  color?: string;
  marginBottom?: string;
  colorChange?: boolean;
}

interface ContainerInterface {
  backgroundColor?: string;
}

export const Text = styled.Text<TextInterface>`
  text-align: center;
  color: ${(attr) => (attr.color ? attr.color : '#000')};
  font-size: ${(attr) => (attr.fontSize ? attr.fontSize : '30px')};
  margin-bottom: ${(attr) => (attr.marginBottom ? attr.marginBottom : '0px')};
`;

export const Container = styled.View<ContainerInterface>`
  flex: 1;
  background-color: ${(attr) =>
    attr.backgroundColor ? attr.backgroundColor : '#fff'};
  justify-content: center;
  align-items: center;
`;

export const Button = styled.TouchableOpacity({
  color: '#f194ff',
  width: 200,
  height: 50,
  backgroundColor: '#C2C2C2',
  borderRadius: 15,
  justifyContent: 'center',
});
