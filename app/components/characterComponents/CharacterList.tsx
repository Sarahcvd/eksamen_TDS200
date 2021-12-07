import React, { useEffect } from "react";
import { FlatList, SafeAreaView, StyleSheet, View, Text } from "react-native";
import rickAndMortyApi from "../../api/rickAndMortyApi";
import CharacterListItem from "./CharacterListItem";
import ListItemDelete from "../listComponents/ListItemDelete";
import ListItemSeperator from "../listComponents/ListItemSeperator";
import useApi from "../../hooks/useApi";
import { AllCharacters } from "../../types/AllCharacters";

type Props = {
  refreshList?: () => void;
};

export default function CharacterList({ refreshList }: Props) {
  const {
    data: characters,
    loading,
    error,
    request: getAllCharacters,
  } = useApi<AllCharacters>(rickAndMortyApi.getAllCharacters);

  useEffect(() => {
    getAllCharacters();
  }, []);

  /*  const loadMore = () => {
    const refetchVariables = (fragmentVariables: any) => ({
      ...fragmentVariables,
      page: characters.info.next,
    });
    relay.refetch(refetchVariables, null);
  }; */

  return (
    <>
      <FlatList
        data={characters?.results}
        keyExtractor={(nameobject) => nameobject.id.toString()}
        renderItem={({ item }) => (
          <CharacterListItem
            id={item.id}
            name={item.name}
            species={item.species}
            image={item.image}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeperator />}
        refreshing={loading}
        onRefresh={refreshList}
        //onEndReached={loadMore}
      />
    </>
  );
}

const styles = StyleSheet.create({});
