import { Colors } from "@/constants/Colors";
import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  useColorScheme,
} from "react-native";

const ThemedText = ({
  style,
  title = false,
  children,
  ...props
}: {
  style?: StyleProp<TextStyle>;
  title?: boolean | string;
  children: React.ReactNode;
}) => {
  const colorScheme = useColorScheme();
  const theme = Colors(colorScheme);
  const textColor = title ? theme.title : theme.text;

  return (
    <Text style={[{ color: textColor }, style]} {...props}>
      {children}
    </Text>
  );
};

export default ThemedText;

const styles = StyleSheet.create({});
