import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, Text } from "react-native";
import { RootStackParamList } from "../../types/RootStackParamList";
import CharacterNavigation from "./CharacterNavigation";
import { FontAwesome5 } from "@expo/vector-icons";
import LocationList from "../locationComponents/LocationList";

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
        name="Prev"
        component={CharacterNavigation}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="list" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Locations"
        component={LocationList}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="cog" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Next"
        component={CharacterNavigation}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="cog" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
