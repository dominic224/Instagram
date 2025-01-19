import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

interface Props {
  label: string;
  onPress?: () => void;
}

export default function Button({ label, onPress, ...pressableProps }: Props) {
  return (
    <Pressable style={styles.button} onPress={onPress} {...pressableProps}>
      <Text style={styles.login}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#3797EF",
    width: "85%",
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  login: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
});
