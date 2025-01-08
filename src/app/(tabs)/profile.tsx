import { View, Text, Image, TextInput } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import Button from "~/src/components/Button";

export default function ProfileScreen() {
  const [image, setImage] = useState<string | null>(null);
  const [username, setUsername] = useState<string>("");

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <View className="p-3 flex-1">
      {image ? (
        <Image
          source={{
            uri: image,
          }}
          className="w-52 aspect-square rounded-full self-center bg-slate-300"
        />
      ) : (
        <View className="w-52 aspect-square rounded-full self-center bg-slate-300" />
      )}

      <Text
        onPress={pickImage}
        className="text-blue-500 font-semibold m-5 self-center"
      >
        Change
      </Text>

      <Text className="mb-2 font-semibold text-gray-500">Username</Text>
      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
        className="border border-gray-300 rounded-md p-3 "
      />

      <View className="gap-2 mt-auto">
        <Button title="Update profile" />
        <Button title="Sign out" />
      </View>
    </View>
  );
}
