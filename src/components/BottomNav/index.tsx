import { BottomNavigation } from 'react-native-paper';
import {useState} from 'react'
import styled from './styles';
import {View, Text} from 'react-native'
import { Container } from '../Container';


const MusicRoute = () => <Text >Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const NotificationsRoute = () => <Text>Notifications</Text>;


export const BottomNav = () => {

     const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'home', title: 'Home', focusedIcon: 'home'},
    { key: 'albums', title: 'Acompanhamento', focusedIcon: 'album', color: '#FFFF' },
    { key: 'recents', title: 'Relatórios', focusedIcon: 'history' },
    { key: 'notifications', title: 'Eventos', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    notifications: NotificationsRoute,
  });

    return(
            <BottomNavigation
            barStyle={{backgroundColor: '#162231', borderTopColor: "#505965", borderTopWidth: 2}}
            inactiveColor='#000000'
            activeColor='#E2773B'

              navigationState={{ index, routes }}
              onIndexChange={setIndex}
              renderScene={renderScene}
            />
    )
};
