import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LocationDetailsScreen } from "../../screens/LocationDetailsScreen";
import { RootStackParamList } from "../../types/RootStackParamList";
import LocationList from "../locationComponents/LocationList";
import colors from "../../config/colors";

const LocationNavigation = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.green },
        headerTintColor: colors.dark,
      }}
    >
      <Stack.Screen
        name="LocationList"
        component={LocationList}
        options={{ title: "Locations" }}
      />
      <Stack.Screen
        name="LocationDetails"
        component={LocationDetailsScreen}
        options={({ route }) => ({
          title: route.params.name,
          presentation: "modal",
        })}
      />
    </Stack.Navigator>
  );
};

export default LocationNavigation;
