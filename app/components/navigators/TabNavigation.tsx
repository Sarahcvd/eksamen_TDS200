import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootStackParamList } from "../../types/RootStackParamList";
import CharacterNavigation from "./CharacterNavigation";
import { FontAwesome5 } from "@expo/vector-icons";
import LocationNavigation from "./LocationNavigation";
import { RootBottomTabPropTypes } from "../../types/RootBottomTabPropTypes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootLoginParamList } from "../../types/RootLoginParamList";
import SettingsScreen from "../../screens/SettingsScreen";
import colors from "../../config/colors";

const TabNavigation = ({
  route,
}: NativeStackScreenProps<RootLoginParamList, "Authenticated">) => {
  const Tab = createBottomTabNavigator<RootBottomTabPropTypes>();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: colors.blue,
        tabBarActiveTintColor: colors.dark,
        tabBarInactiveBackgroundColor: colors.dark,
        tabBarInactiveTintColor: colors.blue,
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
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="user-cog" size={size} color={color} />
          ),
        }}
        initialParams={{
          username: route.params.username,
          imageUri: route.params.imageUri,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
