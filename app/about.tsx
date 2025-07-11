import ThemedText from "@/components/ThemedText";
import ThemedView from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, useColorScheme } from "react-native";

const About = () => {
  const colorScheme = useColorScheme();
  const theme = Colors(colorScheme);
  return (
    <ThemedView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <ThemedText style={styles.title}>About</ThemedText>
      <Link style={styles.link} href="/">
        <ThemedText>Home Page </ThemedText>
      </Link>
    </ThemedView>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
