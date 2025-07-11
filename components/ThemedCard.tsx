import { Colors } from "@/constants/Colors";
import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ViewStyle,
} from "react-native";

const ThemedCard = ({ style, ...props }: { style?: StyleProp<ViewStyle> }) => {
  const colorScheme = useColorScheme();
  const theme = Colors(colorScheme);

  return (
    <View
      style={[{ backgroundColor: theme.uiBackground }, styles.card, style]}
      {...props}
    >
      <Text>ThemedCard</Text>
    </View>
  );
};

export default ThemedCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    padding: 20,
  },
});
