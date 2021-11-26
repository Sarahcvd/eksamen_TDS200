import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Location } from "../../types/Location";

type Props = { location: Location };

export default function LocationDetails({ location }: Props) {
  return (
    <View style={styles.container}>
      <Text>ID: {location.id}</Text>
      <Text>{location.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
