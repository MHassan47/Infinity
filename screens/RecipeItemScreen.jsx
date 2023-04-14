import { View, Text, ScrollView, Image } from "react-native";
import React from "react";

const RecipeItemScreen = ({ route }) => {
  const { item } = route.params;
  return (
    <>
      <ScrollView
        className="bg-white"
        contentContainerStyle={{ paddingBottom: 0 }}
        showsVerticalScrollIndicator={false}
      >
        <View key={item.title} className="flex-1 h-screen">
          <Image
            source={{ uri: item.image }}
            className="w-full h-2/5 shadow-xl "
          />
          <View className="h-3/5 bg-white rounded-tr-3xl rounded-tl-3xl -mt-8 p-4">
            <Text>{item.title}</Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default RecipeItemScreen;
