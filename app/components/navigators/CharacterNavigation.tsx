import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CharacterDetailsScreen } from "../../screens/CharacterDetailsScreen";
import { RootStackParamList } from "../../types/RootStackParamList";
import CharacterList from "../characterComponents/CharacterList";

const CharacterNavigation = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator
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
        component={CharacterDetailsScreen}
        options={({ route }) => ({ title: route.params.name })}
      />
    </Stack.Navigator>
  );
};

export default CharacterNavigation;
