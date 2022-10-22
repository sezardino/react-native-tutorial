import React from 'react'
import { FlatList, ListRenderItem, ListRenderItemInfo, Text, View } from 'react-native'
import { CategoryItem } from '../components/CategoryItem'
import { CATEGORIES } from '../mock/categories'
import { Category } from '../types'

const renderItemFunc = (data: ListRenderItemInfo<Category>) => <CategoryItem category={data.item} />

export const CategoriesScreen = () => {
  return <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={renderItemFunc} numColumns={2} />
}
