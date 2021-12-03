import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../../screens/LoginScreen";
import { RootLoginParamList } from "../../types/RootLoginParamList";
import TabNavigation from "./TabNavigation";

export default function LoginNavigator() {
  const Stack = createNativeStackNavigator<RootLoginParamList>();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Authenticated" component={TabNavigation} />
    </Stack.Navigator>
  );
}
