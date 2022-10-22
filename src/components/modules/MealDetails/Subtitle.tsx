import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Styles } from '../../../consts';

interface Props {
  children?: React.ReactNode
}

export const Subtitle: React.FC<Props> = ({ children }) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  subtitle: {
    color: Styles.colors.accent,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitleContainer: {
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: Styles.colors.accent,
    borderBottomWidth: 2,
  },
});
