import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CharactersScreen from "./app/screens/CharactersScreen";

export default function App() {
  return <CharactersScreen characterId={1} />;
}
