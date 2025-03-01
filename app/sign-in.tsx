import React, { useState, useEffect } from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../components/Input";
import Button from "@/components/Button";

const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const showListener = Keyboard.addListener("keyboardDidShow", () => setKeyboardVisible(true));
    const hideListener = Keyboard.addListener("keyboardDidHide", () => setKeyboardVisible(false));

    return () => {
      showListener.remove();
      hideListener.remove();
    };
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
        className="flex-1"
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
            <View className="flex-1 justify-center px-6">
              <View className="items-center">
                <Image className="mt-10" source={require("../assets/images/logoapple.png")} />
              </View>

              <View className="mt-6">
                <Text className="text-2xl font-bold py-4" style={{ fontFamily: "Gilroy-Bold" }}>Login</Text>
                <Text className="text-lg text-gray-500" style={{ fontFamily: "Gilroy-Regular" }}>Enter your email and password</Text>

                <View className="mt-6">
                  <Input label="Email" onChangeText={setEmail} value={email} />
                </View>

                <View className="mt-4">
                  <Input label="Password" onChangeText={setPassword} value={password} secureTextEntry />
                </View>

                <Text className="text-sm text-gray-500 self-end mt-2" style={{ fontFamily: "Gilroy-Bold" }}>Forgot Password?</Text>

                <View className={`mt-6 ${isKeyboardVisible ? "mb-4" : "mb-16"}`}>
                  <Button title="Login" onPress={() => alert("Button Clicked!")} />
                </View>
              </View>

              {!isKeyboardVisible && (
                <View className="flex items-center justify-center mt-12">
                  <Text className="text-sm text-black-500" style={{ fontFamily: "Gilroy-Bold" }}>Don't have an account? Sign Up</Text>
                </View>
              )}
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignIn;
