import { View, Text } from 'react-native';
import styled from './styles';
import { BadgeIcon } from '../../../../components/BadgeIcon';
import { Button } from '../../../../components/Button';

interface EventsComponentProps {
    title: string;
    titleColor: string;
    backgroundColor: string;
    icon: string;
    iconSize: number;
}

export const EventsComponent = ({ title, titleColor, backgroundColor, icon, iconSize }: EventsComponentProps) => {
return(
    <View style={[styled.container, {backgroundColor: backgroundColor}]}>
        <View style={styled.headerContainer}>
            <BadgeIcon  icon={icon} iconSize={iconSize} color={titleColor}/>
            <Text style={[styled.headerTitle, {color: titleColor}]}>{title}</Text>
        </View>
        <Text style={styled.dateTitle}>12/02/2023</Text>
        <View style={styled.buttonContainer}>
        <Button 
            badgeValue={5} textSize={12} icon='arrow-right' 
            iconSize={22}  iconColor='#E2773B'
            >
            Famílias aguardam o envio do auxilio gás
        </Button>
        <Button 
            badgeValue={5} textSize={12} icon='arrow-right' 
            iconSize={22}  iconColor='#E2773B'
            >
            Famílias aguardam o envio do auxilio gás
        </Button>
        </View>
    </View>
)
};
