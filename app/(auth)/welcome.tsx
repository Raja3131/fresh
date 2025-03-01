import { View, Text, ImageBackground } from "react-native";
import React from "react";
import Button from "@/components/Button";
import { useRouter } from "expo-router";

const WelcomeScreen = () => {
    const router = useRouter();
  return (
   <View className="flex-1">
     <ImageBackground
      source={require("../../assets/images/deliveryperson.jpeg")}
      className="flex-1 justify-end"
    >
      <View className="w-full px-6 pb-12 bg-black/50">
        <Text className="text-white text-3xl font-bold text-center mb-4">
          Welcome to Our Service
        </Text>
        <Text className="text-white text-lg text-center mb-6">
          Get your orders delivered fast and securely!
        </Text>
        <Button title="Get Started" onPress={() => router.push("/(auth)/sign-in")} />
      </View>
    </ImageBackground>
   </View>
  );
};

export default WelcomeScreen;
