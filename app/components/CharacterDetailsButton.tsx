import { NavigationProp, useNavigation } from "@react-navigation/core";
import React from "react";
import { RootStackParamList } from "../types/RootStackParamList";
import Button from "./Button";

type Props = {
  characterId: number;
  name: string;
};

const CharacterDetailsButton = ({ characterId, name }: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <Button
      title="Read more"
      onPress={() =>
        navigation.navigate("CharacterDetails", {
          characterId: characterId,
          name: name,
        })
      }
    />
  );
};

export default CharacterDetailsButton;
