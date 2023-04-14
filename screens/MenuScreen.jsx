import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const MenuScreen = () => {
  const [categories, setCategories] = useState([]);
  const recipesRef = collection(db, "Recipes");

  useEffect(() => {
    const getRecipes = async () => {
      const recipes = [];
      const data = await getDocs(recipesRef);
      data.forEach((doc) => {
        recipes.push({
          ...doc.data(),
          id: doc.id,
        });
      });
      setCategories(recipes);
    };
    getRecipes();
  }, []);

  return (
    <SafeAreaView className="">
      {/* <View className="flex-row  w-4/5 items-center space-x-2 p-2 rounded-lg">
        <View className="flex-row bg-gray-200 p-3 space-x-3 rounded-xl shadow-sm">
          <AntDesign name="search1" color="gray" size={20} />
          <TextInput
            placeholder="Search"
            keyboardType="default"
            // onChangeText={handleSearch}
            className="flex-1 "
          />
        </View>
      </View> */}
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 70 }}
      >
        <Text className="text-xl font-semibold text-[#005a84] ">
          Categories
        </Text>
        <View className="flex-row flex-wrap items-center justify-center">
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              className="w-1/2 mb-4 shadow-lg "
            >
              <Image
                source={{ uri: category.image }}
                className="w-full h-36 rounded-lg"
              />
              <Text className="font-semilight text-xs text-center text-[#005a84]">
                {category.id}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MenuScreen;
