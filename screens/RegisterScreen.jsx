import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { authentication, db } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { doc, setDoc } from "firebase/firestore";
const RegisterScreen = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      // Create user with email, password and additional fields
      const userCredentials = await createUserWithEmailAndPassword(
        authentication,
        email,
        password
      );
      const user = userCredentials.user;
      await updateProfile(user, { displayName: `${firstName} ${lastName}` });
      await setDoc(doc(db, "Users", userCredentials.user.uid), {
        uid: userCredentials.user.uid,
        displayName: `${firstName} ${lastName}`,
        email,
      });
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
      <Text className="text-3xl font-bold text-InfinityBlue">Register</Text>
      <View className="w-4/5 space-y-4">
        <TextInput
          placeholder="First Name"
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
          className="bg-gray-200 px-4 py-3 rounded-lg mt-2 "
        />
        <TextInput
          placeholder="Last Name"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
          className="bg-gray-200 px-4 py-3 rounded-lg mt-2 "
        />
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          value={email}
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
          onPress={handleSignUp}
          className="bg-InfinityBlue rounded-xl p-2 w-full items-center"
        >
          <Text className="text-white font-bold text-lg">Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          className=" rounded-xl p-2 w-full items-center"
        >
          <Text className="text-black font-bold text-md">
            Already have an account?{" "}
            <Text className="text-InfinityBlue">Login!</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
