import { Feather } from "@expo/vector-icons";
import React from "react";
import { Image, View } from "react-native";
import { images } from "../utils/images";

export default function Header() {
  return (
    <View className="flex flex-row items-center justify-between w-full">
      <Feather name="camera" size={24} color={"black"} />
      <Image source={images.logo} className="w-[105] h-[28]" />

      <Feather name="send" size={24} color={"black"} />
    </View>
  );
}
