import styled from 'styled-components/native';

interface TextInterface {
  fontSize?: string;
  color?: string;
  mb?: string;
  mt?: string;
}

interface ContainerInterface {
  backgroundColor?: string;
}

export const Text = styled.Text<TextInterface>`
  text-align: center;
  color: ${({ color }):string => (color || '#000')};
  font-size: ${({ fontSize }): string => (fontSize || '30px')};
  margin-bottom: ${({ mb }): string => (mb || '0px')};
  margin-top: ${({ mt }): string => (mt || '0px')};
`;

export const Container = styled.View<ContainerInterface>`
  flex: 1;
  background-color: ${({ backgroundColor }):string => (backgroundColor || '#fff')};
  justify-content: center;
  align-items: center;
`;

export const ContainerScroll = styled.ScrollView<ContainerInterface>`
  flex: 1;
  background-color: ${(attr) => (attr.backgroundColor ? attr.backgroundColor : '#fff')};
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
  alignItems: 'center',
});

export const Input = styled.TextInput({
  background: '#C2C2C2',
  borderRadius: '10px',
  fontSize: '25px',
  height: '50px',
  width: '200px',
  marginBottom: '20px',
});
