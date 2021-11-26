import React, { useEffect } from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import rickAndMortyApi from "../../api/rickAndMortyApi";
import CharacterListItem from "./CharacterListItem";
import ListItemDelete from "../listComponents/ListItemDelete";
import ListItemSeperator from "../listComponents/ListItemSeperator";
import useApi from "../../hooks/useApi";
import { AllCharacter } from "../../types/AllCharacters";

type Props = {
  refreshList?: () => void;
};

export default function CharacterList({ refreshList }: Props) {
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
          <View>
            <CharacterListItem
              id={item.id}
              name={item.name}
              species={item.species!}
              image={item.image}
              /* Jeg tror ikke denne fungerer */
              renderRightActions={() => (
                <ListItemDelete onPress={() => deleteCharacter(item.id)} />
              )}
            />
          </View>
        )}
        ItemSeparatorComponent={() => <ListItemSeperator />}
        refreshing={loading}
        onRefresh={refreshList}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
