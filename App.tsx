import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CharacterList from "./app/components/characterComponents/CharacterList";
import { RootStackParamList } from "./app/types/RootStackParamList";
import { DetailsScreen } from "./app/screens/DetailsScreen";

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
}
