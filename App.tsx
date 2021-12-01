import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CharacterList from "./app/components/characterComponents/CharacterList";
import { RootStackParamList } from "./app/types/RootStackParamList";
import { CharacterDetailsScreen } from "./app/screens/CharacterDetailsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabNavigation from "./app/components/navigators/TabNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
}
