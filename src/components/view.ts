import styled from 'styled-components/native';
import constantColors from './constantColors';

interface ContainerInterface {
  backgroundColor?: string;
  width?: number;
  height?: number;
  flex?: number;
}

export const Panel = styled.View<ContainerInterface>`
  flex: ${({ flex }): number => flex || 1};
  background-color: ${constantColors.light};
  shadow-color: ${constantColors.black};
  width: 100%;
  flex-direction: column;
  shadow-opacity: 0.43;
  shadow-radius: 9.51px;
  elevation: 15;
`;

export const Container = styled.View<ContainerInterface>`
  flex: 1;
  flex-direction: column;
  background-color: ${({ backgroundColor }): string => backgroundColor || constantColors.transparent};
  justify-content: center;
  align-items: center;
`;

export const ContainerFixed = styled.View<ContainerInterface>`
  flex: ${({ flex }): number => flex || 1};
  background-color: ${({ backgroundColor }): string => backgroundColor || constantColors.transparent};
`;

export const ContainerRow = styled.View<ContainerInterface>`
  flex-direction: row;
  flex: ${({ flex }): number => flex || 1};
`;

export const ContainerScroll = styled.ScrollView<ContainerInterface>`
  flex: ${({ flex }): number => flex || 1};
  background-color: ${({ backgroundColor }): string => backgroundColor || constantColors.transparent};
  width: 100%;
`;
