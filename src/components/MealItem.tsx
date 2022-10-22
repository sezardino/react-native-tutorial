import React from "react";
import { Image, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

import { Meal } from "../types";
import { CustomCard } from "./ui/CustomCard";

interface Props {
  meal: Meal;
  style: StyleProp<ViewStyle>;
  onPress: () => void;
}

export const MealItem: React.FC<Props> = (props) => {
  const { meal, style, onPress } = props

  return (
    <CustomCard style={[styles.cardInner, style]} isPressable onPress={onPress}>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <View style={styles.body}>
        <Text style={styles.title}>{meal.title}</Text>
        <View style={styles.details}>
          <Text style={styles.field}>{meal.duration}m</Text>
          <Text style={styles.field}>{meal.affordability}</Text>
          <Text style={styles.field}>{meal.complexity}</Text>
        </View>
      </View>
    </CustomCard>
  )
}

const styles = StyleSheet.create({
  cardInner: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    aspectRatio: 16 / 9
  },
  body: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  details: {
    marginTop: 16,
    flexDirection: 'row',
  },
  field: {
    marginHorizontal: 4,
  },
})
