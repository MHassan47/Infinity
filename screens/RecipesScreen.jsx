import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
const RecipesScreen = () => {
  const [recipe, setRecipe] = useState(null);
  const itemRef = collection(db, "Items");
  useEffect(() => {
    const getRecipe = async () => {
      const item = [];
      const data = await getDocs(itemRef);
      data.forEach((doc) => {
        item.push({
          ...doc.data(),
          id: doc.id,
        });
      });
      setRecipe(item);
    };
    getRecipe();
  }, []);

  console.log(recipe);
  return (
    <SafeAreaView>
      <Text>RecipesScreen</Text>
    </SafeAreaView>
  );
};

export default RecipesScreen;
