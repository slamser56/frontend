import styled from 'styled-components/native';

interface TextInterface {
    fontSize?: string;
    color?: string;
    mb?: string;
    mt?: string;
    textAlign?: string;
  }

  interface TextPanelInterface {
    top?: string;
  }

export const Text = styled.Text<TextInterface>`
  text-align: ${({ textAlign }): string => (textAlign || 'center')};
  color: ${({ color }): string => (color || '#000')};
  font-size: ${({ fontSize }): string => (fontSize || '30px')};
  margin-bottom: ${({ mb }): string => (mb || '0px')};
  margin-top: ${({ mt }): string => (mt || '0px')};
`;


export const TextPanel = styled.Text<TextPanelInterface>`
  top: ${({ top }): string => (top || '0px')};
  font-size: 20px;
  left: 10px;
`;
