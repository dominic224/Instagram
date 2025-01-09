import { View, Text, FlatList } from "react-native";
import React from "react";
import posts from "~/assets/data/posts.json";
import StoryListItem from "./StoryListItem";

export default function StoryList() {
  return (
    <View className="bg-white border-b border-gray-300">
      <FlatList
        data={posts}
        renderItem={({ item }) => <StoryListItem story={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{}}
      />
    </View>
  );
}
