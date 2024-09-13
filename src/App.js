import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MenuScreen from './components/MenuScreen';
import ProjectDetails from './components/ProjectDetails';
import ModalScreen from './components/ModalScreen';
import TabOneScreen from './components/TabOneScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MenuScreen">
        <Stack.Screen name="MenuScreen" component={MenuScreen} />
        <Stack.Screen name="ProjectDetails" component={ProjectDetails} />
        <Stack.Screen name="ModalScreen" component={ModalScreen} />
        <Stack.Screen name="TabOneScreen" component={TabOneScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
