import React from "react";
import { View, Pressable, Text, Image, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppNavigationParameterList } from "src/interfaces/AppNavigationParameterList";
import MealDetails from "../MealDetails";

type Props = {
  id: string;
  title: string;
  imageUrl: string;
  duration: number;
  complexity: string;
  affordability: string;
};

function MealItem(props: Props) {
  const { id, title, imageUrl, duration, complexity, affordability } = props;
  const navigation: NativeStackNavigationProp<AppNavigationParameterList> =
    useNavigation();

  function handlePressMealItem() {
    navigation.navigate("MealDetails", { mealId: id });
  }

  return (
    <View
      style={{
        margin: 16,
        borderRadius: 8,
        backgroundColor: "white",
        elevation: 4,
        shadowOpacity: 0.35,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible"
      }}
    >
      <Pressable
        android_ripple={{ color: "#cccc" }}
        style={({ pressed }) => (pressed ? { opacity: 0.5 } : null)}
        onPress={handlePressMealItem}
      >
        <View style={{ borderRadius: 8, overflow: "hidden" }}>
          <View>
            <Image
              source={{ uri: imageUrl }}
              style={{ width: "100%", height: 200 }}
            />
            <Text
              style={{
                fontWeight: "bold",
                textAlign: "center",
                fontSize: 18,
                margin: 8
              }}
            >
              {title}
            </Text>
          </View>
          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
}
export default MealItem;
