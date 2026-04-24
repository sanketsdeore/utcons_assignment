import React, { useEffect, useState } from "react";

import { View, Text, TouchableOpacity, StyleSheet, Animated } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import API from "../services/api";

export default function HomeScreen({ navigation }) {

    const fadeAnim = useState(
        new Animated.Value(0)
    )[0];

    const [user, setUser] = useState(null);

    useEffect(() => {
        fetchProfile();
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 800,
                useNativeDriver: true
            }
        ).start()
    }, []);

    const fetchProfile = async () => {

        try {

            const token =
                await AsyncStorage.getItem(
                    "token"
                );

            const response =
                await API.get("/profile", {
                    headers: {
                        Authorization: token,
                    },
                });

            setUser(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    const handleLogout = async () => {

        await AsyncStorage.removeItem(
            "token"
        );

        navigation.replace("Login");

    };

    return (
        <Animated.View
            style={{
                flex: 1,
                opacity: fadeAnim
            }}
        >
            <View style={styles.container}>

                <Text style={styles.title}>
                    Welcome
                </Text>

                <View style={styles.card}>

                    <Text style={styles.name}>
                        {user?.name}
                    </Text>

                    <Text style={styles.email}>
                        {user?.email}
                    </Text>

                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleLogout}
                >

                    <Text style={styles.buttonText}>
                        Logout
                    </Text>

                </TouchableOpacity>

            </View>
        </Animated.View>
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
        marginBottom: 30,
    },

    card: {
        backgroundColor: "#1E293B",
        padding: 24,
        borderRadius: 16,
        marginBottom: 30,
    },

    name: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
    },

    email: {
        color: "#94A3B8",
        marginTop: 10,
        fontSize: 16,
    },

    button: {
        backgroundColor: "#EF4444",
        padding: 18,
        borderRadius: 14,
        alignItems: "center",
    },

    buttonText: {
        color: "white",
        fontWeight: "bold",
    },

});