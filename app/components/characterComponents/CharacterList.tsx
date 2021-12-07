import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, View, Text } from "react-native";
import rickAndMortyApi from "../../api/rickAndMortyApi";
import CharacterListItem from "./CharacterListItem";
import ListItemDelete from "../listComponents/ListItemDelete";
import ListItemSeperator from "../listComponents/ListItemSeperator";
import useApi from "../../hooks/useApi";
import { AllCharacters } from "../../types/AllCharacters";
import { Character } from "../../types/Character";
import { TextInput } from "react-native-gesture-handler";
import colors from "../../config/colors";
import { SearchBar } from "react-native-elements";

type Props = {
  refreshList?: () => void;
};

export default function CharacterList({ refreshList }: Props) {
  const {
    data: characters,
    filteredData: filteredCharacters,
    setFilteredData: setFilteredCharacters,
    loading,
    error,
    request: getAllCharacters,
  } = useApi<Character>(rickAndMortyApi.getAllCharacters);

  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    getAllCharacters();
  }, []);

  /* const searchData = (text: string) => {
    if (characters) {
      setArrayHolder(characters);
      const newData = arrayHolder.filter((item) => {
        const itemData = item.name.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });

      setData(newData);
      setText(text);
    }
  }; */

  const filterSearch: (text: string) => void = async (text: string) => {
    if (text) {
      const filteredData = await characters.filter((item: any) => {
        const itemData = item.name ? item.name.toUpperCase() : "";
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });

      setFilteredCharacters(await filteredData);
      setSearch(text);
    } else {
      setFilteredCharacters(await characters);
      setSearch(text);
    }

    return (
      <View>
        <SearchBar
          //style={styles.input}
          searchIcon={{ size: 25 }}
          onChangeText={(_text) => filterSearch(_text)}
          onClear={() => filterSearch("")}
          placeholder="Filter characters"
          value={search}
        />
        <FlatList
          data={filteredCharacters}
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
        />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 5,
    padding: 5,
    backgroundColor: colors.white,
  },
});
