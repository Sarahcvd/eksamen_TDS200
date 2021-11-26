/* export type Location = {
  id: number;
  name: string;
  type?: string;
  dimension?: string;
};
 */
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../config/colors";

type Props = {
  id: number;
  name: string;
  type?: string;
  dimention?: string;
};

export default function LocationListItem({ id, name, type, dimention }: Props) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
        }}
      >
        <Text style={[styles.text, styles.title]}>{name} </Text>
        <Text style={styles.text}>{type}</Text>
        <Text style={styles.text}>{dimention}</Text>
      </View>
      <View style={styles.button}></View>
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
    width: 120,
    height: 25,
    overflow: "hidden",
  },
  button: { flex: 2, alignItems: "flex-end", justifyContent: "space-around" },
});
