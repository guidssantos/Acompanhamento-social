import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Login } from '../pages/Login';
import { Home } from '../pages/Home';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text} from 'react-native'


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()

const HomeScreen = () => {
  return(
    <Tab.Navigator  initialRouteName='Home' screenOptions={{headerShown: false, tabBarActiveTintColor: '#E2773B', tabBarActiveBackgroundColor: '#162231', tabBarInactiveBackgroundColor: '#162231', tabBarInactiveTintColor: '#000000'}}>
      <Tab.Screen name='Home' component={Home} options={{title: 'Home', tabBarIcon: ({size, color}) => (
        <Icon name='home' size={size} color={color} />
      )}}/>
      {/* <Tab.Screen name='Acompanhamento' component={() => <Text>teste</Text>} options={{title: 'Acompanhamento', tabBarIcon: ({size, color}) => (
        <Icon name='address-book' size={size} color={color} />
      )}}/>
      <Tab.Screen name='Relatorios' component={() => <Text>teste</Text>} options={{title: 'Relatorios', tabBarIcon: ({size, color}) => (
        <Icon name='edit' size={size} color={color} />
      )}}/>
      <Tab.Screen name='Calendario' component={() => <Text>teste</Text>} options={{title: 'Calendario', tabBarIcon: ({size, color}) => (
        <Icon name='calendar' size={size} color={color} />
      )}}/> */}
    </Tab.Navigator>
  )
}


export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Principal" component={HomeScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}