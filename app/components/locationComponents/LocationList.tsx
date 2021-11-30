import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import rickAndMortyApi from "../../api/rickAndMortyApi";
import useApi from "../../hooks/useApi";
import { AllLocations } from "../../types/AllLocations";
import ListItemSeperator from "../listComponents/ListItemSeperator";
import LocationListItem from "./LocationListItem";

type Props = {};

export default function LocationList({}: Props) {
  const {
    data: locations,
    loading,
    error,
    request: getAllLocations,
  } = useApi<AllLocations>(rickAndMortyApi.getAllLocations);

  useEffect(() => {
    getAllLocations();
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={locations?.results}
        keyExtractor={(nameobject) => nameobject.id.toString()}
        renderItem={({ item }) => (
          <LocationListItem
            id={item.id}
            name={item.name}
            type={item.type}
            dimension={item.dimension}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeperator />}
        refreshing={loading}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
