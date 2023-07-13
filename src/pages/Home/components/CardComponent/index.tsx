import { View, Text } from 'react-native';
import styled from './styles';
import { BadgeIcon } from '../../../../components/BadgeIcon';

interface CardComponentProps {
    title: string;
    titleColor: string;
    backgroundColor: string;
    icon: string;
    iconSize: number;
    numberTitle: number | string;
    numberDescription: string;
}

export const CardComponent = ({ title, titleColor, backgroundColor, icon, iconSize, numberTitle, numberDescription}: CardComponentProps) => {
return(
    <View style={[styled.container, {backgroundColor: backgroundColor}]}>
        <View style={styled.headerContainer}>
            <BadgeIcon  icon={icon} iconSize={iconSize} color={titleColor}/>
            <Text style={[styled.headerTitle, {color: titleColor}]}>{title}</Text>
        </View>
        <Text style={[styled.numberTitle, {color: titleColor}]}>{numberTitle}</Text>
        <Text style={[styled.numberDescription, {color: titleColor}]}>{numberDescription}</Text>
    </View>
)
};
