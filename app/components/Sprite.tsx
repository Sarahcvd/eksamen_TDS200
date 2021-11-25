import React from "react";
import { Dimensions, Image, ImageSourcePropType, View } from "react-native";
import colors from "../config/colors";

type Props = { uri: string };

export default function Sprite({ uri }: Props) {
  const width = Dimensions.get("window").width / 2;
  const source: ImageSourcePropType = {
    uri,
    width,
    height: width,
  };

  return (
    <View
      style={{
        borderColor: colors.gray,
        borderWidth: 2,
        borderRadius: width,
        marginBottom: 8,
        overflow: "hidden",
      }}
    >
      <Image source={source} />
    </View>
  );
}
