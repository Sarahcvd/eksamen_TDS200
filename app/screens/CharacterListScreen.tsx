import React, { useEffect } from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import rickAndMortyApi from "../api/rickAndMortyApi";
import CharacterListItem from "../components/characterComponents/CharacterListItem";
import ListItemDelete from "../components/listComponents/ListItemDelete";
import ListItemSeperator from "../components/listComponents/ListItemSeperator";
import GoToFeedButton from "../components/navigators/GoToFeedButton";
import useApi from "../hooks/useApi";
import { AllCharacter } from "../types/AllCharacters";

type Props = {
  refreshList?: () => void;
};

export default function CharacterListScreen({ refreshList }: Props) {
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
            <GoToFeedButton characterId={item.id} name={item.name} />
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
