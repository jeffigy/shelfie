import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact</Text>
      <Link style={styles.link} href="/">
        Home Page
      </Link>
    </View>
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
