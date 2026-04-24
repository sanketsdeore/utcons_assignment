import React, { useState } from "react";

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import API from "../services/api";

export default function LoginScreen({
    navigation,
}) {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        try {

            if (!email || !password) {

                return Alert.alert(
                    "Error",
                    "Fill all fields"
                );

            }

            setLoading(true);
            const response =
                await API.post("/login", {
                    email,
                    password,
                });
            setLoading(false);


            const token =
                response.data.token;

            await AsyncStorage.setItem(
                "token",
                token
            );

            navigation.replace("Home");

        } catch (error) {
            setLoading(false);
            Alert.alert(
                "Error",
                error.response?.data?.message ||
                "Login failed"
            );

        }

    };

    return (

        <View style={styles.container}>

            <Text style={styles.title}>
                Welcome Back
            </Text>

            <Text style={styles.subtitle}>
                Login to continue
            </Text>

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
                onPress={handleLogin}
            >

                <Text style={styles.buttonText}>
                    {loading ? "Loading..." : "Login"}
                </Text>

            </TouchableOpacity>

            <TouchableOpacity
                onPress={() =>
                    navigation.navigate("Signup")
                }
            >

                <Text style={styles.link}>
                    Don't have an account?
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