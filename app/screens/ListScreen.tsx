/* import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ListItem from "../components/listComponents/ListItem";
import ListItemDelete from "../components/listComponents/ListItemDelete";
import ListItemSeperator from "../components/listComponents/ListItemSeperator";

type Props = {
  //pokemonList: IPokemon[];
  loading: boolean;
  refreshList?: () => void;
  deleteItem: (id: number) => void;
};

export default function ListScreen({
  loading,
  refreshList,
  deleteItem,
}: Props) {
  return (
    <FlatList
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => {
        <ListItem
          title={item.name}
          subtitle={item.types[0].type.name}
          imageUri={item.sprites.front_default}
          renderRightActions={() => (
            <ListItemDelete onPress={() => deleteItem(item.id)} />
          )}
        />;
      }}
      ItemSeparatorComponent={ListItemSeperator}
      refreshing={loading}
      onRefresh={refreshList}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
});
 */

/* import React from "react";
import { StyleSheet, Text } from "react-native";

import colors from "../config/colors";

type Props = { item: unknown };

export default function ListScreen({ item }: Props) {
  return (
    <Text style={styles.item}>
      {`Hva er greia til ${item ?? "unknown"}? <= Insert here`}
    </Text>
  );
}

const styles = StyleSheet.create({
  item: { color: colors.gray, fontSize: 16 },
}); */
