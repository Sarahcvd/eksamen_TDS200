import React from "react";
import { Text, StyleSheet, View, Dimensions, Platform } from "react-native";

import colors from "../config/colors";

type Props = { username: string };

export default function User({ username }: Props) {
  const { width } = Dimensions.get("screen");

  const size = width / 2;

  const styles = StyleSheet.create({
    container: { alignItems: "center" },
    username: {
      color: colors.green,
      textTransform: "capitalize",
      fontSize: 30,
      marginBottom: 80,
      fontFamily: "Helvetica Neue",
      ...Platform.select({
        android: {
          color: colors.blue,
          fontFamily: "sans-serif",
        },
      }),
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.username}>Hello {username}!</Text>
    </View>
  );
}
