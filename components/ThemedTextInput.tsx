import { Colors } from "@/constants/Colors";
import React from "react";
import {
  StyleProp,
  TextInput,
  TextInputProps,
  TextStyle,
  useColorScheme,
} from "react-native";

const ThemedTextInput = ({
  style,
  ...props
}: TextInputProps & {
  style?: StyleProp<TextStyle>;
}) => {
  const colorScheme = useColorScheme();
  const theme = Colors(colorScheme);

  return (
    <TextInput
      style={[
        {
          backgroundColor: theme.uiBackground,
          color: theme.text,
          padding: 20,
          borderRadius: 6,
        },
        style,
      ]}
      {...props}
    />
  );
};

export default ThemedTextInput;
