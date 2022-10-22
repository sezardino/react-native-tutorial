import React, { useLayoutEffect, useMemo } from 'react';
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';
import { MealItem } from '../components/MealItem';
import { CATEGORIES, MEALS } from '../mock';
import { ScreenProps, Screens } from '../types';


export const MealOverviewScreen = (props: ScreenProps<Screens.MealOverview>) => {
  const { route, navigation } = props;
  const mils = useMemo(() => {
    return MEALS.filter((meal) => meal.categoryIds.includes(route.params.categoryId))
  }, [route.params.categoryId])


  useLayoutEffect(() => {
    const category = CATEGORIES.find((category) => category.id === route.params.categoryId)

    if (!category) {
      Alert.alert('Category not found', '', [{ text: 'Go Home', onPress: () => navigation.navigate(Screens.MilsCategories) }]);

      return
    }

    navigation.setOptions({ headerTitle: category.title })
  }, [])

  return (
    <View style={styles.screen}>
      <FlatList data={mils} keyExtractor={(item) => item.id} renderItem={({ item }) => <MealItem meal={item} style={styles.item} />} style={styles.wrapper} />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingVertical: 24,
  },
  wrapper: {
    paddingHorizontal: 24,
  },
  item: {
    marginBottom: 16
  }
})
