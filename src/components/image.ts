import styled from 'styled-components/native';
import constantColors from './constantColors';

interface ImageInterface {
  mb?: number;
  mt?: number;
  ml?: number;
  mr?: number;
  width?: number;
  height?: number;
  borderRadius?: number;
}

const Avatar = styled.Image<ImageInterface>`
  width: ${({ width }): number => width || 100}px;
  height: ${({ height }): number => height || 100}px;
  border-radius: ${({ borderRadius }): number => borderRadius || 50}px;
  background-color: ${constantColors.transparent};
  margin-top: ${({ mt }): number => mt || 0}px;
  margin-left: ${({ ml }): number => ml || 0}px;
  margin-right: ${({ mr }): number => mr || 0}px;
  margin-bottom: ${({ mb }): number => mb || 0}px;
`;

export default Avatar;
