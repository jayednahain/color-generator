import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';
import Home from '../Views/Home';
import ColorDetails from '../Views/ColorDetails';


const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ColorDetails" component={ColorDetails} options={{
          animation: 'slide_from_right',
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;