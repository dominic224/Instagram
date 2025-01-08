import { View, Text, Image } from "react-native";
import React from "react";
import { AntDesign, Ionicons, Feather } from "@expo/vector-icons";

export default function PostListItem({ post }) {
  return (
    <View className="bg-white">
      <View className="flex-row items-center p-3 gap-2">
        <Image
          source={{ uri: post.user.image_url }}
          className="w-12 aspect-square rounded-full"
        />
        <Text className="font-semibold">{post.user.username}</Text>
      </View>
      <Image source={{ uri: post.image_url }} className="w-full aspect-[4/3]" />
      <View className="flex-row gap-3 p-3">
        <AntDesign name="hearto" size={20} />
        <Ionicons name="chatbubble-outline" size={20} />
        <Feather name="send" size={20} />

        <Feather name="bookmark" size={20} className="ml-auto" />
      </View>
    </View>
  );
}
