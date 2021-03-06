import React from "react";
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  View,
  StyleSheet,
  Platform,
} from "react-native";
import colors from "../config/colors";

type Props = { uri: string; size?: number };

export default function Sprite({
  uri,
  size = Dimensions.get("window").width / 2,
}: Props) {
  const width = Dimensions.get("window").width / 2;
  const source: ImageSourcePropType = {
    uri,
    width: size,
    height: size,
  };

  return (
    <View style={{ borderRadius: width, width: size, ...styles.image }}>
      <Image source={source} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    borderColor: colors.green,
    borderWidth: 2,
    marginBottom: 8,
    overflow: "hidden",
    ...Platform.select({
      android: {
        borderColor: colors.blue,
      },
    }),
  },
});
