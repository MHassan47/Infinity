import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppTabs } from "./navigators/AppTabs";
import { AuthStack } from "./navigators/AuthStack";
import { UserContext } from "./userContext";

// import AppStack from "./navigators/AppStack";
// import { AuthStack } from "./navigators/AuthStack";

const Routes = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <NavigationContainer>
      {user ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
