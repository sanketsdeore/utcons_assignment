import "react-native-gesture-handler";

import React, {
  useEffect,
  useState,
} from "react";

import {
  View,
  ActivityIndicator,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  NavigationContainer,
} from "@react-navigation/native";

import {
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import OnboardingScreen from "./screens/OnboardingScreen";

import LoginScreen from "./screens/LoginScreen";

import SignupScreen from "./screens/SignupScreen";

import HomeScreen from "./screens/HomeScreen";

const Stack =
  createNativeStackNavigator();

export default function App() {

  const [initialRoute,
    setInitialRoute] =
    useState(null);

  useEffect(() => {

    checkAppState();

  }, []);

  const checkAppState =
    async () => {

      const token =
        await AsyncStorage.getItem(
          "token"
        );

      const onboarded =
        await AsyncStorage.getItem(
          "onboarded"
        );

      if (token) {

        setInitialRoute("Home");

      } else if (onboarded) {

        setInitialRoute("Login");

      } else {

        setInitialRoute(
          "Onboarding"
        );

      }

    };

  if (!initialRoute) {

    return (

      <View
        style={{
          flex: 1,
          justifyContent:
            "center",
          alignItems:
            "center",
          backgroundColor:
            "#0F172A",
        }}
      >

        <ActivityIndicator
          size="large"
          color="white"
        />

      </View>

    );

  }

  return (

    <NavigationContainer>

      <Stack.Navigator
        initialRouteName={
          initialRoute
        }
        screenOptions={{
          headerShown: false,
        }}
      >

        <Stack.Screen
          name="Onboarding"
          component={
            OnboardingScreen
          }
        />

        <Stack.Screen
          name="Login"
          component={
            LoginScreen
          }
        />

        <Stack.Screen
          name="Signup"
          component={
            SignupScreen
          }
        />

        <Stack.Screen
          name="Home"
          component={
            HomeScreen
          }
        />

      </Stack.Navigator>

    </NavigationContainer>

  );
}