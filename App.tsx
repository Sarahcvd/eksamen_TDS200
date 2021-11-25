import React from "react";
import ListItem from "./app/components/listComponents/ListItem";
import CharactersScreen from "./app/screens/CharactersScreen";
import ListScreen from "./app/screens/ListScreen";

export default function App() {
  return (
    <ListScreen
      deleteItem={function (id: number): void {
        throw new Error("Function not implemented.");
      }}
    />
  );
}
