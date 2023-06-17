import { TextInput, HelperText } from 'react-native-paper';
import styled from './styles';
import { useState } from 'react';
import {View, Text} from 'react-native'

export const Input = ({ label, value, onChangeText, secureTextEntry, error, messageError }) => {
    const [secureMode, setSecureMode] = useState(secureTextEntry);


    return(
        <View>
        <TextInput
            label={label}
            value={value}
            error={error}
            placeholder='teste'
            secureTextEntry={secureMode}
            onChangeText={onChangeText}
            style={styled.text}
            outlineStyle={styled.input}
            theme={{
                colors: {
                    onSurfaceVariant: '#E2773B'
                }
            }}
            mode="outlined"
            activeOutlineColor='#E2773B'
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
