import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import rickAndMortyApi from "../../api/rickAndMortyApi";
import test from "../../api/test";
import colors from "../../config/colors";
import useApi from "../../hooks/useApi";
import { Character } from "../../types/Character";
import { Episodes } from "../../types/Episodes";
import Sprite from "../Sprite";

type Props = {
  character: Character;
};

export default function CharacterDetails({ character }: Props) {
  const [loading, setLoading] = useState(false);
  const [episodes, setEpisodes] = useState([{}]);

  const { data: _episodes, request: getEpisode } = useApi<Episodes>(
    test.getEpisode
  );

  useEffect(() => {
    setLoading(true);
    let episode_info = [];

    for (let i in character.episode) {
      // get episode og leg det i arrayet
      console.log(character.episode[i]);
      episode_info.push(getEpisode(character.episode[i]));
    }
    setEpisodes(episode_info);
    setLoading(false);
  }, []);

  const checkStatus = () => {
    let alive = true;
    if (character.status !== "Alive") {
      alive = false;
    }
    return alive;
  };

  return (
    <SafeAreaView>
      {character ? (
        <View style={styles.container}>
          <Sprite uri={character.image} />
          <View style={styles.description}>
            <Text style={[styles.text, styles.name]}>{character.name}</Text>
            <View style={{ flexDirection: "row" }}>
              {checkStatus() ? (
                <View
                  style={{ backgroundColor: colors.green, ...styles.circle }}
                />
              ) : (
                <View
                  style={{ backgroundColor: colors.danger, ...styles.circle }}
                />
              )}
              <Text style={styles.text}> {character.status} - </Text>
              <Text style={[styles.text]}>Species: {character.species}</Text>
            </View>
            <Text style={styles.text}>
              Originates from: {character.origin?.name}
            </Text>
            <Text style={styles.text}>
              Current location: {character.location?.name}
            </Text>
          </View>
        </View>
      ) : null}
      {loading ? (
        <ActivityIndicator color="#005" size="large" style={styles.loader} />
      ) : (
        <>
          <Text style={styles.text}>Starring in episodes: </Text>
          <FlatList
            style={styles.episode_list}
            data={_episodes.name}
            keyExtractor={(item) => item}
            renderItem={({ item }) => <Text style={styles.text}>{item}</Text>}
          />
        </>
      )}
    </SafeAreaView>
  );
}

const osStyles = Platform.select({
  ios: {
    fontFamily: "Helvetica Neue",
  },
  android: {
    fontFamily: "sans-serif",
  },
});

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    marginTop: -20,
  },
  description: {
    padding: 20,
    marginTop: 20,
    width: "100%",
    backgroundColor: colors.dark,
  },
  episode_list: {
    padding: 20,
    backgroundColor: colors.dark,
    width: "100%",
  },
  loader: {
    marginTop: 10,
  },
  text: {
    fontSize: 17,
    color: "#53eae3",
  },
  name: {
    fontSize: 24,
    textTransform: "capitalize",
    marginBottom: 8,
    ...osStyles,
  },
  circle: {
    width: 12,
    height: 12,
    borderRadius: 12 / 2,
    marginBottom: 20,
    marginTop: 5,
  },
});
