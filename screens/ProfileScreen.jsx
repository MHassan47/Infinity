import { View, Text, SafeAreaView } from "react-native";
import React, { useContext } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { UserContext } from "../userContext";
const ProfileScreen = () => {
  const { user } = useContext(UserContext);

  const handleLogout = () => {
    logout();
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView className="flex-1 mt-20 items-center space-y-4">
      <View className="flex justify-center items-center border p-4 w-1/4 rounded-3xl">
        <FontAwesome name="user" size={60} color="#005a84" />
      </View>
      <Text className="text-xl font-semibold ">{user.name}</Text>
    </SafeAreaView>
  );
};

export default ProfileScreen;
