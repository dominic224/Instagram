import React, { useEffect, useState } from "react";
import { Alert, FlatList, View } from "react-native";
import posts from "~/assets/data/posts.json";
import PostListItem from "~/src/components/PostListItem";
import { supabase } from "~/src/lib/supabase";

export default function FeedScreen() {
  // const [posts, setPosts] = useState<any[]>([]);

  // useEffect(() => {
  //   fetchPost();
  // }, []);

  // const fetchPost = async () => {
  //   let { data, error } = await supabase
  //     .from("posts")
  //     .select("*, user:profiles(*)");
  //   if (error) {
  //     Alert.alert("Something went wrong");
  //   }
  //   if (data) {
  //     setPosts(data);
  //   }
  // };

  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <PostListItem post={item} />}
      contentContainerStyle={{
        gap: 10,
        maxWidth: 512,
        width: "100%",
        alignSelf: "center",
      }}
      showsVerticalScrollIndicator={false}
    />
  );
}
