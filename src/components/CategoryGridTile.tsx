import React from "react";
import { Pressable, Text, View, Platform } from "react-native";

type Props = {
  title: string;
  color: string;
  onPress: () => void;
};

function CategoryGridTile(props: Props) {
  const { title, color, onPress } = props;
  return (
    <View
      style={{
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: "white", // to see the elevation on IOS and with the shadow, we must have a background color
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible" // this helps to see the shadow on IOS
      }}
    >
      <Pressable
        android_ripple={{ color: "#cccc" }}
        style={({ pressed }) => [
          { flex: 1 },
          pressed ? { opacity: 0.5 } : null
        ]}
        onPress={onPress}
      >
        <View
          style={{
            flex: 1,
            padding: 16,
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: color
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;
