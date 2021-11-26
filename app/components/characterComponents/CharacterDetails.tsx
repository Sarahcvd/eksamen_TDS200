import React from "react";
import { StyleSheet, Text } from "react-native";
import colors from "../../config/colors";
import { Character } from "../../types/Character";
import Sprite from "../Sprite";

type Props = { character: Character };

export default function CharacterDetails({ character }: Props) {
  return (
    <>
      <Text style={[styles.id, styles.text]}>ID: {character.id}</Text>
      <Sprite uri={character.image} />
      <Text style={styles.name}>{character.name}</Text>
      <Text style={styles.item}>
        {`Hva er greia til ${character.name ?? "unknown"}? `}
      </Text>
      <Text>Species: {character.species}</Text>
      {character.origin && (
        <Text>Originates from: {character.origin.name}</Text>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  text: { color: colors.gray },
  id: { marginBottom: 20 },
  item: { color: colors.gray, fontSize: 16 },
  name: { fontSize: 24, textTransform: "capitalize", marginBottom: 8 },
});
