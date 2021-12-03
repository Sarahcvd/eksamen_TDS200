import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import { RootLoginParamList } from "../types/RootLoginParamList";

const LoginScreen = ({
  navigation,
}: NativeStackScreenProps<RootLoginParamList, "Login">) => {
  const image =
    "https://www.whatspaper.com/wp-content/uploads/2021/09/rick-and-morty-wallpaper-whatspaper-1.png";
  return (
    <ImageBackground
      style={styles.image}
      resizeMode="cover"
      source={{ uri: image }}
    >
      <View style={styles.innerContainer}>
        <Button
          title="Login"
          onPress={() =>
            navigation.navigate("Authenticated", {
              username: "Rick Sanches",
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
    justifyContent: "flex-end",
  },
  innerContainer: {
    padding: "20%",
  },
});
