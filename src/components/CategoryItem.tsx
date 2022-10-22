import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Category } from "../types";
import { CustomCard } from "./ui/CustomCard";

interface Props {
  category: Category;
  onPress: (category: string) => void;
}

export const CategoryItem: React.FC<Props> = (props) => {
  const { category, onPress } = props

  const onCategoryPress = () => {
    onPress(category.id)
  }

  return (
    <CustomCard isPressable onPress={onCategoryPress} innerStyles={{ backgroundColor: category.color }} style={styles.item} >
      <View style={[styles.inner]}>
        <Text style={styles.text}>{category.title}</Text>
      </View>
    </CustomCard>
  )
}


const styles = StyleSheet.create({
  item: {
    borderRadius: 8,
    margin: 16,
    height: 150,
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
