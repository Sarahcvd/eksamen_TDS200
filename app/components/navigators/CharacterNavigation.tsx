import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CharacterDetailsScreen } from "../../screens/CharacterDetailsScreen";
import { RootStackParamList } from "../../types/RootStackParamList";
import CharacterList from "../characterComponents/CharacterList";
import colors from "../../config/colors";
import { Platform } from "react-native";

const CharacterNavigation = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.green,
          ...Platform.select({
            android: { backgroundColor: colors.blue },
          }),
        },
        headerTintColor: colors.dark,
      }}
    >
      <Stack.Screen
        name="CharacterList"
        component={CharacterList}
        options={{ title: "Characters" }}
      />
      <Stack.Screen
        name="CharacterDetails"
        component={CharacterDetailsScreen}
        options={({ route }) => ({ title: route.params.name })}
      />
    </Stack.Navigator>
  );
};

export default CharacterNavigation;
