import { Avatar } from 'react-native-paper';
import styled from './styles';
import { useState } from 'react';
import {View, Text} from 'react-native'
import { AvatarImageSource } from 'react-native-paper/lib/typescript/src/components/Avatar/AvatarImage';

interface InputAvatarProps {
typeAvatar: 'icon' | 'image' | 'text';
size: number;
icon?: string;
imageUrl?: AvatarImageSource;
label?: string; 
}


export const InputAvatar = ({ typeAvatar, size, icon, imageUrl, label }: InputAvatarProps) => {


    return(
        <View>
            {typeAvatar === 'icon' && (
                <Avatar.Icon size={size} icon={icon}  />
            )}
            {typeAvatar === 'image' && (
                <Avatar.Image size={size} source={imageUrl} />
            )}
            {typeAvatar === 'text' && (
                <Avatar.Text size={size} label={label} />
            )}
        </View>
    )
};
