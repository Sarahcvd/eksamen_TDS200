import React, { useEffect, useState } from "react";
import { Platform, StyleSheet, View, Text, Image } from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { NavigationProp } from "@react-navigation/native";
import { RootBottomTabPropTypes } from "../types/RootBottomTabPropTypes";
import { RootLoginParamList } from "../types/RootLoginParamList";
import User from "../components/User";
import Button from "../components/Button";
import { Audio } from "expo-av";
import * as ImagePicker from "expo-image-picker";
import Sprite from "../components/Sprite";
import colors from "../config/colors";

export default function SettingsScreen({
  route,
  navigation,
}: BottomTabScreenProps<RootBottomTabPropTypes, "Settings">) {
  const [sound, setSound] = useState<Audio.Sound>();
  const [image, setImage] = useState<string>();

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/FartSoundEffect.mp3")
    );
    setSound(sound);
    await sound.playAsync();
  }

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  let currentOs;
  if (Platform.OS === "ios") {
    currentOs = "ios";
  }
  if (Platform.OS === "android") {
    currentOs = "android";
  }

  return (
    <View style={styles.container}>
      <User username={route.params.username} />
      {!image && (
        <Text style={{ backgroundColor: colors.danger, ...styles.text }}>
          You need to upload an image
        </Text>
      )}
      {image && (
        <View style={{ alignSelf: "center" }}>
          <Sprite uri={image} />
        </View>
      )}
      <Text style={styles.text}>
        You are currently using a {currentOs} device
      </Text>
      <Button title="Choose your profile image" onPress={pickImage} />
      <Button
        title="Log out"
        onPress={() => {
          navigation
            .getParent<NavigationProp<RootLoginParamList>>()
            .navigate("Login");
          playSound();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    padding: 40,
    flex: 1,
    justifyContent: "space-between",
    alignContent: "center",
  },
  text: {
    color: colors.white,
    textAlign: "center",
    //marginBottom: 50,
  },
});
