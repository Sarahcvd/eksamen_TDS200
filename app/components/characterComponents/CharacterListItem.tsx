import React from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import colors from "../../config/colors";
import CharacterDetailsButton from "../CharacterDetailsButton";
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
        <View style={{ flex: 1 }}>
          <Text style={[styles.text, styles.title]}>{name} </Text>
          <Text style={[styles.text, styles.species]}>{species}</Text>
        </View>
        <View style={styles.button}>
          <CharacterDetailsButton characterId={id} name={name} />
        </View>
      </View>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row" },
  container: { margin: 10 },
  title: { fontWeight: "600" },
  species: { color: colors.white },
  text: {
    color: colors.green,
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
