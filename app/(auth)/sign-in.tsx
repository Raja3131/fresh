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
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Input from "../../components/Input";
import Button from "@/components/Button";
import { useRouter } from "expo-router";
import setCredentials from "../constants/auth";
import NotifyModal from "@/components/NotifyModal";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isKeyboardVisible, setKeyboardVisible] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const showListener = Keyboard.addListener("keyboardDidShow", () => setKeyboardVisible(true));
    const hideListener = Keyboard.addListener("keyboardDidHide", () => setKeyboardVisible(false));
    setCredentials();

    return () => {
      showListener.remove();
      hideListener.remove();
    };
  }, []);

  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);
  
  const handleLogin = async () => {
    if (!email || !password) {
      setModalMessage("Both fields are required.");
      setModalVisible(true);
      return;
    }

    if (!validateEmail(email)) {
      setModalMessage("Enter a valid email.");
      setModalVisible(true);
      return;
    }

    if (password.length < 6) {
      setModalMessage("Password must be at least 6 characters.");
      setModalVisible(true);
      return;
    }

    try {
      const storedEmail = await AsyncStorage.getItem("userEmail");
      const storedPassword = await AsyncStorage.getItem("userPassword");

      if (email === storedEmail && password === storedPassword) {
        router.push("/(root)/(tabs)/shop");
      } else {
        setModalMessage("Invalid Credentials. Please check your email and password.");
        setModalVisible(true);
      }
    } catch (error) {
      console.error("Error logging in: ", error);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar hidden={false} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
        className="flex-1"
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
            <View className="flex-1 justify-center px-6">
              <View className="items-center">
                <Image className="mt-10" source={require("../../assets/images/logoapple.png")} />
              </View>

              <View className="mt-6">
                <Text className="text-2xl font-bold py-4" style={{ fontFamily: "Gilroy-Bold" }}>Login</Text>
                <Text className="text-lg text-gray-500" style={{ fontFamily: "Gilroy-Regular" }}>Enter your email and password</Text>

                <View className="mt-6">
                  <Input label="Email" onChangeText={setEmail} value={email} />
                </View>

                <View className="mt-4">
                  <Input label="Password" onChangeText={setPassword} value={password} secureTextEntry={true} />
                </View>

                <TouchableOpacity onPress={() => {
                  setModalVisible(true)
                  setModalMessage("This Feature is Coming Soon")
                }}>
                  <Text className="text-sm text-gray-500 self-end mt-2" style={{ fontFamily: "Gilroy-Bold" }}>Forgot Password?</Text>
                </TouchableOpacity>

                <View className={`mt-6 ${isKeyboardVisible ? "mb-4" : "mb-16"}`}>
                  <Button title="Login" onPress={handleLogin} />
                </View>
              </View>

              {!isKeyboardVisible && (
                <View className="flex-row items-center justify-center mt-12">
                  <Text className="text-sm text-black-500" style={{ fontFamily: "Gilroy-Bold" }}>
                    Don't have an account?{" "}
                  </Text>
                  <TouchableOpacity onPress={() => {
                     setModalVisible(true)
                     setModalMessage("This Feature is Coming Soon")
                  }}>
                    <Text className="text-sm text-primary font-bold">Sign Up</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
            <NotifyModal visible={modalVisible} onClose={() => setModalVisible(false)}>
              <Text className="text-lg font-bold text-center">{modalMessage}</Text>
            </NotifyModal>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignIn;
