import React from "react";
import { Button, Text } from "react-native";

type Props = { onPress: () => void };

export default function ErrorHandler({ onPress }: Props) {
  return (
    <>
      <Text>Error </Text>
      <Button title="Prøv igjen" onPress={onPress} />
    </>
  );
}
