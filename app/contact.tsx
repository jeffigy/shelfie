import ThemedText from "@/components/ThemedText";
import ThemedView from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, useColorScheme } from "react-native";

const Contact = () => {
  const colorScheme = useColorScheme();
  const theme = Colors(colorScheme);
  return (
    <ThemedView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <ThemedText style={styles.title}>Contact</ThemedText>
      <Link style={styles.link} href="/">
        <ThemedText>Home Page </ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Contact;

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
