import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../pages/Login';
import { Home } from '../pages/Home';

const Tab = createNativeStackNavigator();


export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Tab.Screen name="Principal" component={Home} options={{ headerShown: false }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}