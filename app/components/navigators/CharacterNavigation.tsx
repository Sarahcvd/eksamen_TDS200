import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View, Text } from "react-native";
import { DetailsScreen } from "../../screens/DetailsScreen";
import { RootStackParamList } from "../../types/RootStackParamList";
import CharacterList from "../characterComponents/CharacterList";

const CharacterNavigation = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator
      initialRouteName="CharacterList"
      screenOptions={{
        headerStyle: { backgroundColor: "maroon" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="CharacterList"
        component={CharacterList}
        options={{ title: "Characters" }}
      />
      <Stack.Screen
        name="CharacterDetails"
        component={DetailsScreen}
        options={({ route }) => ({ title: route.params.name })}
      />
    </Stack.Navigator>
  );
};

export default CharacterNavigation;
