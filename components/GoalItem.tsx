import { Pressable, StyleSheet, Text, View } from "react-native";
import { GoalItem as IGoalItem } from "../types";

interface Props {
  goal: IGoalItem;
  onPress: (id: string) => void;
}

export const GoalItem = (props: Props) => {
  const { goal, onPress } = props;

  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={() => onPress(goal.id)}
    >
      <View style={styles.wrapper}>
        <Text style={styles.text}>{goal.value}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 8,
    margin: 8,
    backgroundColor: "teal",
    borderRadius: 6,
  },
  pressed: {
    opacity: 0.5,
  },
  text: {
    color: "white",
  },
});
