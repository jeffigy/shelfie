import Spacer from "@/components/Spacer";
import ThemedText from "@/components/ThemedText";
import ThemedView from "@/components/ThemedView";
import React from "react";
import { StyleSheet } from "react-native";

const Books = () => {
  return (
    <ThemedView safe={true} style={styles.container}>
      <Spacer />
      <ThemedText title={true} style={styles.heading}>
        Your Readling List
      </ThemedText>
    </ThemedView>
  );
};

export default Books;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
