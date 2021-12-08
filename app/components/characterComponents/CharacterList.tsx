import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import rickAndMortyApi from "../../api/rickAndMortyApi";
import CharacterListItem from "./CharacterListItem";
import ListItemSeperator from "../listComponents/ListItemSeperator";
import useApi from "../../hooks/useApi";
import { Character } from "../../types/Character";
import { SearchBar } from "react-native-elements";
import ErrorHandler from "../ErrorHandler";
import colors from "../../config/colors";

export default function CharacterList() {
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
  };

  return (
    <View>
      {error && <ErrorHandler onPress={() => getAllCharacters()} />}
      {!error && !loading && (
        <>
          <SearchBar
            searchIcon={{ size: 25 }}
            onChangeText={(text: string) => filterSearch(text)}
            onClear={() => filterSearch("")}
            placeholder="Filter characters"
            value={search}
            platform={"default"}
            containerStyle={{ backgroundColor: colors.dark }}
            inputStyle={{ backgroundColor: colors.white }}
            inputContainerStyle={{ backgroundColor: colors.white }}
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
            onRefresh={getAllCharacters}
          />
        </>
      )}
    </View>
  );
}
