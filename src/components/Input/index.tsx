import { TextInput, HelperText } from 'react-native-paper';
import styled from './styles';
import { useState } from 'react';
import {View, Text} from 'react-native'

interface InputProps {
label: string;
value: string;
onChangeText: (any) => void;
secureTextEntry?: boolean;
error: string | boolean;
messageError: string;
placeholder: string;
}


export const Input = ({ label, value, onChangeText, secureTextEntry, error, messageError, placeholder }: InputProps) => {
    const [secureMode, setSecureMode] = useState(secureTextEntry);


    return(
        <View>
        <TextInput
            label={label}
            value={value}
            error={error}
            placeholder={placeholder}
            secureTextEntry={secureMode}
            onChangeText={onChangeText}
            style={styled.text}
            outlineStyle={styled.input}
            theme={{
                colors: {
                    onSurfaceVariant: 'white'
                
                }
            }}
            mode="outlined"
            activeOutlineColor='white'
            textColor='white'
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
        </View>
    )
};
