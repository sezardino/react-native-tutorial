import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Styles } from '../../../consts';

interface Props {
  data: string[]
}

export const List: React.FC<Props> = (props) => {
  const { data } = props

  return <>
    {data.map((dataPoint) => (
      <View key={dataPoint} style={styles.listItem}>
        <Text style={styles.itemText}>{dataPoint}</Text>
      </View>
    ))}
  </>;
}


const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: Styles.colors.accent,
  },
  itemText: {
    color: Styles.colors.main,
    textAlign: 'center',
  },
});
