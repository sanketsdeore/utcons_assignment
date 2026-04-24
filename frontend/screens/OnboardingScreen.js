import React from "react";

import {
  View,
  Text,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import Onboarding from "react-native-onboarding-swiper";

export default function OnboardingScreen({
  navigation,
}) {

  const finishOnboarding =
    async () => {

      await AsyncStorage.setItem(
        "onboarded",
        "true"
      );

      navigation.replace("Login");

    };

  return (

    <Onboarding

      onSkip={finishOnboarding}

      onDone={finishOnboarding}

      pages={[

        {
          backgroundColor: "#0F172A",

          title: "Welcome",

          subtitle:
            "A modern authentication experience",

          image: (
            <View>
              <Text
                style={{
                  fontSize: 80,
                }}
              >
                🚀
              </Text>
            </View>
          ),
        },

        {
          backgroundColor: "#1E293B",

          title: "Secure Login",

          subtitle:
            "JWT based authentication system",

          image: (
            <View>
              <Text
                style={{
                  fontSize: 80,
                }}
              >
                🔐
              </Text>
            </View>
          ),
        },

        {
          backgroundColor: "#3B82F6",

          title: "Get Started",

          subtitle:
            "Login and continue instantly",

          image: (
            <View>
              <Text
                style={{
                  fontSize: 80,
                }}
              >
                📱
              </Text>
            </View>
          ),
        },

      ]}

    />

  );
}