import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Styles } from './src/consts';
import { CategoriesScreen } from './src/screens/CategoriesScreen';
import { MealDetailsScreen } from './src/screens/MealDetailsScreen';
import { MealOverviewScreen } from './src/screens/MealOverviewScreen';
import { RootStackParamList, Screens } from './src/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitleAlign: 'center', headerTintColor: Styles.colors.accent, headerStyle: { backgroundColor: Styles.colors.main }, contentStyle: { backgroundColor: Styles.colors.main } }}>
          <Stack.Screen name={Screens.MilsCategories} component={CategoriesScreen} options={{ title: 'All Categories' }} />
          <Stack.Screen name={Screens.MealOverview} component={MealOverviewScreen} />
          <Stack.Screen name={Screens.MealDetails} component={MealDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
