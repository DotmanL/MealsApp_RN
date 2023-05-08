import { NavigationProp, RouteProp } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { AppNavigationParameterList } from "src/interfaces/AppNavigationParameterList";
import { MEALS } from "../../data/dummy-data";
import MealDetails from "src/components/MealDetails";
import Subtitle from "src/components/MealDetail/Subititle";
import List from "src/components/MealDetail/List";
import IconButton from "src/components/MealDetail/IconButton";
import { useAppSelector, useAppDispatch } from "src/store/redux/hooks";
import { addFavorite, removeFavorite } from "src/store/redux/favorites";

type Props = {
  navigation: NavigationProp<AppNavigationParameterList, "MealDetails">;
  route: RouteProp<AppNavigationParameterList, "MealDetails">;
};

function MealDetailsScreen(props: Props) {
  const { navigation, route } = props;
  const dispatch = useAppDispatch();
  // Context Logic
  // const favoriteMealsContext = useContext(FavoritesContext);
  // const isFavoriteMeal = favoriteMealsContext.ids.includes(mealId);

  // function changeFavoriteStatusHandler() {
  //   if (isFavoriteMeal) {
  //     favoriteMealsContext.removeFavorite(mealId);
  //   } else {
  //     favoriteMealsContext.addFavorite(mealId);
  //   }
  // }

  const favoriteMealIds = useAppSelector((state) => state.favoriteMeals.ids);
  const mealId = route.params.mealId;

  const isFavoriteMeal = favoriteMealIds.includes(mealId);

  function changeFavoriteStatusHandler() {
    if (isFavoriteMeal) {
      dispatch(removeFavorite({ id: mealId }));
    } else {
      dispatch(addFavorite({ id: mealId }));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            name={isFavoriteMeal ? "star" : "star-outline"}
            color="white"
            onPress={changeFavoriteStatusHandler}
          />
        );
      }
    });
  }, [navigation, changeFavoriteStatusHandler]);

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  if (!selectedMeal) {
    return <View>No Meal Selected</View>;
  }

  return (
    <ScrollView style={{ marginBottom: 32 }}>
      <Image
        source={{ uri: selectedMeal?.imageUrl }}
        style={{
          width: "100%",
          height: 350
        }}
      />
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 24,
          margin: 8,
          textAlign: "center"
        }}
      >
        {selectedMeal?.title}
      </Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={{ color: "white" }}
      />
      <View style={{ alignItems: "center" }}>
        <View style={{ width: "80%" }}>
          <Subtitle subTitle="Ingredients" />
          <List selectedData={selectedMeal.ingredients} />
          <Subtitle subTitle="Steps" />
          <List selectedData={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailsScreen;
