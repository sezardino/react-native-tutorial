import { StatusBar } from "expo-status-bar";
import { useCallback, useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";

import { AddGoalForm, GoalItem } from "./components";
import { useGoals } from "./hooks";

export default function App() {
  const { addGoal, goals, deleteGoal } = useGoals();
  const [isModalShown, setIsModalShown] = useState<boolean>(false);

  const closeModal = useCallback(() => setIsModalShown(false), []);

  const goalsList = (
    <FlatList
      data={goals}
      renderItem={({ item: goal }) => (
        <GoalItem goal={goal} onPress={deleteGoal} />
      )}
      keyExtractor={(item) => item.id}
      style={styles.goals}
    />
  );

  const emptyList = (
    <View>
      <Text style={styles.helpText}>Please add some new goal</Text>
    </View>
  );

  return (
    <>
      <StatusBar style="inverted" />
      <View style={styles.screen}>
        <Button
          title="Add Goal"
          color="teal"
          onPress={() => setIsModalShown(true)}
        />
        <AddGoalForm
          isVisible={isModalShown}
          addGoal={addGoal}
          closeHandler={closeModal}
        />
        <View style={styles.wrapper}>
          {goals.length > 0 ? goalsList : emptyList}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 48,
    paddingHorizontal: 16,
    flex: 1,
  },
  wrapper: {
    flex: 1,
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#fff",
  },
  goals: {
    flex: 1,
  },
  helpText: {
    color: "#fff",
  },
});
