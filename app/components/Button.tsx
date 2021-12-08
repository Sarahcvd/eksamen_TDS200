import React from "react";
import {
  Text,
  StyleSheet,
  GestureResponderEvent,
  TouchableHighlight,
  Platform,
} from "react-native";

import colors from "../config/colors";

type Props = {
  onPress: (event: GestureResponderEvent) => void;
  title: string;
};

export default function Button({ onPress, title }: Props) {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: colors.green,
      padding: 8,
      borderRadius: 3,
      alignItems: "center",
      borderWidth: 1,
      borderColor: colors.dark,
      ...Platform.select({
        android: { backgroundColor: colors.blue },
      }),
    },
    text: {
      fontSize: 15,
      textTransform: "uppercase",
      color: colors.dark,
      fontWeight: "500",
    },
  });
  return (
    <TouchableHighlight
      underlayColor={colors.dark}
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableHighlight>
  );
}
