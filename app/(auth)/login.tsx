import Spacer from "@/components/Spacer";
import ThemedButton from "@/components/ThemedButton";
import ThemedText from "@/components/ThemedText";
import ThemedTextInput from "@/components/ThemedTextInput";
import ThemedView from "@/components/ThemedView";
import { colorValues } from "@/constants/Colors";
import { Link } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log("register form submitted", email, password);
  };

  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title={true} style={styles.title}>
        Login
      </ThemedText>

      <ThemedTextInput
        placeholder="Email"
        style={{ width: "80%", marginBottom: 20 }}
        keyboardType="email-address"
        onChangeText={setEmail}
        value={email}
      />
      <ThemedTextInput
        placeholder="Password"
        style={{ width: "80%", marginBottom: 20 }}
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />

      <ThemedButton
        onPress={handleSubmit}
        // style={({ pressed }) => [styles.btn, pressed && styles.pressed]}
      >
        <Text style={{ color: "#f2f2f2" }}>Login</Text>
      </ThemedButton>

      <Spacer height={100} />

      <Link href={"/register"}>
        <ThemedText style={{ textAlign: "center" }}>
          Register instead
        </ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30,
  },
  btn: {
    backgroundColor: colorValues.primary,
    padding: 15,
    borderRadius: 5,
  },
  pressed: {
    opacity: 0.8,
  },
});
