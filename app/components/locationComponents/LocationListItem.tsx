import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import colors from "../../config/colors";
import LocationDetailsButton from "../LocationDetailsButton";

type Props = {
  id: number;
  name: string;
  type?: string;
  dimension?: string;
};

export default function LocationListItem({ id, name, dimension }: Props) {
  return (
    <View style={[styles.row, styles.container]}>
      <View style={{ flex: 1 }}>
        <Text style={[styles.text, styles.title]}>{name} </Text>
        <Text style={styles.text}>{dimension}</Text>
      </View>
      <View style={styles.button}>
        <LocationDetailsButton locationId={id} name={name} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row" },
  container: { margin: 10 },
  title: {
    fontWeight: "600",
    color: colors.green,
    ...Platform.select({
      android: { color: colors.blue },
    }),
  },
  text: {
    color: colors.white,
    textTransform: "capitalize",
    marginLeft: 10,
    fontSize: 16,
    height: 25,
  },
  button: {
    alignItems: "flex-end",
    justifyContent: "space-around",
  },
});
