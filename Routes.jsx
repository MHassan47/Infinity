import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppTabs } from "./navigators/AppTabs";

// import AppStack from "./navigators/AppStack";
// import { AuthStack } from "./navigators/AuthStack";

const Routes = () => {
  return (
    <NavigationContainer>
      <AppTabs />
    </NavigationContainer>
  );
};

export default Routes;
