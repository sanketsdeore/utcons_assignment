import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

import API from "../services/api";

export default function SignupScreen({
  navigation,
}) {

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleSignup = async () => {

    try {

      if (
        !name ||
        !email ||
        !password
      ) {
        return Alert.alert(
          "Error",
          "Fill all fields"
        );
      }

      await API.post("/register", {
        name,
        email,
        password,
      });

      Alert.alert(
        "Success",
        "Account created"
      );

      navigation.navigate("Login");

    } catch (error) {

      Alert.alert(
        "Error",
        error.response?.data?.message ||
          "Signup failed"
      );

    }

  };

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Create Account
      </Text>

      <Text style={styles.subtitle}>
        Signup to continue
      </Text>

      <TextInput
        placeholder="Name"
        placeholderTextColor="#94A3B8"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Email"
        placeholderTextColor="#94A3B8"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor="#94A3B8"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleSignup}
      >

        <Text style={styles.buttonText}>
          Signup
        </Text>

      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Login")
        }
      >

        <Text style={styles.link}>
          Already have an account?
        </Text>

      </TouchableOpacity>

    </View>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    padding: 24,
    justifyContent: "center",
  },

  title: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
  },

  subtitle: {
    color: "#94A3B8",
    marginBottom: 40,
  },

  input: {
    backgroundColor: "#1E293B",
    padding: 18,
    borderRadius: 14,
    color: "white",
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#3B82F6",
    padding: 18,
    borderRadius: 14,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
  },

  link: {
    color: "#94A3B8",
    textAlign: "center",
    marginTop: 20,
  },

});