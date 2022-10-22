import React from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { Category } from "../types";

interface Props {
  category: Category;
  onPress: (category: string) => void;
}

export const CategoryItem: React.FC<Props> = (props) => {
  const { category, onPress } = props

  const onCategoryPress = () => {
    onPress(category.id)
  }

  return <View style={styles.item}>
    <Pressable android_ripple={{ color: '#ccc' }} style={({ pressed }) => ([styles.pressable, { backgroundColor: category.color }, pressed ? styles.active : null])} onPress={onCategoryPress}>
      <View style={[styles.inner]}>
        <Text style={styles.text}>{category.title}</Text>
      </View>
    </Pressable>
  </View>
}


const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: 16,
    height: 150,
    elevation: 4,
    borderRadius: 8,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { height: 2, width: 0 },
    shadowRadius: 8,
    backgroundColor: 'white',
    overflow: Platform.OS === 'android' ? 'hidden' : "visible"
  },
  pressable: {
    flex: 1,
  },
  active: {
    opacity: 0.8
  },
  inner: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
  }
})
