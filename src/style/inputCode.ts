import styled from 'styled-components/native';

export const Container = styled.View({
  flex: '1',
  backgroundColor: '#fff',
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

export const Button = styled.TouchableOpacity({
  color: '#f194ff',
  width: 200,
  height: 50,
  backgroundColor: '#C2C2C2',
  borderRadius: 15,
  justifyContent: 'center',
});
