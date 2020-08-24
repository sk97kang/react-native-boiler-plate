import React from 'react';
import { ImageSourcePropType } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
  flex: 1;
  border-bottom-width: 1px;
  border-color: #929292;
  padding-top: 8px;
  padding-bottom: 8px;
  align-items: center;
  justify-content: center;
`;

const Label = styled.Text`
  font-size: 16px;
  color: #929292;
  text-align: center;
`;

const TabImage = styled.Image``;

interface Props {
  selected: boolean;
  label?: string;
  imageSource?: ImageSourcePropType;
  onPress?: () => void;
}

const Tab = ({ selected, label, imageSource, onPress }: Props) => {
  let color: string = selected ? '#292929' : '#929292';

  return (
    <Container
      activeOpacity={1}
      style={{ borderColor: color }}
      onPress={onPress}>
      {label && <Label style={{ color: color }}>{label}</Label>}
      {imageSource && <TabImage source={imageSource} />}
    </Container>
  );
};

export default Tab;
