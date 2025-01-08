import { View, Text, Pressable } from "react-native";
import React from "react";

type Props = {
  title: string;
  onPress?: () => void;
};

export default function Button({ title, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      className="bg-blue-500 w-full p-3 items-center rounded-md"
    >
      <Text className="text-white font-semibold">{title}</Text>
    </Pressable>
  );
}
