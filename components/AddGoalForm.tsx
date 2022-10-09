import { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";
import { GoalItem } from "../types";

interface Props {
  addGoal: (goal: GoalItem) => void;
  isVisible: boolean;
  closeHandler: () => void;
}

export const AddGoalForm = (props: Props) => {
  const { addGoal, isVisible, closeHandler } = props;
  const [goalValue, setGoalValue] = useState<string>("");

  const onTextEdit = (text: string): void => {
    setGoalValue(text);
  };

  const resetForm = () => {
    setGoalValue("");
    closeHandler();
  };

  const onButtonPress = () => {
    if (!goalValue.length) return;

    const newGoal: GoalItem = {
      value: goalValue,
      id: Math.random().toString(),
    };
    addGoal(newGoal);
    resetForm();
  };

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.form}>
        <TextInput
          placeholder="Your course goal!"
          style={styles.input}
          value={goalValue}
          onChangeText={onTextEdit}
        />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={onButtonPress} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={closeHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  form: {
    paddingHorizontal: 16,
    flex: 1,
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: 'teal'
  },
  input: {
    padding: 16,
    borderWidth: 1,
    borderColor: "#00f2cb",
    backgroundColor: "#00f2cb",
    borderRadius: 6,
    marginRight: 16,
  },
  buttons: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    marginHorizontal: 8,
    width: 100,
  },
});
