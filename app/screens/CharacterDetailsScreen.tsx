import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { SafeAreaView } from "react-native";
import colors from "../config/colors";
import { RootStackParamList } from "../types/RootStackParamList";
import CharactersScreen from "./CharactersScreen";

export const CharacterDetailsScreen = ({
  route,
}: NativeStackScreenProps<RootStackParamList, "CharacterDetails">) => {
  return (
    <SafeAreaView style={{ backgroundColor: colors.dark }}>
      <CharactersScreen characterId={route.params.characterId} />
    </SafeAreaView>
  );
};
