import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import rickAndMortyApi from "../api/rickAndMortyApi";
import ListItem from "../components/listComponents/ListItem";
import Sprite from "../components/Sprite";
import colors from "../config/colors";
import { Character } from "../types/Character";

type Props = { characterId: number };

export default function CharactersScreen({ characterId }: Props) {
  const [character, setCharacter] = useState<Character>();

  async function getCharacter() {
    const character = await rickAndMortyApi.getCharacter(characterId);
    setCharacter(character);
  }

  useEffect(() => {
    getCharacter();
  }, [characterId]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={[styles.id, styles.text]}>ID: {character?.id}</Text>
        <Sprite uri={character!.image} />
        <Text style={styles.name}>Name: </Text>
        <ListItem item={character?.name} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: "center" },
  text: { color: colors.gray },
  id: { marginBottom: 20 },
  name: { fontSize: 24, textTransform: "capitalize", marginBottom: 8 },
});
