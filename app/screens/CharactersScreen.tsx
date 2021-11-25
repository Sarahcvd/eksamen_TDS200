import React, { useEffect } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import rickAndMortyApi from "../api/rickAndMortyApi";
import CharacterContainer from "../components/characterComponents/CharacterContainer";
import ErrorHandler from "../components/ErrorHandler";
import useApi from "../hooks/useApi";
import { Character } from "../types/Character";

type Props = { characterId: number };

export default function CharactersScreen({ characterId }: Props) {
  const {
    data: character,
    loading,
    error,
    request: getCharacter,
  } = useApi<Character>(rickAndMortyApi.getCharacter);

  useEffect(() => {
    getCharacter(characterId);
  }, [characterId]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ActivityIndicator animating={loading} size="large" />
        {error && <ErrorHandler onPress={() => getCharacter(characterId)} />}
        {!error && !loading && <CharacterContainer character={character!} />}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: "center" },
});
