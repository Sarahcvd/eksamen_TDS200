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

type Props = {
  refreshList?: () => void;
};

export default function CharacterList({ refreshList }: Props) {
  const {
    data: characters,
    loading,
    error,
    request: getAllCharacters,
  } = useApi<Character>(rickAndMortyApi.getAllCharacters);
  /* const [filteredArray, setFilteredArray] = useState([...characters]);
  const [text, setText] = useState(""); */

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

  /* const handleSearch = (text: string) => {
    const formattedText = text.toLocaleLowerCase();
    const data = filteredArray.filter((name) => {});
  }; */

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Filter characters"
        onChangeText={(_text) => rickAndMortyApi.filterCharacters(_text)}
      />
      <FlatList
        data={characters}
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
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 5,
    padding: 5,
    backgroundColor: colors.white,
  },
});
