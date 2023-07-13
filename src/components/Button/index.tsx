import { Text, TouchableOpacity, View } from 'react-native';
import styled from './styled';
import { Badge } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';


interface ButtonProps {
  children: string | number;
  onPress: () => void;
  badgeValue: number;
  textSize: number;
  icon: string;
  iconSize: number;
  iconColor: string;
}

export const Button = ({ onPress, children, badgeValue, textSize, icon, iconSize, iconColor }) => {
    return(
        <TouchableOpacity style={styled.botao} onPress={onPress}>
          <View style={styled.textContainer}>
          {badgeValue && (
            <Badge size={22} style={styled.badgeStyle} >{badgeValue}</Badge>
            )}
            <Text  style={[styled.textoBotao, {fontSize: textSize}]}>{children}</Text>
          {icon && (
            <Icon name={icon} size={iconSize} color={iconColor} />
          )}
          </View>

    </TouchableOpacity>
    )
};
