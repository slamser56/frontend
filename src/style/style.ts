import styled from 'styled-components/native';
interface Colored {
  size: string;
  color: string;
}

export const TextColored = styled.Text<Colored>`
  height: 50px;
  width: 270px;
  text-align: center;
  color: ${(attr) => attr.color};
  font-size: ${(attr) => attr.size};
  margin-bottom: 20px;
`;
