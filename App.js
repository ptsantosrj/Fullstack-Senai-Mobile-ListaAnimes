import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import AnimeListScreen from './src/screens/AnimeListScreen';
import AnimeDetailScreen from './src/screens/AnimeDetailScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AnimeListScreen" component={AnimeListScreen} />
        <Stack.Screen name="AnimeDetailScreen" component={AnimeDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
