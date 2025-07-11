import { colorValues } from "@/constants/Colors";
import React from "react";
import { Pressable, StyleProp, StyleSheet, ViewStyle } from "react-native";

type ThemedButtonProps = React.ComponentProps<typeof Pressable> & {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const ThemedButton = ({ style, children, ...props }: ThemedButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.btn, pressed && styles.pressed, style]}
      {...props}
    >
      {children}
    </Pressable>
  );
};

export default ThemedButton;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colorValues.primary,
    padding: 18,
    borderRadius: 6,
    marginVertical: 10,
  },
  pressed: {
    opacity: 0.5,
  },
});
