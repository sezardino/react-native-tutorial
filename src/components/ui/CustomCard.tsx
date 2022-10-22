import React from "react";
import { Platform, Pressable, StyleProp, StyleSheet, View, ViewStyle } from "react-native";

interface Props {
  isPressable?: boolean;
  onPress?: () => void;
  children?: React.ReactNode,
  innerStyles?: StyleProp<ViewStyle>
  style?: StyleProp<ViewStyle>
}

export const CustomCard: React.FC<Props> = (props) => {
  const { children, innerStyles, style, isPressable = false, onPress } = props;

  const pressHandler = () => {
    if (!isPressable || !onPress) return;

    onPress()
  }

  return <View style={[styles.item, style]}>
    <Pressable android_ripple={{ color: '#ccc' }} style={({ pressed }) => ([styles.pressable, innerStyles && innerStyles, pressed ? styles.active : null])} onPress={pressHandler}>
      {children}
    </Pressable>
  </View>
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    elevation: 4,
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
})
