import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const RecipesScreen = ({ route }) => {
  const { category } = route.params;
  const navigation = useNavigation();
  //   console.log("----------", typeof category);
  const [recipes, setRecipes] = useState([]);
  const recipeListRef = collection(db, "Items");
  useEffect(() => {
    const getRecipeList = async () => {
      const items = [];
      const q = query(recipeListRef, where("category", "==", category));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // console.log(doc);
        items.push({
          ...doc.data(),
          title: doc.id,
        });
      });
      setRecipes(items);
    };
    getRecipeList();
  }, []);

  console.log(recipes[1]);
  return (
    <SafeAreaView>
      <ScrollView
        className="h-full"
        contentContainerStyle={{ paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
      >
        {recipes.map((item) => (
          <TouchableOpacity
            key={item.title}
            className="flex justify-center items-center w-full mb-4 shadow-2xl"
            onPress={() => navigation.navigate("Item", { item: item })}
          >
            <Image
              source={{ uri: item.image }}
              className="w-5/6 h-52 rounded-xl "
            />
            <View className="flex absolute bottom-0 left-50 w-5/6 h-full bg-black opacity-50  rounded-xl p-2">
              <Text className="text-white font-semibold text-lg">
                {item.title}
              </Text>
              <View className="flex flex-row items-center space-x-2">
                <MaterialIcons
                  name="local-fire-department"
                  size={22}
                  color="white"
                />
                <Text className="text-white font-semibold text-lg">
                  {item.calories}
                </Text>
              </View>
              <View className="flex flex-row items-center space-x-2">
                <Feather name="clock" size={22} color="white" />
                <Text className="text-white font-semibold text-lg">
                  {item.time}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecipesScreen;
