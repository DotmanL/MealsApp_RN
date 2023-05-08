import Meal from "models/meal";
import { FlatList, View } from "react-native";
import MealItem from "./MealItem";

type MealItemData = {
  item: Meal;
};

type Props = {
  items: Meal[];
};

function MealsList(props: Props) {
  const { items } = props;

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
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsList;
