import { Avatar, Badge, IconButton, MD3Colors } from 'react-native-paper';
import styled from './styles';
import { useState } from 'react';
import {View, Text} from 'react-native'
import { InputAvatar } from '../Avatar';
import Icon from 'react-native-vector-icons/FontAwesome';
import { BadgeIcon } from '../BadgeIcon';



interface HeaderUserProps {
label: string;
value: string;
onChangeText: (any: any) => void;
secureTextEntry?: boolean;
error: boolean;
messageError: string;
placeholder: string;
}


export const HeaderUser = ({ label, value, onChangeText, secureTextEntry, error, messageError, placeholder }: HeaderUserProps) => {


    return(
        <View style={styled.container}>
            <View style={styled.userInfoContainer}>
            <InputAvatar typeAvatar='text' size={60} label='GD'/>
                <View style={styled.textContainer}>
                    <Text style={styled.text}>Guilherme dos Santos</Text>
                    <Text style={styled.text}>teste@teste.com</Text>
                </View>
            </View>
            <BadgeIcon icon='bell-o' badge iconSize={30} color='white' badgeValue={5} onPress={() => console.log('teste')}/>
        </View>
    )
};
