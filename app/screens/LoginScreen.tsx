import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Button from "../components/Button";
import colors from "../config/colors";
import { RootLoginParamList } from "../types/RootLoginParamList";

const LoginScreen = ({
  navigation,
}: NativeStackScreenProps<RootLoginParamList, "Login">) => {
  const image =
    "https://www.whatspaper.com/wp-content/uploads/2021/09/rick-and-morty-wallpaper-whatspaper-1.png";

  const [username, setUsername] = useState("");
  return (
    <ImageBackground
      style={styles.image}
      resizeMode="cover"
      source={{ uri: image }}
    >
      <TextInput
        style={styles.input}
        onChangeText={(username) => setUsername(username)}
        placeholder="Username"
        value={username}
      />
      <View style={styles.innerContainer}>
        <Button
          title="Login"
          onPress={() =>
            navigation.navigate("Authenticated", {
              username: username,
              imageUri:
                "https://i.pinimg.com/originals/09/99/81/09998176ee2a403758e6a959dbb4fca5.jpg",
            })
          }
          type="green"
        />
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: "20%",
    justifyContent: "flex-end",
  },
  input: {
    height: 40,
    margin: 70,
    marginTop: 100,
    padding: 5,
    borderWidth: 1,

    backgroundColor: colors.white,
  },
});
