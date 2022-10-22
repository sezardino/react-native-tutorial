import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { CategoriesScreen } from './src/screens/CategoriesScreen';

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <CategoriesScreen />
    </>
  );
}
