import { View, TextInput } from "react-native";
import React from "react";

interface SearchInputProps {
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  icon: React.ReactNode;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Search...",
  value,
  onChangeText,
  icon, // Assuming icon is a React component
}) => {
  return (
    <View className="w-[90%] mx-auto flex-row items-center bg-lightGray rounded-2xl px-4 shadow-sm">
      {icon && <View className="mr-2">{icon}</View>}
      <TextInput
        className="flex-1 text-base text-black"
        placeholder={placeholder}
        placeholderTextColor="#888"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default SearchInput;
