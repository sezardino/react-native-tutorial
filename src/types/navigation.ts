import { NativeStackScreenProps } from "@react-navigation/native-stack";

export const enum Screens {
  MilsCategories = "MilsCategories",
  MealOverview = "MealOverview",
}

export type RootStackParamList = {
  [Screens.MilsCategories]: undefined;
  [Screens.MealOverview]: { categoryId: string };
};

export type ScreenProps<ScreenName extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, ScreenName>;
