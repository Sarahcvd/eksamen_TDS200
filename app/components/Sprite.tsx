import React from "react";
import { Dimensions, Image, ImageSourcePropType, View } from "react-native";
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
    <View
      style={{
        borderColor: colors.gray,
        borderWidth: 2,
        borderRadius: width,
        marginBottom: 8,
        overflow: "hidden",
        width: size,
      }}
    >
      <Image source={source} />
    </View>
  );
}
