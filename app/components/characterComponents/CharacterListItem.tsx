import React from "react";
import { Animated, StyleSheet, Text, View } from "react-native";

import { Swipeable } from "react-native-gesture-handler";
import colors from "../../config/colors";
import Sprite from "../Sprite";

type Props = {
  renderRightActions?: (
    progressAnimatedValue: Animated.AnimatedInterpolation,
    dragAnimatedValue: Animated.AnimatedInterpolation
  ) => React.ReactNode;
  name: string;
  id: number;
  species: string;
  image: string;
};

export default function CharacterListItem({
  name,
  id,
  species,
  image,
  renderRightActions,
}: Props) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View style={[styles.row, styles.container]}>
        {image && <Sprite uri={image} size={40} />}
        <View>
          <Text style={[styles.text, styles.title]}>{name} </Text>
          <Text style={styles.text}>{species}</Text>
        </View>
      </View>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row" },
  container: { margin: 10 },
  title: { fontWeight: "600" },
  text: {
    color: colors.gray,
    textTransform: "capitalize",
    marginLeft: 10,
    fontSize: 16,
  },
});
