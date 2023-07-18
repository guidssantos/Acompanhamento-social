import { TextInput, HelperText } from 'react-native-paper';
import styled from './styles';
import { useState } from 'react';
import {View, Text, StatusBar} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

interface ContainerProps {
children: any;
}


export const Container = ({ children }: ContainerProps) => {

    return(
        <SafeAreaView edges={['top']}  style={{ flex: 1, backgroundColor: '#162231', paddingHorizontal: 15  }}>
                {children}
        </SafeAreaView>
    )
};
