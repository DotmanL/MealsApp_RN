import { Text, TextStyle, View, ViewStyle } from "react-native";

type Props = {
  duration: number;
  complexity: string;
  affordability: string;
  viewStyle?: ViewStyle;
  textStyle?: TextStyle;
};

function MealDetails(props: Props) {
  const { duration, complexity, affordability, viewStyle, textStyle } = props;
  return (
    <View
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: 8
        },
        viewStyle
      ]}
    >
      <Text style={[{ marginHorizontal: 4, fontSize: 12 }, textStyle]}>
        {duration}m
      </Text>
      <Text style={[{ marginHorizontal: 4, fontSize: 12 }, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[{ marginHorizontal: 4, fontSize: 12 }, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

export default MealDetails;
