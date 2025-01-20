import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Button from "~/components/ui/button/button";
import Input from "~/components/ui/input/input";
import { images } from "~/src/utils/images";

export default function Details() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ username: "", password: "" });

  const validateForm = () => {
    let errors = {
      username: "",
      password: "",
    };

    if (!username) errors.username = "Username is required";
    if (!password) errors.password = "Password is required";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
    }
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      style={styles.container}
    >
      <View style={styles.content}>
        <Image source={images.logo} style={styles.logo} resizeMode="contain" />
        <View style={styles.formContainer}>
          <Input
            value={username}
            onChangeText={setUsername}
            placeholder="Username"
            error={errors.username}
          />
          <Input
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            error={errors.password}
          />
        </View>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
        <Button
          label="Log in"
          style={{ marginTop: 20 }}
          onPress={handleSubmit}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  logo: {
    width: 182,
    height: 49,
  },
  formContainer: {
    width: "100%",
    gap: 10,
    alignItems: "center",
    marginTop: 40,
  },
  forgotPassword: {
    marginTop: 15,
    color: "#3797EF",
    alignSelf: "flex-end",
    fontWeight: "500",
    fontSize: 12,
  },
});
