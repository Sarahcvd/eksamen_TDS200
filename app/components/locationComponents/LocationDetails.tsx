import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Platform,
} from "react-native";
import rickAndMortyApi from "../../api/rickAndMortyApi";
import colors from "../../config/colors";
import { Location } from "../../types/Location";

type Props = { location: Location };

export default function LocationDetails({ location }: Props) {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([{ id: 0, name: "" }]);

  const getAllCharacters = async () => {
    if (location) {
      let character_info = [];
      for (let i in location.residents) {
        character_info.push(
          await rickAndMortyApi.getResidents(location.residents[i])
        );
      }
      setCharacters(character_info);
    }
  };

  useEffect(() => {
    setLoading(true);
    getAllCharacters();
    setLoading(false);
  }, []);

  return (
    <>
      {location ? (
        <View style={styles.container}>
          <View style={styles.description}>
            <Text style={styles.name}>{location.name}</Text>
            <Text style={styles.text}>Type: {location.type}</Text>
            <Text style={styles.text}>
              This {location.type} resides in the "{location.dimension}"
              dimension
            </Text>
            <Text style={styles.text}>Residents:</Text>
          </View>
          {loading ? (
            <ActivityIndicator
              color="#fff"
              size="large"
              style={styles.loader}
            />
          ) : (
            <View style={{ height: 400 }}>
              <FlatList
                contentContainerStyle={{ paddingBottom: 20 }}
                style={styles.characterList}
                data={characters}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <Text style={styles.text}>{item.name}</Text>
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
    marginTop: -20,
  },
  text: {
    fontSize: 17,
    color: colors.white,
    alignSelf: "center",
    marginBottom: 5,
    textAlign: "center",
  },
  name: {
    fontSize: 30,
    textTransform: "capitalize",
    marginBottom: 8,
    textAlign: "center",
    color: colors.green,
    ...Platform.select({
      android: { color: colors.blue },
    }),
  },
  loader: {
    marginTop: 10,
  },
  characterList: {
    padding: 20,
    backgroundColor: colors.dark,
    width: "100%",
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
});
