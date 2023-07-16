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
import { NotificationsComponent } from './components/NotificationsComponent';


export const Home = ({navigation}) => {

    return(
        <Container>
            <HeaderUser />
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
            <View style={styled.eventCardContainer}>
             <NotificationsComponent 
             titleSize={17}
             titleColor='white'
             title='Notificações'
             />
            </View>
          <Button
            paddingButton={5}
            onPress={() => {
            navigation.replace('Login')
            Logout()}}>Sair</Button>
            {/* <BottomNav/> */}
        </Container>
    )
};
