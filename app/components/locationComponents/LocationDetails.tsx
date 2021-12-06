import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import colors from "../../config/colors";
import { Location } from "../../types/Location";

type Props = { location: Location };

export default function LocationDetails({ location }: Props) {
  return (
    <>
      <Text style={[styles.id, styles.text]}>ID: {location.id}</Text>
      <Text style={styles.name}>Name: {location.name}</Text>
      <Text style={styles.item}>Type: {location.type}</Text>
      <Text style={styles.item}>
        This {location.type} resides in the "{location.dimension}" dimension
      </Text>
      <Text style={styles.item}>Residents:</Text>
      <FlatList
        data={location.residents}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </>
  );
}

const styles = StyleSheet.create({
  text: { color: colors.gray },
  id: { marginBottom: 10 },
  item: {
    color: colors.black,
    fontSize: 16,
    marginBottom: 5,
    textAlign: "center",
  },
  name: {
    fontSize: 30,
    textTransform: "capitalize",
    marginBottom: 8,
    textAlign: "center",
  },
});
