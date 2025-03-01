import React from "react";
import { Text, TouchableOpacity, GestureResponderEvent, ActivityIndicator } from "react-native";

type ButtonProps = {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ title, onPress, disabled = false, loading = false }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      disabled={disabled || loading}
      className={`w-full bg-primary py-5 rounded-2xl items-center justify-center ${
        disabled ? "opacity-50" : ""
      }`}
    >
      {loading ? <ActivityIndicator color="#fff" /> : <Text className="text-white text-lg font-gilroy">{title}</Text>}
    </TouchableOpacity>
  );
};

export default Button;
