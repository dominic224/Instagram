import React, { useState } from "react";
import {
  Alert,
  AppState,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { supabase } from "~/src/lib/supabase";
import { images } from "~/src/utils/images";

// Tells Supabase Auth to continuously refresh the session automatically if
// the app is in the foreground. When this is added, you will continue to receive
// `onAuthStateChange` events with the `TOKEN_REFRESHED` or `SIGNED_OUT` event
// if the user's session is terminated. This should only be registered once.
AppState.addEventListener("change", (state) => {
  if (state === "active") {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    if (!session)
      Alert.alert("Please check your inbox for email verification!");
    setLoading(false);
  }

  return (
    <View className="flex flex-1 flex-col items-center justify-center bg-white">
      <Image source={images.logo} className="w-[182] h-[49]" />
      <Image source={images.avatar} style={styles.avt} />
      <Text style={styles.name}>jacob_w</Text>
      <Pressable style={styles.button}>
        <Text style={styles.login}>Log in</Text>
      </Pressable>
      <Text style={styles.switchAcc}>Switch accounts</Text>
      <View style={styles.footer}>
        <Text style={styles.footerTxt}>
          Don't have an account?{" "}
          <Text style={{ fontWeight: "600", color: "#000" }}>Sign up</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  avt: {
    width: 85,
    height: 85,
    borderRadius: "50%",
    marginTop: 35,
  },
  name: {
    fontSize: 14,
    fontWeight: "500",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#3797EF",
    width: "85%",
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  login: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  switchAcc: {
    fontSize: 14,
    color: "#3797EF",
    marginTop: 30,
    fontWeight: "500",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    borderTopWidth: 0.5,
    borderColor: "gray",
    paddingBottom: 60,
    paddingTop: 30,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  footerTxt: {
    fontSize: 12,
    color: "gray",
  },
});
