import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, Text } from "react-native";
import { RootStackParamList } from "../../types/RootStackParamList";
import CharacterNavigation from "./CharacterNavigation";
import { FontAwesome5 } from "@expo/vector-icons";
import LocationList from "../locationComponents/LocationList";
import LocationNavigation from "./LocationNavigation";

const TabNavigation = () => {
  const Tab = createBottomTabNavigator<RootStackParamList>();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: "teal",
        tabBarActiveTintColor: "white",
        tabBarInactiveBackgroundColor: "lightgrey",
        tabBarInactiveTintColor: "teal",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Characters"
        component={CharacterNavigation}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="address-book" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Locations"
        component={LocationNavigation}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="map-marked-alt" size={size} color={color} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Next"
        component={Navigation}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="cog" size={size} color={color} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default TabNavigation;
