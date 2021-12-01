import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { SafeAreaView } from "react-native";
import { RootStackParamList } from "../types/RootStackParamList";
import LocationScreen from "./LocationScreen";

export const LocationDetailsScreen = ({
  route,
}: NativeStackScreenProps<RootStackParamList, "LocationDetails">) => {
  return (
    <SafeAreaView>
      <LocationScreen locationId={route.params.locationId} />
    </SafeAreaView>
  );
};
