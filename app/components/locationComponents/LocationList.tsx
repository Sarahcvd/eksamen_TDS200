import React, { useEffect } from "react";
import { FlatList } from "react-native-gesture-handler";
import rickAndMortyApi from "../../api/rickAndMortyApi";
import useApi from "../../hooks/useApi";
import { AllLocations } from "../../types/AllLocations";
import ErrorHandler from "../ErrorHandler";
import ListItemSeperator from "../listComponents/ListItemSeperator";
import LocationListItem from "./LocationListItem";

export default function LocationList() {
  const {
    data: locations,
    loading,
    error,
    request: getAllLocations,
  } = useApi<Location>(rickAndMortyApi.getAllLocations);

  useEffect(() => {
    getAllLocations();
  }, []);

  return (
    <>
      {error && <ErrorHandler onPress={() => getAllLocations()} />}
      {!error && !loading && (
        <>
          <FlatList
            data={locations}
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
            onRefresh={getAllLocations}
          />
        </>
      )}
    </>
  );
}
