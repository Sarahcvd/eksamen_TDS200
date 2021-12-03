import { NavigationProp, useNavigation } from "@react-navigation/core";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import colors from "../../config/colors";
import { Character } from "../../types/Character";
import { RootStackParamList } from "../../types/RootStackParamList";
import Sprite from "../Sprite";

type Props = { character: Character };

export default function CharacterDetails({ character }: Props) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <>
      <Text style={[styles.id, styles.text]}>ID: {character.id}</Text>
      <Sprite uri={character.image} />
      <Text style={styles.name}>{character.name}</Text>
      <Text style={styles.item}>Species: {character.species}</Text>
      {character.origin && (
        <TouchableHighlight
          onPress={() =>
            navigation.navigate("LocationDetails", {
              locationId: character.id,
              locationUrl: character.origin?.url,
            })
          }
        >
          <Text>Originates from: {character.origin.name}</Text>
        </TouchableHighlight>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  text: { color: colors.gray },
  id: { marginBottom: 20 },
  item: { color: colors.black, fontSize: 18, marginBottom: 5 },
  name: { fontSize: 24, textTransform: "capitalize", marginBottom: 8 },
});
