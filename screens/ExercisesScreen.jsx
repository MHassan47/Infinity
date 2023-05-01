import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ExercisesScreen = ({ route }) => {
  const { category } = route.params;
  const navigation = useNavigation();
  console.log("----------", category);
  const [exercises, setExercises] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");

  const exercisesListRef = collection(db, "Exercises");

  useEffect(() => {
    const getExerciseList = async () => {
      const items = [];
      const q = query(exercisesListRef, where("category", "==", category));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // console.log(doc);
        items.push({
          ...doc.data(),
          title: doc.id,
        });
      });
      setExercises(items);
    };
    getExerciseList();
  }, []);

  const handleVideoPress = (video) => {
    setSelectedVideo(video);
    setModalVisible(true);
  };

  console.log(exercises);
  return (
    <SafeAreaView>
      <ScrollView
        className="h-full"
        contentContainerStyle={{ paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
      >
        {exercises.map((item) => (
          <TouchableOpacity
            key={item.title}
            className="flex justify-center items-center w-full mb-4 shadow-2xl"
            onPress={() => handleVideoPress(item.video)}
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
                <Text className="text-white font-semibold">
                  {item.difficulty}
                </Text>
              </View>
              <View className="flex justify-center items-center">
                <Entypo name="controller-play" size={70} color="white" />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      {/* <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
        className="bg-black opacity-25"
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0,0,0,0.7)",
          }}
        >
          <TouchableOpacity
            className=" z-99 "
            onPress={() => setModalVisible(false)}
          >
            <Text className="text-3xl text-white ">X</Text>
          </TouchableOpacity>
          <Video
            source={{ uri: selectedVideo }}
            style={{ width: "100%", height: "40%", borderRadius: 20 }}
            resizeMode="contain"
            useNativeControls
          />
        </View>
      </Modal> */}
    </SafeAreaView>
  );
};

export default ExercisesScreen;
