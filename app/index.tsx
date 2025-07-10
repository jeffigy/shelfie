import Logo from "@/assets/images/logo_light.png";
import { Image } from "expo-image";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
const index = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.img} />
      <Text style={styles.title}>The number 1</Text>
      <Text style={{ marginTop: 10, marginBottom: 30 }}>Reading List app</Text>

      <View style={styles.card}>
        <Text>Hello, this is a card.</Text>
      </View>

      <Link href="/about" style={styles.link}>
        About Page
      </Link>
      <Link href="/contact" style={styles.link}>
        Contact Page
      </Link>
    </View>
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
