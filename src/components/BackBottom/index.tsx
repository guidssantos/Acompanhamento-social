import React from 'react';
import styled from './styles';

import { HeaderUser } from '../../components/HeaderUser';
import { Container } from '../../components/Container';
import { View, Text } from 'react-native';
import { BadgeIcon } from '../BadgeIcon';
import { useNavigation } from '@react-navigation/native';

export const BackBottom = ({  title }) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };


  return (
    <View style={{marginVertical: 20}}>
      <View style={styled.backContainer}>
      <BadgeIcon icon='arrow-left' iconSize={20} color='white' onPress={handleGoBack} />
        <Text style={[styled.textStyles]}>{title}</Text>
      </View>
    </View>
  );
};
