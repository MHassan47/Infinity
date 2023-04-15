import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useContext, useState } from "react";
import { authentication } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../userContext";
const LoginScreen = () => {
  const navigation = useNavigation();
  const { user, setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    try {
      const { user } = await signInWithEmailAndPassword(
        authentication,
        email,
        password
      );

      setUser({ name: user.displayName, email: user.email, id: user.uid });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <KeyboardAvoidingView
      className="flex-1 justify-center items-center bg-white space-y-14"
      behavior="padding"
    >
      <Image
        source={{
          uri: "https://mcusercontent.com/c77b7da91b2fcb68b52d05572/images/2caebe58-d883-7217-6fa8-76794c6b7075.png",
        }}
        className="w-3/4 h-1/3 object-center"
      />
      <Text className="text-3xl font-bold text-InfinityBlue">Login</Text>
      <View className="w-4/5 space-y-4">
        <TextInput
          placeholder="Email"
          value={email}
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
          className="bg-gray-200 px-4 py-3 rounded-lg mt-2 "
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          className="bg-gray-200 px-3 py-3 rounded-lg mt-2 "
          secureTextEntry
        />
      </View>

      <View className="w-4/5 justify-center items-center mt-5 space-y-2">
        <TouchableOpacity
          onPress={handleSignIn}
          className="bg-InfinityBlue rounded-xl p-2 w-full items-center"
        >
          <Text className="text-white font-bold text-lg">Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className=" rounded-xl p-2 w-full items-center"
          onPress={() => navigation.navigate("Register")}
        >
          <Text className="text-black font-bold text-md">
            Don't have an account?{" "}
            <Text className="text-InfinityBlue">Register!</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
