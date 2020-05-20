import styled from 'styled-components/native';

interface ContainerInterface {
    backgroundColor?: string;
  }

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

export const Container = styled.View<ContainerInterface>`
  flex: 1;
  background-color: ${({ backgroundColor }): string => (backgroundColor || '#fff')};
  justify-content: center;
  align-items: center;
`;

export const ButtonPanel = styled.View`
  top: 70px;
  width: 100%;
  flex: 1;
  flex-direction: row;
`;

export const ContainerScroll = styled.ScrollView<ContainerInterface>`
  flex: 1;
  background-color: ${({ backgroundColor }): string => (backgroundColor || '#fff')};
  justify-content: center;
  align-items: center;
`;
