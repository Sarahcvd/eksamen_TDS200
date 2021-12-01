import { NavigationProp, useNavigation } from "@react-navigation/core";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import colors from "../../config/colors";
import { RootStackParamList } from "../../types/RootStackParamList";
import LocationDetailsButton from "../navigators/LocationDetailsButton";

type Props = {
  id: number;
  name: string;
  type?: string;
  dimension?: string;
};

export default function LocationListItem({ id, name, type, dimension }: Props) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={[styles.row, styles.container]}>
      <View
        style={{
          flex: 1,
        }}
      >
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
  title: { fontWeight: "600" },
  text: {
    color: colors.black,
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
