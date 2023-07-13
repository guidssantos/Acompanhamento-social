import { Avatar, Badge, IconButton, MD3Colors } from 'react-native-paper';
import styled from './styles';
import {View, Text, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';



interface BadgeIconProps {
icon: string;
badge?: boolean;
iconSize: number;
color?: string;
badgeValue?: number;
onPress?: () => void;
}


export const BadgeIcon = ({ icon, badge, iconSize, color, badgeValue, onPress }: BadgeIconProps) => {


    return(
        <TouchableOpacity  onPress={onPress}>
            <Icon name={icon} size={iconSize} color={color} />
            {badge && (
                <Badge size={18} style={styled.badge}>{badgeValue}</Badge>
            )}
        </TouchableOpacity>
    )
};
