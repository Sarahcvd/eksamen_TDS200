import React, { useEffect, useState } from "react";
import { FlatList, Platform, StyleSheet, Text, View } from "react-native";
import rickAndMortyApi from "../../api/rickAndMortyApi";
import colors from "../../config/colors";
import { Character } from "../../types/Character";
import Sprite from "../Sprite";

type Props = {
  character: Character;
};

export default function CharacterDetails({ character }: Props) {
  const [loading, setLoading] = useState(true);
  const [episodes, setEpisodes] = useState([{ id: 0, name: "" }]);

  const getAllEpisodes = async () => {
    if (character) {
      let episode_info = [];
      for (let i in character.episode) {
        episode_info.push(
          await rickAndMortyApi.getEpisode(character.episode[i])
        );
      }
      setEpisodes(episode_info);
    }
  };

  useEffect(() => {
    setLoading(true);
    getAllEpisodes();
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
    <>
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
            <Text style={[styles.text, styles.listText, styles.loader]}>
              Starring in episodes:
            </Text>
          </View>
          {loading ? (
            <Text style={styles.text}>Loading...</Text>
          ) : (
            <View style={{ height: 230 }}>
              <FlatList
                contentContainerStyle={{
                  paddingBottom: 20,
                  ...Platform.select({ android: { paddingBottom: 50 } }),
                }}
                style={styles.episode_list}
                data={episodes}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <Text style={[styles.text, styles.listText]}>
                    {item.name}
                  </Text>
                )}
              />
            </View>
          )}
        </View>
      ) : null}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    marginTop: -40,
  },
  description: {
    padding: 20,
    marginTop: 20,
    width: "100%",
    backgroundColor: colors.dark,
    borderBottomColor: colors.green,
    borderBottomWidth: 2,
    ...Platform.select({
      android: { borderBottomColor: colors.blue },
    }),
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
    color: colors.white,
    marginBottom: 5,
    ...Platform.select({
      ios: {
        fontFamily: "Helvetica Neue",
      },
      android: {
        fontFamily: "sans-serif",
      },
    }),
  },
  listText: {
    alignSelf: "center",
  },
  name: {
    fontSize: 24,
    textTransform: "capitalize",
    marginBottom: 8,
    ...Platform.select({
      ios: {
        color: colors.green,
        fontFamily: "Helvetica Neue",
        paddingTop: 6,
      },
      android: {
        color: colors.blue,
        fontFamily: "sans-serif",
        paddingTop: 2,
      },
    }),
  },
  circle: {
    width: 12,
    height: 12,
    borderRadius: 12 / 2,
    ...Platform.select({
      ios: { marginTop: 4 },
      android: { marginTop: 7 },
    }),
  },
});
