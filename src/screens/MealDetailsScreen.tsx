import React, { useLayoutEffect, useMemo } from 'react'
import { Alert, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { List } from '../components/modules/MealDetails/List'
import { Subtitle } from '../components/modules/MealDetails/Subtitle'
import { MEALS } from '../mock'
import { ScreenProps, Screens } from '../types'

export const MealDetailsScreen = (props: ScreenProps<Screens.MealDetails>) => {
  const { navigation, route } = props

  const meal = useMemo(() => {
    return MEALS.find((meal) => meal.id === route.params.mealId)
  }, [route.params.mealId])

  useLayoutEffect(() => {
    if (!meal) {
      Alert.alert("Meal not found", '', [{ 'text': 'On Home Page', onPress: () => navigation.navigate(Screens.MilsCategories) }]);

      return;
    }

    navigation.setOptions({ headerTitle: meal.title })
  }, [])

  if (!meal) return null

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: meal.imageUrl }} />
      <Text style={styles.title}>{meal.title}</Text>
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={meal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={meal.steps} />
        </View>
      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
});
