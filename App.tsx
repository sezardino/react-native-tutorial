import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { CategoriesScreen } from './src/screens/CategoriesScreen';
import { MealOverviewScreen } from './src/screens/MealOverviewScreen';
import { RootStackParamList, Screens } from './src/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
          <Stack.Screen name={Screens.MilsCategories} component={CategoriesScreen} options={{ title: 'All Categories' }} />
          <Stack.Screen name={Screens.MealOverview} component={MealOverviewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
