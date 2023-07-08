import {  Text, View } from 'react-native';
import * as Styled from './styles';
import { Button } from '../../components/Button';
import { Logout } from '../../services/firebaseConnection';
import { HeaderUser } from '../../components/HeaderUser';
import { Container } from '../../components/Container';
import { BottomNav } from '../../components/BottomNav';


export const Home = ({navigation}) => {

    return(
        <Container>
            <HeaderUser/>
          <Text>Teste</Text>
          <Button onPress={() => {
            navigation.replace('Login')
            Logout()}}>Sair</Button>
            <BottomNav/>
        </Container>
    )
};
