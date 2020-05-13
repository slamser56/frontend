import styled from 'styled-components/native';

export const Container = styled.View({
  flex: '1',
  backgroundColor: '#fff',
  justifyContent: 'center',
  alignItems: 'center',
});

export const Title = styled.Text({
  height: '50px',
  width: '270px',
  textAlign: 'center',
  color: '#000',
  fontSize: '30px',
  marginBottom: '20px',
});

export const Input = styled.TextInput({
  background: '#C2C2C2',
  borderRadius: '10px',
  fontSize: '25px',
  height: '50px',
  width: '200px',
  marginBottom: '20px',
});

export const Button = styled.Button({
  background: 'palevioletred',
  height: '50px',
  width: '50px',
});
