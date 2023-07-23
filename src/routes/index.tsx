import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Login } from '../pages/Login';
import { Home } from '../pages/Home';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text} from 'react-native'
import { FollowUp } from '../pages/FollowUp';
import { Report } from '../pages/Report';
import {Users} from '../pages/Users';
import { Register } from '../pages/Users/pages/Register';
import { ListingUsers } from '../pages/Users/pages/ListingUsers';
import { RegisterFollowUp } from '../pages/FollowUp/Register';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()

const HomeScreen = () => {
  return(
    <Tab.Navigator  initialRouteName='HomeStackScreen' screenOptions={{headerShown: false, tabBarActiveTintColor: '#E2773B', tabBarActiveBackgroundColor: '#162231', tabBarInactiveBackgroundColor: '#162231', tabBarInactiveTintColor: '#000000'}}>
      <Tab.Screen name='HomeStackScreen' component={HomeStackScreen} options={{title: 'Home', tabBarIcon: ({size, color}) => (
        <Icon name='home' size={size} color={color} />
      )}}/>
      <Tab.Screen name='FollowUpStackScreen' component={FollowUpStackScreen} options={{title: 'Acompanhamento', tabBarIcon: ({size, color}) => (
        <Icon name='address-book' size={size} color={color} />
      )}}/>
      <Tab.Screen name='ReportStackScreen' component={ReportStackScreen} options={{title: 'Relatorios' , tabBarIcon: ({size, color}) => (
        <Icon name='edit' size={size} color={color} />
      )}}/>
      <Tab.Screen name='UsersStackScreen' component={UsersStackScreen} options={{title: 'Usuários', tabBarIcon: ({size, color}) => (
        <Icon name='user' size={size} color={color} />
      )}}/>
      {/* <Tab.Screen name='Calendario' component={() => <Text>teste</Text>} options={{title: 'Calendario', tabBarIcon: ({size, color}) => (
        <Icon name='calendar' size={size} color={color} />
      )}}/> */}
    </Tab.Navigator>
  )
}

const HomeStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}

const FollowUpStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Acompanhamento' component={FollowUp} options={{headerShown: false}} />
      <Stack.Screen name='RegisterFollowUp' component={RegisterFollowUp} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}

const ReportStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Relatorios' component={Report} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}

const UsersStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Usuários' component={Users} options={{headerShown: false}} />
      <Stack.Screen name='Register' component={Register} options={{headerShown: false}} />
      <Stack.Screen name='ListingUsers' component={ListingUsers} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}


export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}