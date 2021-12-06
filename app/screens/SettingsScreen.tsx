import React from "react";
import { StyleSheet, View } from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { NavigationProp } from "@react-navigation/native";
import { RootBottomTabPropTypes } from "../types/RootBottomTabPropTypes";
import { RootLoginParamList } from "../types/RootLoginParamList";
import User from "../components/User";
import Button from "../components/Button";

export default function SettingsScreen({
  route,
  navigation,
}: BottomTabScreenProps<RootBottomTabPropTypes, "Settings">) {
  return (
    <View style={styles.container}>
      {
        <User
          username={route.params.username}
          imageUri={route.params.imageUri}
        />
      }
      <Button
        title="Log out"
        onPress={() =>
          navigation
            .getParent<NavigationProp<RootLoginParamList>>()
            .navigate("Login")
        }
        type="green"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    padding: 40,
    flex: 1,
    justifyContent: "space-between",
  },
});
