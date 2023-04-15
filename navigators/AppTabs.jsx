import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../screens/ProfileScreen";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import MenuScreen from "../screens/MenuScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RecipesScreen from "../screens/RecipesScreen";
import RecipeItemScreen from "../screens/RecipeItemScreen";
import { Button } from "react-native";
import { useContext } from "react";
import { UserContext } from "../userContext";

const Tab = createBottomTabNavigator();
const RecipeStack = createNativeStackNavigator();
const ExerciseStack = createNativeStackNavigator();

const RecipeScreenStack = () => {
  return (
    <RecipeStack.Navigator>
      <RecipeStack.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          headerShown: true,
          headerTitle: "Recipes",
          headerTintColor: "#005a84",
        }}
      />
      <RecipeStack.Screen
        name="Recipe"
        component={RecipesScreen}
        options={{ headerShown: false }}
      />
      <RecipeStack.Screen
        name="Item"
        component={RecipeItemScreen}
        options={{ headerShown: false, presentation: "modal" }}
      />
      {/* <RecipeStack.Screen name="Settings" component={Settings} /> */}
    </RecipeStack.Navigator>
  );
};

export const AppTabs = () => {
  const { logout } = useContext(UserContext);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Recipes") {
            iconName = "Recipes";
            return (
              <MaterialCommunityIcons
                name="silverware-fork-knife"
                size={24}
                color={color}
              />
            );
          } else if (route.name === "Profile") {
            return <FontAwesome name="user" size={24} color={color} />;
          }
        },
        tabBarActiveTintColor: "#005a84",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Recipes"
        component={RecipeScreenStack}
        // screenOptions={{ headerShown: true }}
        options={{ title: "Recipes" }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: true,
          headerTintColor: "#005a84",
          headerRight: () => (
            <Button onPress={logout} title="Logout" color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
