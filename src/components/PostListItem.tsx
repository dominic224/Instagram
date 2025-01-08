import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { AdvancedImage } from "cloudinary-react-native";
import React, { useEffect, useState } from "react";
import { Text, useWindowDimensions, View } from "react-native";

import { FocusOn } from "@cloudinary/transformation-builder-sdk/qualifiers/focusOn";
import { focusOn } from "@cloudinary/transformation-builder-sdk/qualifiers/gravity";
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { cld } from "~/src/lib/cloudinary";
import PostContent from "./PostContent";
import { PostType } from "../type/PostType";
import { useAuth } from "../providers/AuthProvider";
import { supabase } from "../lib/supabase";
import { sendLikeNotification } from "../utils/notification";

export default function PostListItem({ post }: PostType) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeRecord, setLikeRecord] = useState<{ id: string } | null>(null);
  const { user } = useAuth();

  // useEffect(() => {
  //   if (post.my_likes.length > 0) {
  //     setLikeRecord(post.my_likes[0]);
  //     setIsLiked(true);
  //   }
  // }, [post.my_likes]);

  useEffect(() => {
    if (isLiked) {
      saveLike();
    } else {
      deleteLike();
    }
  }, [isLiked]);

  const saveLike = async () => {
    if (likeRecord) {
      return;
    }
    const { data } = await supabase
      .from("likes")
      .insert([{ user_id: user?.id, post_id: post.id }])
      .select();

    // send notification to the owner of that post
    if (data) {
      sendLikeNotification(data[0]);

      setLikeRecord(data[0]);
    }
  };

  const deleteLike = async () => {
    if (likeRecord) {
      const { error } = await supabase
        .from("likes")
        .delete()
        .eq("id", likeRecord?.id);
      if (!error) {
        setLikeRecord(null);
      }
    }
  };

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

      <PostContent post={post} />

      <View className="flex-row gap-3 p-3">
        <AntDesign
          onPress={() => setIsLiked(!isLiked)}
          name={isLiked ? "heart" : "hearto"}
          size={20}
          color={isLiked ? "crimson" : "black"}
        />
        <Ionicons name="chatbubble-outline" size={20} />
        <Feather name="send" size={20} />

        <Feather name="bookmark" size={20} className="ml-auto" />
      </View>

      <View className="px-3 gap-1">
        <Text className="font-semibold">
          {post.likes?.[0]?.count || 0} likes
        </Text>
        <Text>
          <Text className="font-semibold">
            {post.user.username || "New user"}{" "}
          </Text>
          {post.caption}
        </Text>
      </View>
    </View>
  );
}
