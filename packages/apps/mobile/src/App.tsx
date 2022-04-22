import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Header} from './components/Header';
import {Start} from './pages/Start';
import {Main} from './pages/Main';
import {Cities} from './pages/Cities';
import {City} from './pages/City';

export type RootStackParamList = {
  Start: undefined;
  Main: undefined;
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Header />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{headerShown: false}}
          name="Start"
          component={Start}
        />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Cities" component={Cities} />
        <Stack.Screen name="City" component={City} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
