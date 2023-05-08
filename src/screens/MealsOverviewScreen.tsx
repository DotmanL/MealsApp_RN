import React, { useLayoutEffect } from "react";
import { CATEGORIES, MEALS } from "../../data/dummy-data";
import { AppNavigationParameterList } from "src/interfaces/AppNavigationParameterList";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import MealsList from "src/components/MealsList/MealsList";

type Props = {
  navigation: NavigationProp<AppNavigationParameterList, "MealsOverview">;
  route: RouteProp<AppNavigationParameterList, "MealsOverview">;
};

function MealsOverviewScreen(props: Props) {
  // NOTE: we can use the useNavigation and useRoute also to replace the navigation an route prop
  const { navigation, route } = props;
  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.includes(categoryId);
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    )?.title;

    navigation.setOptions({
      title: categoryTitle
    });
    categoryTitle;
  }, [categoryId, navigation]);

  return <MealsList items={displayedMeals} />;
}
export default MealsOverviewScreen;
