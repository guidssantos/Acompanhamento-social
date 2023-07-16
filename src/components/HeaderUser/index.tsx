import { Avatar, Badge, IconButton, MD3Colors } from 'react-native-paper';
import styled from './styles';
import { useState, useEffect } from 'react';
import {View, Text} from 'react-native'
import { InputAvatar } from '../Avatar';
import Icon from 'react-native-vector-icons/FontAwesome';
import { BadgeIcon } from '../BadgeIcon';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const HeaderUser = () => {
    
const [user, setUser] = useState({name: '', email: ''})

    useEffect(() => {
    AsyncStorage.getItem('user', (err, result) => {
        const {user} = JSON.parse(result)
        console.log(result, "RESULTADO!!")
        setUser({name: user?.displayName, email: user?.email})
    })
    }, [])


    return(
        <View style={styled.container}>
            <View style={styled.userInfoContainer}>
            <InputAvatar typeAvatar='text' size={60} label='GD'/>
                <View style={styled.textContainer}>
                    <Text style={styled.text}>{user?.name}</Text>
                    <Text style={styled.text}>{user?.email}</Text>
                </View>
            </View>
            <BadgeIcon icon='bell-o' badge iconSize={30} color='white' badgeValue={5} onPress={() => console.log('teste')}/>
        </View>
    )
};
