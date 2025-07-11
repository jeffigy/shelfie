import DarkLogo from "@/assets/images/logo_dark.png";
import LightLogo from "@/assets/images/logo_light.png";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, useColorScheme } from "react-native";

const ThemedLogo = ({ ...props }) => {
  const colorScheme = useColorScheme();
  const logo = colorScheme === "dark" ? DarkLogo : LightLogo;
  return <Image source={logo} {...props} />;
};

export default ThemedLogo;

const styles = StyleSheet.create({});
