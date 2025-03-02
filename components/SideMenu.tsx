import React, { useEffect, useRef, useState } from "react";
import { View, Text, TouchableOpacity, Animated, Dimensions } from "react-native";
import { ChevronLeft } from 'lucide-react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";


interface SideMenuProps {
  onLogout: () => void;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ onLogout, isOpen, setIsOpen }) => {
  const screenWidth = Dimensions.get("window").width;
  const slideAnim = useRef(new Animated.Value(-250)).current;
  const [usermail, setUsermail] = useState<string>("");
  const fetchUsername = async () => {
    const storedUsermail = await AsyncStorage.getItem("userEmail");
    if (storedUsermail) {
      setUsermail(storedUsermail);
    }
  };
  fetchUsername();
  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: isOpen ? 0 : -250,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <TouchableOpacity
          className="absolute w-full h-full bg-black/50"
          onPress={() => setIsOpen(false)}
          activeOpacity={1}
          style={{ zIndex: 1 }}
        />
      )}

      <Animated.View
        className="absolute top-0 left-0 h-full w-[250px] bg-white p-6 shadow-lg"
        style={{ transform: [{ translateX: slideAnim }], zIndex: 2 }}
      >
        <View className="flex-row justify-between items-center">
        <Text className="text-xl font-gilroy-bold">Hello, {usermail || "Guest"}</Text>
        <TouchableOpacity onPress={
            () => setIsOpen(false)
        } className="flex-end justify-end">
            <ChevronLeft size={24} color={'black'} />
  
        </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => {
            setIsOpen(false);
            onLogout();
          }}
          className="mt-6 bg-red-500 py-2 rounded-lg"
        >
          <Text className="text-white text-center font-gilroy-bold">Logout</Text>
        </TouchableOpacity>
      </Animated.View>
    </>
  );
};

export default SideMenu;
