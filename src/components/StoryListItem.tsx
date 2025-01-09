import { View, Text, Image } from "react-native";
import React from "react";

type Props = {
  story: any;
};

export default function StoryListItem({ story }: Props) {
  return (
    <View className="p-3 items-center gap-1">
      <Image
        source={{ uri: story?.image_url }}
        className="w-[62] aspect-square rounded-full border border-[#D91A46]"
      />
      <Text className="text-sm w-[62]" numberOfLines={1}>
        {story?.user?.username}
      </Text>
    </View>
  );
}
