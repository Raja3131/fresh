import React from "react";
import { TextInput, Text, TextInputProps, View } from "react-native";

type InputProps = {
    label: string;
    value: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
    style?: any;
    errorMessage?: string;
    type?:string;
    
}

const Input: React.FC<InputProps> = ({ label, value, onChangeText, secureTextEntry, style }) => {
    return(
        <View>
            <Text className="text-gray-500 font-gilroy">{label}</Text>
            <TextInput
                style={{ borderBottomWidth: 1, borderColor: '#E2E2E2', padding: 10,marginBottom:10}}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                autoCapitalize='none'
                autoCorrect={false}
                keyboardType={secureTextEntry? 'visible-password' : 'default'}
                ></TextInput>

        </View>
    )
}

export default Input;
