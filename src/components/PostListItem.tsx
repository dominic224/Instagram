import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { AdvancedImage } from "cloudinary-react-native";
import React from "react";
import { Text, useWindowDimensions, View } from "react-native";

import { FocusOn } from "@cloudinary/transformation-builder-sdk/qualifiers/focusOn";
import { focusOn } from "@cloudinary/transformation-builder-sdk/qualifiers/gravity";
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { cld } from "~/src/lib/cloudinary";

type Props = {
  post: {
    id: string;
    image: string;
    image_url: string;
    caption: string;
    user: {
      id: string;
      avatar_url: string;
      image_url: string;
      username: string;
    };
  };
};

export default function PostListItem({ post }: Props) {
  const { width } = useWindowDimensions();

  const image = cld.image(post.image);
  image.resize(thumbnail().width(width).height(width));

  const avatar = cld.image(post.user.avatar_url);
  avatar.resize(
    thumbnail().width(48).height(48).gravity(focusOn(FocusOn.face()))
  );

  return (
    <View className="bg-white">
      <View className="p-3 flex-row items-center gap-2">
        <AdvancedImage
          cldImg={avatar}
          className="w-12 aspect-square rounded-full"
        />
        <Text className="font-semibold">{post.user.username}</Text>
      </View>

      <AdvancedImage cldImg={image} className="w-full aspect-[4/3]" />

      <View className="flex-row gap-3 p-3">
        <AntDesign name="hearto" size={20} />
        <Ionicons name="chatbubble-outline" size={20} />
        <Feather name="send" size={20} />

        <Feather name="bookmark" size={20} className="ml-auto" />
      </View>
    </View>
  );
}
