import React from "react";
import { StyleSheet, Text } from "react-native";

import colors from "../../config/colors";
import { Character } from "../../types/Character";

type Props = { character: Character };

export default function CharacterItem({ character: item }: Props) {
  return (
    <Text style={styles.item}>
      {`Hva er greia til ${item?.name ?? "unknown"}? `}
    </Text>
  );
}

const styles = StyleSheet.create({
  item: { color: colors.gray, fontSize: 16 },
});
