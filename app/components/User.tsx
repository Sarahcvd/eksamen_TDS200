import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions,
  Platform,
} from "react-native";

import colors from "../config/colors";

type Props = { username: string; imageUri: string };

export default function User({ username, imageUri }: Props) {
  const { width } = Dimensions.get("screen");

  const size = width / 2;

  const styles = StyleSheet.create({
    container: { alignItems: "center" },
    imageContainer: {
      width: size,
      height: size,
      borderRadius: 25,
      borderWidth: 1,
      borderColor: colors.green,
      overflow: "hidden",
      marginBottom: 15,
    },
    username: {
      color: colors.green,
      textTransform: "capitalize",
      fontSize: 30,
      marginBottom: 80,
      fontFamily: Platform.OS == "android" ? "sans-serif" : "Helvetica Neue",
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.username}>Hello {username}!</Text>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUri, width: size, height: size }} />
      </View>
    </View>
  );
}
