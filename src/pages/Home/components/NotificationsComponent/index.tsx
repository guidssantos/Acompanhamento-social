import { View, Text } from 'react-native';
import styled from './styles';
import { BadgeIcon } from '../../../../components/BadgeIcon';
import { Button } from '../../../../components/Button';

interface NotificationsComponentProps {
    title: string;
    titleColor: string;
    backgroundColor?: string;
    titleSize?: number;
}

export const NotificationsComponent = ({ title, titleColor, titleSize, backgroundColor}: NotificationsComponentProps) => {
return(
    <View style={{backgroundColor: backgroundColor}} >
        <View style={{padding: 2}}>
            <View style={styled.headerContainer}>
                <Text style={[styled.headerTitle, {color: titleColor, fontSize: titleSize}]}>{title}</Text>
            </View>
            <Button 
            paddingButton={12}
            iconSize={20}
            textSize={14} icon='arrow-right' 
            iconColor='#E2773B'
            >
                    Nesse mês ainda teremos 6 auxílios gás 
                    para entregar e 2 visitas de acompanhamento para agendar        
                </Button>
        </View>
    </View>
)
};
