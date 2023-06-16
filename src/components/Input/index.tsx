import { TextInput, HelperText } from 'react-native-paper';
import * as Styled from './styles';
import { useState } from 'react';

export const Input = ({ label, value, onChangeText, secureTextEntry, error, messageError }) => {
    const [secureMode, setSecureMode] = useState(secureTextEntry);

    return(
        <Styled.Wrapper>
        <TextInput
            label={label}
            value={value}
            error={error}
            secureTextEntry={secureMode}
            onChangeText={onChangeText}
            // style={estilos.input}
            mode="outlined"
            activeOutlineColor='#1E8187'
            right={
            secureTextEntry ?
            <TextInput.Icon
                icon={secureMode ? 'eye-off' : 'eye'}
                onPress={() => setSecureMode(!secureMode)}
            /> : null
            }
      />
      {error && <HelperText type="error" visible={error}>
        {messageError}
      </HelperText>}
        </Styled.Wrapper>
    )
};
