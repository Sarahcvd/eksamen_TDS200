import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./app/components/navigators/TabNavigation";
import LoginNavigator from "./app/components/navigators/LoginNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <LoginNavigator />
    </NavigationContainer>
  );
}
