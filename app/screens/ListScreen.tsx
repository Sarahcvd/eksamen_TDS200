import React, { useEffect } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import rickAndMortyApi from "../api/rickAndMortyApi";
import ListItem from "../components/listComponents/ListItem";
import ListItemDelete from "../components/listComponents/ListItemDelete";
import ListItemSeperator from "../components/listComponents/ListItemSeperator";
import Sprite from "../components/Sprite";
import useApi from "../hooks/useApi";
import { AllCharacter } from "../types/AllCharacters";

type Props = {
  refreshList?: () => void;
};

export default function ListScreen({ refreshList }: Props) {
  const {
    data: characters,
    loading,
    error,
    request: getAllCharacters,
  } = useApi<AllCharacter>(rickAndMortyApi.getAllCharacters);

  const { request: deleteCharacter } = useApi<AllCharacter>(
    rickAndMortyApi.deleteCharacter
  );

  useEffect(() => {
    getAllCharacters();
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={characters?.results}
        keyExtractor={(nameobject) => nameobject.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            id={item.id}
            name={item.name}
            species={item.species!}
            image={item.image}
            /* Jeg tror ikke denne fungererg */
            renderRightActions={() => (
              <ListItemDelete onPress={() => deleteCharacter(item.id)} />
            )}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeperator />}
        refreshing={loading}
        onRefresh={refreshList}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
