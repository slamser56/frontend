import styled from 'styled-components/native';

export const Container = styled.View({
  flex: '1',
  backgroundColor: '#fff',
  justifyContent: 'center',
  alignItems: 'center',
});

export const Text = styled.Text({
  color: '#000',
  textAlign: 'center',
  marginBottom: 30,
  fontSize: 30,
});

export const Button = styled.TouchableOpacity({
  color: '#f194ff',
  width: 200,
  height: 50,
  backgroundColor: '#C2C2C2',
  borderRadius: 15,
  justifyContent: 'center',
});

export const TextButton = styled.Text({
  color: '#000',
  textAlign: 'center',
  fontSize: 20,
});
