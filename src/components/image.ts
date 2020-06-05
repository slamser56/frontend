import styled from 'styled-components/native';
import constantColors from './constantColors';

interface ImageInterface {
  mb?: number;
  mt?: number;
  ml?: number;
  mr?: number;
}

const Avatar = styled.Image<ImageInterface>`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: ${constantColors.black};
  margin-top: ${({ mt }): number => mt || 0}px;
  margin-left: ${({ ml }): number => ml || 0}px;
  margin-right: ${({ mr }): number => mr || 0}px;
  margin-bottom: ${({ mb }): number => mb || 0}px;
`;

export default Avatar;
