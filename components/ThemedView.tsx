import { Colors } from "@/constants/Colors";
import React from "react";
import {
  StyleProp,
  StyleSheet,
  useColorScheme,
  View,
  ViewStyle,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const ThemedView = ({
  style,
  children,
  safe = false,
  ...props
}: {
  style?: StyleProp<ViewStyle>;
  safe?: boolean;
  children?: React.ReactNode;
}) => {
  const colorScheme = useColorScheme();
  const theme = Colors(colorScheme);

  if (!safe) {
    return (
      <View style={[{ backgroundColor: theme.background }, style]} {...props}>
        {children}
      </View>
    );
  }

  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={[
        {
          backgroundColor: theme.background,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </SafeAreaView>
  );
};

export default ThemedView;

const styles = StyleSheet.create({});
