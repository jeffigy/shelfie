import { Colors } from "@/constants/Colors";
import { UserProvider } from "@/context/UserContext";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, useColorScheme } from "react-native";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const theme = Colors(colorScheme);
  return (
    <UserProvider>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.navBackground,
          },
          headerTintColor: theme.title,
        }}
      >
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
      </Stack>
    </UserProvider>
  );
}

const styles = StyleSheet.create({});
