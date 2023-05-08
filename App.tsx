import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { AppNavigationParameterList } from "./src/interfaces/AppNavigationParameterList";
import CategoriesScreen from "screens/CategoriesScreen";
import MealsOverviewScreen from "screens/MealsOverviewScreen";
import MealDetailsScreen from "screens/MealDetailsScreen";
import FavoritesScreen from "src/screens/FavoritesScreen";
// import FavoritesProvider from "src/store/context/FavoritesContext";
import { Provider } from "react-redux";
import { store } from "src/store/redux/store";

const Stack = createNativeStackNavigator<AppNavigationParameterList>();
const Drawer = createDrawerNavigator<AppNavigationParameterList>();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#219ebc" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#219ebc" },
        drawerContentStyle: { backgroundColor: "#351401" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4baa1"
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          headerTitle: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          )
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          )
        }}
      />
    </Drawer.Navigator>
  );
}

// NOTE: using inline styling here as it is a small project, use the Stylesheet.create fully for big projects
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* <FavoritesProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#219ebc" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#219ebc" }
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen
              name="MealDetails"
              component={MealDetailsScreen}
              options={{
                title: "About the Meal"
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>

      {/* </FavoritesProvider> */}
    </>
  );
}
