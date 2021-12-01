import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View, Text } from "react-native";
import { CharacterDetailsScreen } from "../../screens/CharacterDetailsScreen";
import { LocationDetailsScreen } from "../../screens/LocationDetailsScreen";
import LocationScreen from "../../screens/LocationScreen";
import { RootStackParamList } from "../../types/RootStackParamList";
import CharacterList from "../characterComponents/CharacterList";
import LocationList from "../locationComponents/LocationList";

const Navigation = () => {
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
        component={CharacterDetailsScreen}
        options={({ route }) => ({ title: route.params.name })}
      />
      <Stack.Screen
        name="LocationList"
        component={LocationList}
        options={{ title: "Characters" }}
      />
      <Stack.Screen
        name="LocationDetails"
        component={LocationDetailsScreen}
        options={({ route }) => ({ title: route.params.locationUrl })}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
