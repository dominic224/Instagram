import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface Props {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  placeholderTextColor?: string;
  error?: string;
}

export default function Input({
  value,
  onChangeText,
  placeholder,
  placeholderTextColor = "#c8c8c8",
  error,
}: Props) {
  return (
    <View style={{ width: "100%" }}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        style={[
          styles.input,
          error && { borderColor: "red", borderWidth: 1.5 },
        ]}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#e1e1e1",
    width: "100%",
    height: 50,
    borderRadius: 5,
    alignItems: "center",
    paddingHorizontal: 15,
    backgroundColor: "#fafafa",
  },
  error: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
});
