import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { SafeAreaView } from "react-native";
import { RootStackParamList } from "../types/RootStackParamList";
import CharactersScreen from "./CharactersScreen";

export const CharacterDetailsScreen = ({
  route,
}: NativeStackScreenProps<RootStackParamList, "CharacterDetails">) => {
  return (
    <SafeAreaView>
      <CharactersScreen characterId={route.params.characterId} />
    </SafeAreaView>
  );
};
