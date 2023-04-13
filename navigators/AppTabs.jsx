import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../screens/ProfileScreen";
import RecipesScreen from "../screens/RecipesScreen";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

export const AppTabs = () => {
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
      <Tab.Screen name="Recipes" component={RecipesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
