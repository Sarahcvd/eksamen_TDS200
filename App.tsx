import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./app/components/navigators/TabNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
}
