import React from "react";
import { FlatList } from "react-native";
import { CATEGORIES } from "../../data/dummy-data";
import { ICategory } from "interfaces/ICategory";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import CategoryGridTile from "components/CategoryGridTile";
import { AppNavigationParameterList } from "src/interfaces/AppNavigationParameterList";

type CategoryItemData = {
  item: ICategory;
};

type Props = {
  navigation: NativeStackNavigationProp<
    AppNavigationParameterList,
    "Categories"
  >;
};

// NOTE: use flatlist when its dynamic data but used here just to practice,
// scrollView could be used for simple cases like this

function CategoriesScreen(props: Props) {
  const { navigation } = props;

  function renderCategoryItem({ item }: CategoryItemData) {
    function pressHandler() {
      navigation.navigate("MealsOverview", { categoryId: item.id });
    }
    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}
export default CategoriesScreen;
