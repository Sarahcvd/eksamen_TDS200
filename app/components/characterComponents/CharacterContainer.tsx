import React from "react";
import { StyleSheet, Text } from "react-native";
import colors from "../../config/colors";
import { Character } from "../../types/Character";
import CharacterItem from "./CharacterItem";
import Sprite from "../Sprite";

type Props = { character: Character };

export default function CharacterContainer({ character }: Props) {
  return (
    <>
      <Text style={[styles.id, styles.text]}>ID: {character.id}</Text>
      <Sprite uri={character.image} />
      <Text style={styles.name}>{character.name}</Text>
      <CharacterItem character={character} />
    </>
  );
}

const styles = StyleSheet.create({
  text: { color: colors.gray },
  id: { marginBottom: 20 },
  name: { fontSize: 24, textTransform: "capitalize", marginBottom: 8 },
});
