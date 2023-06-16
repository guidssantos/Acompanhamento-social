import {  Text } from 'react-native';
import * as Styled from './styles';
import { Button } from '../../components/Button';
import { Logout } from '../../services/firebaseConnection';


export const Home = ({navigation}) => {


    return(
        <Styled.Wrapper>
          <Text>Teste</Text>
          <Button onPress={() => {
            navigation.replace('Login')
            Logout()}}>Sair</Button>
        </Styled.Wrapper>
    )
};
