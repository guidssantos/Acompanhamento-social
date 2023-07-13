import {  Text, View } from 'react-native';
import styled from './styles';
import { Button } from '../../components/Button';
import { Logout } from '../../services/firebaseConnection';
import { HeaderUser } from '../../components/HeaderUser';
import { Container } from '../../components/Container';
import { BottomNav } from '../../components/BottomNav';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { CardComponent } from './components/CardComponent';
import { EventsComponent } from './components/EventsComponent';


export const Home = ({navigation}) => {

    const [user, setUser] = useState({name: '', email: ''})

    useEffect(() => {
    AsyncStorage.getItem('user', (err, result) => {
        const {user} = JSON.parse(result)
        console.log(result, "RESULTADO!!")
        setUser({name: user.displayName, email: user.email})
    })
    }, [])

    console.log(user, "USER")

    return(
        <Container>
            <HeaderUser user={user}/>
            <View style={styled.cardContainer}>
                <CardComponent 
                iconSize={30} icon='address-book' title='Acompanhamento' 
                titleColor='white' backgroundColor='#E2773B'
                numberTitle='116' numberDescription='Familias em acompanhamento'
                />
                <CardComponent 
                iconSize={30} icon='edit' title='Relatórios' 
                titleColor='black' backgroundColor='white'
                numberTitle='12' numberDescription='Relatórios com atualizações'
                />
            </View>
            <View style={styled.eventCardContainer}>
             <EventsComponent 
             icon='calendar' iconSize={30} backgroundColor='white' 
             title='Eventos com ações necessarias'
             />
            </View>
          <Button onPress={() => {
            navigation.replace('Login')
            Logout()}}>Sair</Button>
            {/* <BottomNav/> */}
        </Container>
    )
};
