import React, { useLayoutEffect } from "react";
import { CATEGORIES, MEALS } from "../../data/dummy-data";
import { FlatList, View } from "react-native";
import { AppNavigationParameterList } from "src/interfaces/AppNavigationParameterList";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import MealItem from "components/MealItem";
import Meal from "../../models/meal";

type MealItemData = {
  item: Meal;
};

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
    console.log(categoryTitle);
  }, [categoryId, navigation]);

  function renderMealItem({ item }: MealItemData) {
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}
export default MealsOverviewScreen;
