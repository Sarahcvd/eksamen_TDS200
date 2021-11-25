import React from "react";
import { StyleSheet, Text } from "react-native";

import colors from "../../config/colors";

type Props = { item: unknown };

export default function ListItem({ item }: Props) {
  return (
    <Text style={styles.item}>
      {`Hva er greia til ${item ?? "unknown"}? <= Insert here`}
    </Text>
  );
}

const styles = StyleSheet.create({
  item: { color: colors.gray, fontSize: 16 },
});
