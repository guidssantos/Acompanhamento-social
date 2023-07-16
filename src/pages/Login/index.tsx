import { View, Text } from 'react-native';
import * as Styled from './styles';
import { useEffect, useState } from 'react';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { auth } from '../../config/firebase';
import { SignIn } from '../../services/firebaseConnection';
import { changeData, checkIfYouHaveEntryEmpty } from '../../utils/comum';
import { entrys } from './entrys';
import { Alert } from '../../components/Alert';

export const Login = ({ navigation }) => {

const [data, setData] = useState({
    email: '',
    password: ''
   })
const [statusError, setStatusError] = useState <boolean>();
const [messageError, setMessageError] = useState('');
const [loading, setLoading] = useState(true);

 useEffect(() => {
    const userState = auth.onAuthStateChanged( user => {
      if(user){
        navigation.replace('Principal')
      }
      setLoading(false)
    })
    return () => userState();
  },[])

  async function realizarLogin(){
    // funcao para verificar se email ou senha sao vazios
    if(checkIfYouHaveEntryEmpty(data, setData)) return
    
    const result = await SignIn(data.email, data.password)
    if(result == 'erro'){
      setStatusError(true)
      setMessageError('E-mail ou senha não conferem')
      return
    }
    navigation.replace('Principal')
  }

  if(loading) {
    return (
      <View>
        <Text>carregando...</Text>
      </View>
    )
  }

    return(
        <Styled.Wrapper>
        <Styled.InputWrapper>
        {entrys.map((entry) => {
          return (
            <Input
              key={entry.id}
              {...entry}
              value={data[entry.name]}
              onChangeText={valor => changeData(entry.name, valor, data, setData)}
            />  
          )
        })
      }
        
            <Button 
            paddingButton={10}
            onPress={() => realizarLogin()}>LOGIN</Button>
        </Styled.InputWrapper>
        <Alert 
            message={messageError}
            error={statusError}
            setError={setStatusError}
        />
        </Styled.Wrapper>
    )
};
