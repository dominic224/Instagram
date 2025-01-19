import { Link } from "expo-router";
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
import Button from "~/components/ui/button/button";
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
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={images.logo} style={styles.logo} resizeMode="contain" />
        <Image source={images.avatar} style={styles.avt} />
        <Text style={styles.name}>jacob_w</Text>
        <Button label="Log in" style={{ marginTop: 15 }} />
        <Link href={{ pathname: "details" }} style={{ marginTop: 20 }}>
          <Text style={styles.switchAcc}>Switch accounts</Text>
        </Link>
      </View>
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
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
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

  switchAcc: {
    fontSize: 14,
    color: "#3797EF",
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
  logo: {
    width: 182,
    height: 49,
  },
});
