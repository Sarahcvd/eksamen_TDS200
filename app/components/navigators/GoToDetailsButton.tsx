import { NavigationProp, useNavigation } from "@react-navigation/core";
import React from "react";
import { Button } from "react-native";
import { RootStackParamList } from "../../types/RootStackParamList";

type Props = {
  characterId: number;
  name: string;
};

const GoToDetailsButton = ({ characterId, name }: Props) => {
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
    ></Button>
  );
};

export default GoToDetailsButton;
