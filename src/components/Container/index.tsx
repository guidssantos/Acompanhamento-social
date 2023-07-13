import { TextInput, HelperText } from 'react-native-paper';
import styled from './styles';
import { useState } from 'react';
import {View, Text, StatusBar} from 'react-native'

interface ContainerProps {
children: any;
}


export const Container = ({ children }: ContainerProps) => {
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor('transparent');

    return(
        <View style={{ flex: 1, paddingTop: StatusBar.currentHeight, backgroundColor: '#162231' }}>
            {children}
        </View>
    )
};
