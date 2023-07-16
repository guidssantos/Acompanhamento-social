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
  paddingButton: string;
  positionIcon?: "left" | "right";
  backgroundColor?: string;
  borderRadius?: string;
}

export const FollowUpButton = ({ onPress, children, badgeValue, textSize, icon, iconSize, iconColor, paddingButton, positionIcon = 'right', backgroundColor = "#33384e", borderRadius }) => {
    return(
        <TouchableOpacity style={[styled.botao, {padding: paddingButton, backgroundColor: backgroundColor, borderRadius: borderRadius}]} onPress={onPress}>
          <View style={styled.textContainer}>
          {badgeValue && (
            <Badge size={22} style={styled.badgeStyle} >{badgeValue}</Badge>
            )}
            {icon && positionIcon === 'left' && (
            <Icon name={icon} size={iconSize} color={iconColor} />
          )}
            <Text  style={[styled.textoBotao, {fontSize: textSize}]}>{children}</Text>
          {icon && positionIcon === 'right' && (
            <Icon name={icon} size={iconSize} color={iconColor} />
          )}
          </View>

    </TouchableOpacity>
    )
};
