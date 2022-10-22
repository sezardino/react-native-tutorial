import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';

import { CategoryItem } from '../components/CategoryItem';
import { CATEGORIES } from '../mock/categories';
import { Category, ScreenProps, Screens } from '../types';

export const CategoriesScreen = (props: ScreenProps<Screens.MilsCategories>) => {
  const { navigation } = props;

  const renderItemFunc = (data: ListRenderItemInfo<Category>) => (
    <CategoryItem category={data.item} onPress={() => navigation.navigate(Screens.MealOverview)} />
  )


  return <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={renderItemFunc} numColumns={2} />
}
