import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import React from "react";
import {
  MaterialIcons,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
const RecipeItemScreen = ({ route }) => {
  const { item } = route.params;
  return (
    <View className="">
      <ScrollView
        className="bg-white"
        contentContainerStyle={{ paddingBottom: 500 }}
        //   showsVerticalScrollIndicator={false}
      >
        <View key={item.title} className="">
          <Image
            source={{ uri: item.image }}
            className="w-full h-2/5 shadow-xl "
          />
          <View className="h-3/5 bg-white rounded-tr-3xl rounded-tl-3xl -mt-8 p-6 space-y-4">
            <Text className="text-InfinityBlue text-xl font-semibold text-center">
              {item.title}
            </Text>

            <View className="flex-row justify-center space-x-6">
              <View className="flex flex-row items-center space-x-2">
                <MaterialIcons
                  name="local-fire-department"
                  size={22}
                  color="#005a84"
                />
                <Text className="text-lg">{item.calories} cal</Text>
              </View>
              <View className="flex flex-row items-center space-x-2">
                <Feather name="clock" size={22} color="#005a84" />
                <Text className="text-lg">{item.time}</Text>
              </View>
              <View className="flex flex-row items-center space-x-2">
                <MaterialCommunityIcons
                  name="room-service-outline"
                  size={22}
                  color="#005a84"
                />
                <Text className="text-lg">{item.serves}</Text>
              </View>
            </View>
            <View>
              <Text className="font-semibold text-InfinityBlue text-xl text-center mb-4">
                Ingredients
              </Text>
              {Object.entries(item.ingredients)
                .reverse()
                .map(([ingredient, amount]) => (
                  <View key={ingredient} className="flex-row mb-2 space-x-2">
                    <Text
                      className="font-bold text-lg"
                      ellipsizeMode="tail"
                      numberOfLines={2}
                    >
                      {ingredient}:
                    </Text>
                    <Text
                      className="text-lg font-light text-InfinityBlue"
                      ellipsizeMode="tail"
                      numberOfLines={2}
                    >
                      {amount}
                    </Text>
                  </View>
                ))}
            </View>
            <View>
              <Text className="font-semibold text-InfinityBlue text-xl text-center mb-4">
                Directions
              </Text>
              {Object.entries(item.directions).map(([ingredient, amount]) => (
                <View key={ingredient} className="flex-row mb-2 space-x-2">
                  <Text className="font-bold text-lg">{ingredient}:</Text>
                  <Text className="text-lg font-light text-InfinityBlue">
                    {amount}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default RecipeItemScreen;
