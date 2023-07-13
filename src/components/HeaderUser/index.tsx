import { Avatar, Badge, IconButton, MD3Colors } from 'react-native-paper';
import styled from './styles';
import { useState } from 'react';
import {View, Text} from 'react-native'
import { InputAvatar } from '../Avatar';
import Icon from 'react-native-vector-icons/FontAwesome';
import { BadgeIcon } from '../BadgeIcon';



interface HeaderUserProps {
user: {name: string, email: string};
}


export const HeaderUser = ({ user }: HeaderUserProps) => {


    return(
        <View style={styled.container}>
            <View style={styled.userInfoContainer}>
            <InputAvatar typeAvatar='text' size={60} label='GD'/>
                <View style={styled.textContainer}>
                    <Text style={styled.text}>{user.name}</Text>
                    <Text style={styled.text}>{user.email}</Text>
                </View>
            </View>
            <BadgeIcon icon='bell-o' badge iconSize={30} color='white' badgeValue={5} onPress={() => console.log('teste')}/>
        </View>
    )
};
