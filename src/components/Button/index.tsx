import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

interface ButtonProps {
  children: string | number;
  onPress: () => void;
}

export const Button = ({ onPress, children }) => {
    return(
        <TouchableOpacity style={styles.botao} onPress={onPress}>
      <Text style={styles.textoBotao}>{children}</Text>

    </TouchableOpacity>
    )
};
