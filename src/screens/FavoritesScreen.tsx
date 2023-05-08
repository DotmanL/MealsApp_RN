import MealsList from "src/components/MealsList/MealsList";
import { MEALS } from "../../data/dummy-data";
import { StyleSheet, Text, View } from "react-native";
import { useAppSelector } from "src/store/redux/hooks";

function FavoritesScreen() {
  //When using Context
  // const favoritesContext = useContext(FavoritesContext);
  // const favoriteMeals = MEALS.filter((meal) =>
  //   favoritesContext.ids.includes(meal.id)
  // );

  const favoriteMealIds = useAppSelector((state) => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  return (
    <>
      {favoriteMeals.length === 0 ? (
        <View style={styles.rootContainer}>
          <Text style={styles.text}> You have no favorites meals yet</Text>
        </View>
      ) : (
        <MealsList items={favoriteMeals} />
      )}
    </>
  );
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white"
  }
});
