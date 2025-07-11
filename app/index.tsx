import Spacer from "@/components/Spacer";
import ThemedLogo from "@/components/ThemedLogo";
import ThemedText from "@/components/ThemedText";
import ThemedView from "@/components/ThemedView";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const index = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo style={styles.img} />
      <Spacer height={20} />
      <ThemedText title={true} style={styles.title}>
        The number 1
      </ThemedText>

      <Spacer height={10} />
      <ThemedText>Reading List app</ThemedText>
      <Spacer />

      <Link href="/about" style={styles.link}>
        <ThemedText>About Page</ThemedText>
      </Link>
      <Link href="/contact" style={styles.link}>
        <ThemedText>Contact Page</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default index;

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
  img: {
    width: 100,
    height: 100,
    marginVertical: 20,
  },
  card: {
    backgroundColor: "#eee",
    padding: 20,
    borderRadius: 5,
    boxShadow: "4px 4px rgba(0,0,0,0.1)",
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
