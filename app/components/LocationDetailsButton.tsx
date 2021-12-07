import { NavigationProp, useNavigation } from "@react-navigation/core";
import React from "react";
import { Button } from "react-native";
import colors from "../config/colors";
import { RootStackParamList } from "../types/RootStackParamList";

type Props = {
  locationId: number;
  name: string;
};

const LocationDetailsButton = ({ locationId, name }: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <Button
      color={colors.green}
      title="Read more"
      onPress={() =>
        navigation.navigate("LocationDetails", {
          locationId: locationId,
          name: name,
        })
      }
    ></Button>
  );
};

export default LocationDetailsButton;
