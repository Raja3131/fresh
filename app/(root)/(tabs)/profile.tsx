import React from "react";
import { View, Text, Image, SafeAreaView, Alert } from "react-native";
import Button from "@/components/Button";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await AsyncStorage.removeItem("userEmail");
    await AsyncStorage.removeItem("userPassword");
    Alert.alert("Logged Out", "You have been logged out successfully.");
    router.replace("/(auth)/sign-in"); 
  };

  return (
    <SafeAreaView className="flex-1 bg-white items-center justify-center">
      <Image source={require("../../../assets/images/deliveryperson.jpeg")} className="w-24 h-24 rounded-full mb-4" />
      <Text className="text-2xl font-gilroy-bold mb-2" style={{ fontFamily: "Gilroy-Bold" }}>Manikandan</Text>
      <Text className="text-lg font-gilroy text-gray-500 mb-6" style={{ fontFamily: "Gilroy-Regular" }}>My Profile</Text>
      <View className="w-40">
      <Button title="Logout" onPress={handleLogout} />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
