import React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./app/components/navigators/TabNavigation";
import LoginNavigator from "./app/components/navigators/LoginNavigator";
import colors from "./app/config/colors";

export default function App() {
  const AppTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.dark,
    },
  };
  return (
    <NavigationContainer theme={AppTheme}>
      <LoginNavigator />
    </NavigationContainer>
  );
}
