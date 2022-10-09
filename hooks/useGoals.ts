import { useCallback, useState } from "react";

import { GoalItem } from "../types";

interface UseGoals {
  goals: GoalItem[];
  addGoal: (goal: GoalItem) => void;
  deleteGoal: (id: string) => void;
}

export const useGoals = (): UseGoals => {
  const [goals, setGoals] = useState<GoalItem[]>([]);

  const addGoal = useCallback((goal: GoalItem): void => {
    setGoals((goals) => [...goals, goal]);
  }, []);

  const deleteGoal = useCallback(
    (id: string) => setGoals((goals) => goals.filter((goal) => goal.id !== id)),
    []
  );

  return {
    addGoal,
    goals,
    deleteGoal,
  };
};
