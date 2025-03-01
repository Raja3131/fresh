import { View, TextInput } from "react-native";
import React from "react";

interface SearchInputProps {
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Search...",
  value,
  onChangeText,
}) => {
  return (
    <View className="w-[90%] mx-auto flex-row items-center bg-lightGray rounded-2xl px-4 shadow-sm">
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
