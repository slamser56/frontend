import styled from 'styled-components/native';

interface ContainerInterface {
  backgroundColor?: string;
}

export const Panel = styled.View`
  width: 100%;
  height: 200px;
  background-color: rgb(244, 244, 244);
  shadow-color: #000;
  shadow-opacity: 0.43;
  shadow-radius: 9.51px;
  elevation: 15;
`;

export const Container = styled.View<ContainerInterface>`
  flex: 1;
  background-color: ${({ backgroundColor }): string => backgroundColor || '#fff'};
  justify-content: center;
  align-items: center;
`;

export const ContainerFixed = styled.View<ContainerInterface>`
background-color: ${({ backgroundColor }): string => backgroundColor || 'rgba(0,0,0,0)'};
`;

export const ContainerRow = styled.View<ContainerInterface>`
justify-content: space-between;
flex-direction: row;
`;

export const ButtonPanel = styled.View`
  margin-top: 0px;
  width: 100%;
  flex: 1;
  flex-direction: row;
`;

export const ContainerScroll = styled.ScrollView<ContainerInterface>`
  flex: 1;
  background-color: ${({ backgroundColor }): string => backgroundColor || '#fff'};
  width: 90%;
`;
