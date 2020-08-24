import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #feffff;
  align-items: center;
  justify-content: center;
`;

const Loading = () => {
  return (
    <Container>
      <ActivityIndicator color="#D3D3D3" size="large" />
    </Container>
  );
};

export default Loading;
