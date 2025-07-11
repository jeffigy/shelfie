import { Colors } from "@/constants/Colors";
import React from "react";
import {
  StyleProp,
  StyleSheet,
  useColorScheme,
  View,
  ViewStyle,
} from "react-native";

const ThemedView = ({
  style,
  children,
  ...props
}: {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}) => {
  const colorScheme = useColorScheme();
  const theme = Colors(colorScheme);

  return (
    <View style={[{ backgroundColor: theme.background }, style]} {...props}>
      {children}
    </View>
  );
};

export default ThemedView;

const styles = StyleSheet.create({});
