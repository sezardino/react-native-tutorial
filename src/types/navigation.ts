import { NativeStackScreenProps } from "@react-navigation/native-stack";

export const enum Screens {
  MilsCategories = "MilsCategories",
  MealOverview = "MealOverview",
  MealDetails = "MealDetails",
}

export type RootStackParamList = {
  [Screens.MilsCategories]: undefined;
  [Screens.MealOverview]: { categoryId: string };
  [Screens.MealDetails]: { mealId: string };
};

export type ScreenProps<ScreenName extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, ScreenName>;
