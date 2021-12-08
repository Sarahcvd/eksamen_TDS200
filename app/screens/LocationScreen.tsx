import React, { useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import rickAndMortyApi from "../api/rickAndMortyApi";
import ErrorHandler from "../components/ErrorHandler";
import LocationDetails from "../components/locationComponents/LocationDetails";
import useApi from "../hooks/useApi";

type Props = { locationId: number };

export default function LocationScreen({ locationId }: Props) {
  const {
    data: location,
    loading,
    error,
    request: getLocation,
  } = useApi<Location>(rickAndMortyApi.getLocation);

  useEffect(() => {
    getLocation(locationId);
  }, [locationId]);
  return (
    <View style={styles.container}>
      <ActivityIndicator animating={loading} size="large" />
      {error && <ErrorHandler onPress={() => getLocation(locationId)} />}
      {!error && !loading && <LocationDetails location={location!} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: "center" },
});
