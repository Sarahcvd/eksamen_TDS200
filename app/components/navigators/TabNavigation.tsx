import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CharacterNavigation from "./CharacterNavigation";
import { FontAwesome5 } from "@expo/vector-icons";
import LocationNavigation from "./LocationNavigation";
import { RootBottomTabPropTypes } from "../../types/RootBottomTabPropTypes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootLoginParamList } from "../../types/RootLoginParamList";
import SettingsScreen from "../../screens/SettingsScreen";
import colors from "../../config/colors";
import { Platform } from "react-native";

const TabNavigation = ({
  route,
}: NativeStackScreenProps<RootLoginParamList, "Authenticated">) => {
  const Tab = createBottomTabNavigator<RootBottomTabPropTypes>();
  return (
    <Tab.Navigator
      safeAreaInsets={{
        bottom: 0,
      }}
      screenOptions={{
        tabBarActiveBackgroundColor: colors.green,
        tabBarActiveTintColor: colors.dark,
        tabBarInactiveBackgroundColor: colors.dark,
        tabBarInactiveTintColor: colors.green,
        headerShown: false,
        ...Platform.select({
          android: {
            tabBarInactiveTintColor: colors.blue,
            tabBarActiveBackgroundColor: colors.blue,
          },
          ios: {
            tabBarStyle: {
              height: 55,
              marginBottom: 30,
            },
          },
        }),
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
