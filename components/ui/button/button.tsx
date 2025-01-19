import React from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
} from "react-native";

interface Props {
  label: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

export default function Button({
  label,
  onPress,
  style,
  ...pressableProps
}: Props) {
  return (
    <Pressable
      style={[styles.button, style]}
      onPress={onPress}
      {...pressableProps}
    >
      <Text style={styles.login}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#3797EF",
    width: "100%",
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  login: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
});
